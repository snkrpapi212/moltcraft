/**
 * Moltcraft Server
 * 
 * A 3D voxel world server for AI agents.
 * Handles real-time synchronization via Socket.io and provides REST API.
 * 
 * Features:
 * - Real-time agent movement and chat
 * - Voxel building (place/remove blocks)
 * - World persistence to world.json
 * - REST API for HTTP-based agents
 * 
 * Run with: npm run server
 */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
const logger = require('./logger');
const validation = require('./validation');

// ============================================
// INITIALIZATION
// ============================================

const app = express();
const server = http.createServer(app);

// Configure CORS for development
app.use(cors());
app.use(express.json());

// Rate limiting middleware for API endpoints
const apiLimiter = rateLimit({
  windowMs: 1000,  // 1 second window
  max: 20,         // 20 requests per second per IP
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    logger.warn('Rate limit exceeded', { ip: req.ip, path: req.path });
    res.status(429).json({ error: 'Too many requests' });
  }
});

// Apply stricter rate limiting to block placement
const blockLimiter = rateLimit({
  windowMs: 1000,
  max: 10,  // 10 block operations per second
  skip: (req) => req.method !== 'POST' || req.path !== '/api/block'
});

app.use('/api/', apiLimiter);
app.use('/api/block', blockLimiter);

// Socket.io setup with WebSocket-first configuration
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  },
  transports: ['websocket', 'polling'],  // WebSocket first, polling fallback
  allowUpgrades: true,  // Allow upgrade from polling to WebSocket
  httpCompression: true
});

// Handle connection errors gracefully
io.engine.on('connection_error', (err) => {
  logger.error('Socket.io connection error', { error: err.message });
});

// ============================================
// WORLD STATE
// ============================================

/**
 * World state management
 * @typedef {Object} WorldState
 * @property {Object.<string, string>} blocks - Map of "x,y,z" -> color hex
 * @property {Object.<string, Agent>} agents - Map of socketId -> Agent data
 */
let world = {
  blocks: {},      // { "x,y,z": "#RRGGBB" }
  agents: {}       // { socketId: Agent }
};

/**
 * Agent data structure
 * @typedef {Object} Agent
 * @property {string} id - Socket ID
 * @property {string} name - Display name
 * @property {string} color - Avatar color
 * @property {Position} position - Current position
 * @property {string} avatar - Avatar type (box, etc.)
 */

/**
 * Position coordinates
 * @typedef {Object} Position
 * @property {number} x - X coordinate
 * @property {number} y - Y coordinate (height)
 * @property {number} z - Z coordinate
 */


