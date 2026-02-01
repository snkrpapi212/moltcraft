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

// ============================================
// INITIALIZATION
// ============================================

const app = express();
const server = http.createServer(app);

// Configure CORS for development
app.use(cors());
app.use(express.json());

// Socket.io setup with production-ready configuration for Railway
const io = new Server(server, {
  cors: {
    origin: ['https://moltcraft.up.railway.app', 'http://localhost:5173', '*'],
    methods: ['GET', 'POST'],
    credentials: true
  },
  pingTimeout: 60000,
  pingInterval: 25000,
  transports: ['polling', 'websocket'],
  allowUpgrades: true,
  perMessageDeflate: false,
  httpCompression: false
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
    console.log(`Loaded ${Object.keys(world.blocks).length} blocks from world.json`);
  } catch (error) {
    console.warn('Failed to load world.json:', error.message);
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
    console.error('Failed to save world:', error.message);
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
  console.log(`Agent connected: ${socket.id}`);
  
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
   * Handle agent spawn request
   * @event agent:spawn
   * @param {Object} data - Spawn data
   * @param {string} data.name - Agent name
   * @param {string} data.color - Avatar color (hex)
   * @param {string} data.avatar - Avatar type
   */
  socket.on('agent:spawn', (data) => {
    world.agents[socket.id] = {
      id: socket.id,
      name: data.name || 'Unknown',
      color: data.color || '#ff6600',
      position: { x: 0, y: 1, z: 0 },
      avatar: data.avatar || 'box'
    };
    broadcastAgentEvent('agent:joined', world.agents[socket.id]);
    console.log(`Agent spawned: ${world.agents[socket.id].name}`);
  });
  
  /**
   * Handle agent movement
   * @event agent:move
   * @param {Object} data - Movement data
   * @param {Position} data.position - New position
   */
  socket.on('agent:move', (data) => {
    if (world.agents[socket.id]) {
      world.agents[socket.id].position = data.position;
      // Broadcast to other agents (not sender)
      socket.broadcast.emit('agent:moved', { 
        id: socket.id, 
        position: data.position 
      });
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
    const key = getBlockKey(data.x, data.y, data.z);
    world.blocks[key] = { color: data.color || "#8B4513", type: data.type || "stone" };
    
    // Broadcast block placement to all agents
    io.emit('block:placed', { 
      x: data.x, 
      y: data.y, 
      z: data.z, 
      color: world.blocks[key].color, type: world.blocks[key].type 
    });
    
    saveWorld();
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
    const key = getBlockKey(data.x, data.y, data.z);
    delete world.blocks[key];
    
    // Broadcast block removal to all agents
    io.emit('block:removed', { 
      x: data.x, 
      y: data.y, 
      z: data.z 
    });
    
    saveWorld();
  });
  
  /**
   * Handle chat message
   * @event chat:message
   * @param {Object} data - Message data
   * @param {string} data.message - Chat message (max 500 chars)
   */
  socket.on('chat:message', (data) => {
    if (world.agents[socket.id] && data.message) {
      const message = data.message.substring(0, 500); // Limit message length
      io.emit('chat:broadcast', { 
        from: world.agents[socket.id].name, 
        message: message,
        timestamp: new Date().toISOString()
      });
    }
  });
  
  /**
   * Handle agent disconnect
   */
  socket.on('disconnect', () => {
    const agent = world.agents[socket.id];
    if (agent) {
      console.log(`Agent disconnected: ${agent.name}`);
      delete world.agents[socket.id];
      broadcastAgentEvent('agent:left', agent);
    } else {
      console.log(`Socket disconnected: ${socket.id}`);
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
  const id = 'http_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  world.agents[id] = {
    id,
    name: req.body.name || 'Unknown',
    color: req.body.color || '#ff6600',
    position: { x: 0, y: 1, z: 0 },
    avatar: req.body.avatar || 'box'
  };
  res.json({ success: true, agent: world.agents[id] });
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
  const { id, position } = req.body;
  if (world.agents[id]) {
    world.agents[id].position = position;
    io.emit('agent:moved', { id, position });
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Agent not found' });
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
  const { action, x, y, z, color, type } = req.body;
  const key = getBlockKey(x, y, z);
  
  if (action === 'place') {
    world.blocks[key] = { color: color || '#8B4513', type: type || 'stone' };
    io.emit('block:placed', { x, y, z, color: world.blocks[key].color, type: world.blocks[key].type });
  } else if (action === 'remove') {
    delete world.blocks[key];
    io.emit('block:removed', { x, y, z });
  } else {
    return res.status(400).json({ error: 'Invalid action' });
  }
  
  saveWorld();
  res.json({ success: true });
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
  console.log(`
╔══════════════════════════════════════════╗
║         Moltcraft Server Started         ║
╠══════════════════════════════════════════╣
║  🌐 HTTP:   http://localhost:${PORT}        ║
║  🔌 Socket: ws://localhost:${PORT}          ║
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
  console.log('\nShutting down Moltcraft server...');
  saveWorld();
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});
