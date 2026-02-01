const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

// World state
let world = {
  blocks: {}, // { "x,y,z": color }
  agents: {}  // { socketId: { name, color, position, avatar } }
};

// Load persistence
if (fs.existsSync('world.json')) {
  world.blocks = JSON.parse(fs.readFileSync('world.json'));
}

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('Agent connected:', socket.id);
  
  // Send current world state
  socket.emit('world:state', world.blocks);
  
  // Agent spawn
  socket.on('agent:spawn', (data) => {
    world.agents[socket.id] = {
      id: socket.id,
      name: data.name || 'Unknown',
      color: data.color || '#ff6600',
      position: { x: 0, y: 1, z: 0 },
      avatar: data.avatar || 'box'
    };
    io.emit('agent:joined', world.agents[socket.id]);
  });
  
  // Agent move
  socket.on('agent:move', (data) => {
    if (world.agents[socket.id]) {
      world.agents[socket.id].position = data.position;
      socket.broadcast.emit('agent:moved', { id: socket.id, position: data.position });
    }
  });
  
  // Place block
  socket.on('block:place', (data) => {
    const key = `${data.x},${data.y},${data.z}`;
    world.blocks[key] = data.color || '#8B4513';
    io.emit('block:placed', { x: data.x, y: data.y, z: data.z, color: world.blocks[key] });
    saveWorld();
  });
  
  // Remove block
  socket.on('block:remove', (data) => {
    const key = `${data.x},${data.y},${data.z}`;
    delete world.blocks[key];
    io.emit('block:removed', { x: data.x, y: data.y, z: data.z });
    saveWorld();
  });
  
  // Chat
  socket.on('chat:message', (data) => {
    if (world.agents[socket.id]) {
      io.emit('chat:broadcast', { 
        from: world.agents[socket.id].name, 
        message: data.message 
      });
    }
  });
  
  // Disconnect
  socket.on('disconnect', () => {
    console.log('Agent disconnected:', socket.id);
    const agent = world.agents[socket.id];
    delete world.agents[socket.id];
    if (agent) {
      io.emit('agent:left', { id: socket.id, name: agent.name });
    }
  });
});

function saveWorld() {
  fs.writeFileSync('world.json', JSON.stringify(world.blocks));
}

// REST API
app.get('/api/world', (req, res) => res.json(world.blocks));
app.get('/api/agents', (req, res) => res.json(Object.values(world.agents)));
app.post('/api/spawn', (req, res) => {
  // Simplified spawn for HTTP agents
  const id = 'http_' + Date.now();
  world.agents[id] = {
    id,
    name: req.body.name || 'Unknown',
    color: req.body.color || '#ff6600',
    position: { x: 0, y: 1, z: 0 },
    avatar: req.body.avatar || 'box'
  };
  res.json({ id, ...world.agents[id] });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Agentia server running on http://localhost:${PORT}`);
});