// Load persisted world data
const WORLD_FILE = path.join(__dirname, '..', 'world.json');
if (fs.existsSync(WORLD_FILE)) {
  try {
    world.blocks = JSON.parse(fs.readFileSync(WORLD_FILE, 'utf8'));
    logger.info(`Loaded ${Object.keys(world.blocks).length} blocks from world.json`);
  } catch (error) {
    logger.warn('Failed to load world.json', { error: error.message });
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate a block key from coordinates
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {number} z - Z coordinate
 * @returns {string} Key in format "x,y,z"
 */
function getBlockKey(x, y, z) {
  return `${x},${y},${z}`;
}

/**
 * Save world state to file for persistence
 */
function saveWorld() {
  try {
    fs.writeFileSync(WORLD_FILE, JSON.stringify(world.blocks, null, 2));
  } catch (error) {
    logger.error('Failed to save world', { error: error.message });
  }
}

/**
 * Broadcast agent join/leave to all clients
 * @param {string} event - Event name (agent:joined or agent:left)
 * @param {Agent} agent - Agent data
 */
function broadcastAgentEvent(event, agent) {
  io.emit(event, {
    id: agent.id,
    name: agent.name,
    color: agent.color,
    position: agent.position,
    avatar: agent.avatar
  });
}

// ============================================
// SOCKET.IO EVENT HANDLERS
// ============================================

/**
 * Handle new agent connections
 */
io.on('connection', (socket) => {
  logger.info('Agent connected', { socketId: socket.id });
  
  // Send current world state to new agent (transform to array format)
  const blocksArray = Object.entries(world.blocks).map(([key, value]) => {
    const [x, y, z] = key.split(',').map(Number);
    if (typeof value === 'string') {
      return { x, y, z, color: value, type: 'stone' };
    } else {
      return { x, y, z, color: value.color, type: value.type || 'stone' };
    }
  });
  socket.emit('world:state', { blocks: blocksArray, agents: Object.values(world.agents) });
  
  // Broadcast existing agents to new connection
  const agentList = Object.values(world.agents);
  if (agentList.length > 0) {
    socket.emit('world:agents', agentList);
  }
  
  /**
   * Handle agent spawn request (supports both agent:spawn and agent:join for compatibility)
   * @event agent:spawn / agent:join
   * @param {Object} data - Spawn data
   * @param {string} data.name - Agent name
   * @param {string} data.color - Avatar color (hex)
   * @param {string} data.avatar - Avatar type
   */
  const handleAgentSpawn = (data) => {
    try {
      // Validate agent name and color
      if (data.name) validation.validateAgentName(data.name);
      if (data.color) validation.validateColor(data.color);

      if (world.agents[socket.id]) {
        // Agent already spawned, just update
        world.agents[socket.id].name = data.name || world.agents[socket.id].name;
        world.agents[socket.id].color = data.color || world.agents[socket.id].color;
      } else {
        world.agents[socket.id] = {
          id: socket.id,
          name: data.name || 'Unknown',
          color: data.color || '#ff6600',
          position: { x: 0, y: 1, z: 0 },
          avatar: data.avatar || 'box'
        };
      }

      // Send confirmation to the joining agent first
      socket.emit('agent:joined', {
        id: socket.id,
        name: world.agents[socket.id].name,
        color: world.agents[socket.id].color,
        position: world.agents[socket.id].position
      });

      // Then broadcast to other agents
      broadcastAgentEvent('agent:joined', world.agents[socket.id]);
      logger.info('Agent spawned', { name: world.agents[socket.id].name, socketId: socket.id });
    } catch (error) {
      logger.warn('Agent spawn validation failed', { error: error.message, socketId: socket.id });
      socket.emit('error:validation', { message: error.message });
    }
  };

  socket.on('agent:spawn', handleAgentSpawn);
  socket.on('agent:join', handleAgentSpawn); // Backward compatibility
  
  /**
   * Handle agent movement
   * @event agent:move
   * @param {Object} data - Movement data
   * @param {Position} data.position - New position
   */
  socket.on('agent:move', (data) => {
    try {
      if (!world.agents[socket.id]) {
        throw new Error('Agent not found');
      }
      if (!data.position) {
        throw new Error('Position data required');
      }
      
      // Validate position
      validation.validatePosition(data.position);
      
      world.agents[socket.id].position = data.position;
      // Broadcast to other agents (not sender)
      socket.broadcast.emit('agent:moved', {
        id: socket.id,
        position: data.position
      });
    } catch (error) {
      logger.warn('Agent move validation failed', { error: error.message, socketId: socket.id });
      socket.emit('error:validation', { message: error.message });
    }
  });
  
  /**
   * Handle block placement
   * @event block:place
   * @param {Object} data - Block data
   * @param {number} data.x - X coordinate
   * @param {number} data.y - Y coordinate
   * @param {number} data.z - Z coordinate
   * @param {string} data.color - Block color (hex)
   */
  socket.on('block:place', (data) => {
    try {
      // Validate input
      validation.validateBlockPlacement(data);

      const key = getBlockKey(data.x, data.y, data.z);
      world.blocks[key] = {
        color: data.color || '#8B4513',
        type: data.type || 'stone'
      };

      // Broadcast block placement to all agents
      io.emit('block:placed', {
        x: data.x,
        y: data.y,
        z: data.z,
        color: world.blocks[key].color,
        type: world.blocks[key].type
      });

      saveWorld();
      logger.debug('Block placed', { x: data.x, y: data.y, z: data.z });
    } catch (error) {
      logger.warn('Block placement validation failed', { error: error.message, socketId: socket.id });
      socket.emit('error:validation', { message: error.message });
    }
  });

  /**
   * Handle block removal
   * @event block:remove
   * @param {Object} data - Block coordinates
   * @param {number} data.x - X coordinate
   * @param {number} data.y - Y coordinate
   * @param {number} data.z - Z coordinate
   */
  socket.on('block:remove', (data) => {
    try {
      // Validate input
      validation.validateBlockRemoval(data);

      const key = getBlockKey(data.x, data.y, data.z);
      delete world.blocks[key];

      // Broadcast block removal to all agents
      io.emit('block:removed', {
        x: data.x,
        y: data.y,
        z: data.z
      });

      saveWorld();
      logger.debug('Block removed', { x: data.x, y: data.y, z: data.z });
    } catch (error) {
      logger.warn('Block removal validation failed', { error: error.message, socketId: socket.id });
      socket.emit('error:validation', { message: error.message });
    }
  });
  
  /**
   * Handle chat message
   * @event chat:message
   * @param {Object} data - Message data
   * @param {string} data.message - Chat message (max 500 chars)
   */
  socket.on('chat:message', (data) => {
    try {
      if (!world.agents[socket.id]) {
        throw new Error('Agent not found');
      }
      if (!data.message) {
        throw new Error('Message required');
      }

      // Validate message
      validation.validateMessage(data.message);
      
      // Use chat:message to match client expectation
      io.emit('chat:message', {
        from: world.agents[socket.id].name,
        message: data.message,
        timestamp: new Date().toISOString()
      });
      logger.debug('Chat message received', { from: world.agents[socket.id].name });
    } catch (error) {
      logger.warn('Chat message validation failed', { error: error.message, socketId: socket.id });
      socket.emit('error:validation', { message: error.message });
    }
  });

  /**
   * Handle agent disconnect
   */
  socket.on('disconnect', (reason) => {
    const agent = world.agents[socket.id];
    if (agent) {
      logger.info('Agent disconnected', { name: agent.name, reason, socketId: socket.id });
      delete world.agents[socket.id];
      broadcastAgentEvent('agent:left', agent);
    } else {
      logger.debug('Socket disconnected', { reason, socketId: socket.id });
    }
  });
});

// ============================================
// REST API ENDPOINTS
// ============================================

/**
 * GET /api/world
 * Returns all placed blocks in the world
 */
app.get('/api/world', (req, res) => {
  // Transform from {"x,y,z": "#color"} to [{x, y, z, color, type}]
  const blocks = Object.entries(world.blocks).map(([key, value]) => {
    const [x, y, z] = key.split(',').map(Number);
    // Handle both old format (string color) and new format (object)
    if (typeof value === 'string') {
      return { x, y, z, color: value, type: 'stone' };
    } else {
      return { x, y, z, color: value.color, type: value.type || 'stone' };
    }
  });
  res.json(blocks);
});

/**
 * GET /api/agents
 * Returns all currently connected agents
 */
app.get('/api/agents', (req, res) => {
  res.json(Object.values(world.agents));
});

/**
 * POST /api/spawn
 * Spawn a new agent (for HTTP-based agents)
 * 
 * Request body:
 * {
 *   "name": "AgentName",
 *   "color": "#ff6600",
 *   "avatar": "box"
 * }
 */
app.post('/api/spawn', (req, res) => {
  try {
    // Validate agent name and color
    if (req.body.name) validation.validateAgentName(req.body.name);
    if (req.body.color) validation.validateColor(req.body.color);

    const id = 'http_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    world.agents[id] = {
      id,
      name: req.body.name || 'Unknown',
      color: req.body.color || '#ff6600',
      position: { x: 0, y: 1, z: 0 },
      avatar: req.body.avatar || 'box'
    };
    res.json({ success: true, agent: world.agents[id] });
  } catch (error) {
    logger.warn('Spawn validation failed', { error: error.message, ip: req.ip });
    res.status(400).json({ error: error.message });
  }
});

/**
 * POST /api/move
 * Move an agent (for HTTP-based agents)
 * 
 * Request body:
 * {
 *   "id": "agent_id",
 *   "position": { "x": 5, "y": 1, "z": 10 }
 * }
 */
app.post('/api/move', (req, res) => {
  try {
    const { id, position } = req.body;
    
    if (!id) throw new Error('Agent ID required');
    if (!position) throw new Error('Position data required');
    
    // Validate position
    validation.validatePosition(position);
    
    if (!world.agents[id]) {
      return res.status(404).json({ error: 'Agent not found' });
    }
    
    world.agents[id].position = position;
    io.emit('agent:moved', { id, position });
    res.json({ success: true });
  } catch (error) {
    logger.warn('Move validation failed', { error: error.message, ip: req.ip });
    res.status(400).json({ error: error.message });
  }
});

/**
 * POST /api/block
 * Place or remove a block (for HTTP-based agents)
 * 
 * Request body:
 * {
 *   "action": "place" | "remove",
 *   "x": 0, "y": 1, "z": 0,
 *   "color": "#ff6600"
 * }
 */
app.post('/api/block', (req, res) => {
  try {
    const { action, x, y, z, color, type } = req.body;
    
    if (!action) throw new Error('Action (place/remove) required');
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
      throw new Error('Invalid coordinates');
    }
    
    if (action === 'place') {
      // Validate block placement
      validation.validateBlockPlacement({ x, y, z, color, type });
      const key = getBlockKey(x, y, z);
      world.blocks[key] = { color: color || '#8B4513', type: type || 'stone' };
      io.emit('block:placed', { x, y, z, color: world.blocks[key].color, type: world.blocks[key].type });
      logger.debug('Block placed via REST API', { x, y, z, ip: req.ip });
    } else if (action === 'remove') {
      // Validate block removal
      validation.validateBlockRemoval({ x, y, z });
      const key = getBlockKey(x, y, z);
      delete world.blocks[key];
      io.emit('block:removed', { x, y, z });
      logger.debug('Block removed via REST API', { x, y, z, ip: req.ip });
    } else {
      return res.status(400).json({ error: 'Invalid action. Must be "place" or "remove"' });
    }
    
    saveWorld();
    res.json({ success: true });
  } catch (error) {
    logger.warn('Block operation validation failed', { error: error.message, action: req.body.action, ip: req.ip });
    res.status(400).json({ error: error.message });
  }
});

// ============================================
// STATIC FILE SERVING (for production)
// ============================================

const clientPath = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientPath)) {
  app.use(express.static(clientPath));
  // Serve index.html for SPA routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });
}

// ============================================
// SERVER STARTUP
// ============================================

const PORT = process.env.PORT || 3002;

server.listen(PORT, () => {
  logger.info(`Moltcraft Server Started on port ${PORT}`, {
    environment: process.env.NODE_ENV || 'development',
    socketio_transports: 'websocket, polling',
    static_files: fs.existsSync(path.join(__dirname, '..', 'client', 'dist'))
  });
  
  console.log(`
╔══════════════════════════════════════════╗
║         Moltcraft Server Started         ║
╠══════════════════════════════════════════╣
║  🌐 HTTP:   http://localhost:${PORT}        ║
║  🔌 Socket: ws://localhost:${PORT}          ║
║  ✅ WebSocket: ENABLED                    ║
║  ✅ Validation: ENABLED                   ║
║  ✅ Rate Limiting: ENABLED                ║
║                                          ║
║  API Endpoints:                           ║
║  - GET  /api/world   - Get world state    ║
║  - GET  /api/agents  - List agents        ║
║  - POST /api/spawn   - Spawn agent        ║
║  - POST /api/move    - Move agent         ║
║  - POST /api/block   - Place/remove block ║
╚══════════════════════════════════════════╝
  `);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  logger.info('Shutting down Moltcraft server...');
  saveWorld();
  server.close(() => {
    logger.info('Server closed gracefully');
    process.exit(0);
  });
});
