/**
 * Moltcraft Client
 * 
 * Three.js-based 3D frontend for the Moltcraft voxel world.
 * Connects to the server via Socket.io for real-time sync.
 * 
 * Features:
 * - 3D voxel rendering
 * - First-person camera controls
 * - Block placement/removal
 * - Real-time agent movement sync
 * - Spatial chat display
 * 
 * Run with: npm run client
 */

import * as THREE from 'three';

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  /** World size (ground plane dimensions) */
  WORLD_SIZE: 100,
  /** Player movement speed */
  MOVE_SPEED: 0.5,
  /** Player jump height */
  JUMP_HEIGHT: 0.3,
  /** Maximum chat message length */
  MAX_CHAT_LENGTH: 500,
  /** Block colors available */
  BLOCK_COLORS: [
    0x8B4513, // Brown (dirt)
    0x228B22, // Green (grass)
    0x808080, // Gray (stone)
    0xFF6600, // Orange
    0x0066FF, // Blue
    0xFF0000, // Red
    0xFFFF00, // Yellow
    0xFFFFFF, // White
    0x000000  // Black
  ]
};

// ============================================
// GLOBAL STATE
// ============================================

let scene, camera, renderer;
let socket;
let myAgentId = null;
let agents = new Map(); // socketId -> Agent mesh
let blocks = new Map(); // "x,y,z" -> Block mesh
let selectedColor = CONFIG.BLOCK_COLORS[0];
let isPointerLocked = false;

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the Three.js scene
 */
function initScene() {
  // Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87CEEB); // Sky blue
  scene.fog = new THREE.Fog(0x87CEEB, 50, 150);

  // Create camera
  camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
  );
  camera.position.set(0, 10, 20);

  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  document.getElementById('app').appendChild(renderer.domElement);

  // Add lighting
  setupLighting();

  // Create ground
  createGround();

  // Handle window resize
  window.addEventListener('resize', onWindowResize);

  console.log('Scene initialized');
}

/**
 * Setup scene lighting
 */
function setupLighting() {
  // Ambient light (overall illumination)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  // Directional light (sun)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(50, 100, 50);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  scene.add(directionalLight);

  // Hemisphere light (sky/ground gradient)
  const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x228B22, 0.3);
  scene.add(hemisphereLight);
}

/**
 * Create the ground plane
 */
function createGround() {
  const groundGeometry = new THREE.PlaneGeometry(CONFIG.WORLD_SIZE, CONFIG.WORLD_SIZE);
  const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2; // Rotate to be flat
  ground.receiveShadow = true;
  scene.add(ground);

  // Add grid helper
  const gridHelper = new THREE.GridHelper(CONFIG.WORLD_SIZE, 50, 0x000000, 0x000000);
  gridHelper.material.opacity = 0.1;
  gridHelper.material.transparent = true;
  scene.add(gridHelper);
}

// ============================================
// AGENT MANAGEMENT
// ============================================

/**
 * Create an agent mesh (box avatar)
 * @param {Object} data - Agent data from server
 * @returns {THREE.Mesh} Agent mesh
 */
function createAgentMesh(data) {
  const geometry = new THREE.BoxGeometry(1, 2, 1);
  const material = new THREE.MeshLambertMaterial({ color: data.color || 0xff6600 });
  const mesh = new THREE.Mesh(geometry, material);
  
  mesh.position.set(
    data.position?.x || 0,
    data.position?.y || 1,
    data.position?.z || 0
  );
  
  mesh.castShadow = true;
  mesh.userData = { agentId: data.id, agentName: data.name };
  
  return mesh;
}

/**
 * Add an agent to the scene
 * @param {Object} data - Agent data from server
 */
function addAgent(data) {
  if (agents.has(data.id)) {
    updateAgent(data);
    return;
  }
  
  const mesh = createAgentMesh(data);
  scene.add(mesh);
  agents.set(data.id, mesh);
  
  console.log(`Agent joined: ${data.name}`);
}

/**
 * Update agent position
 * @param {Object} data - Agent update data
 */
function updateAgent(data) {
  const mesh = agents.get(data.id);
  if (mesh) {
    mesh.position.set(
      data.position?.x || mesh.position.x,
      data.position?.y || mesh.position.y,
      data.position?.z || mesh.position.z
    );
  }
}

/**
 * Remove an agent from the scene
 * @param {string} agentId - Agent ID to remove
 */
function removeAgent(agentId) {
  const mesh = agents.get(agentId);
  if (mesh) {
    scene.remove(mesh);
    agents.delete(agentId);
    console.log(`Agent left: ${agentId}`);
  }
}

// ============================================
// BLOCK MANAGEMENT
// ============================================

/**
 * Create a block mesh
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {number} z - Z coordinate
 * @param {number} color - Block color
 * @returns {THREE.Mesh} Block mesh
 */
function createBlockMesh(x, y, z, color) {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshLambertMaterial({ color });
  const mesh = new THREE.Mesh(geometry, material);
  
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData = { blockKey: `${x},${y},${z}` };
  
  return mesh;
}

/**
 * Add a block to the scene
 * @param {Object} data - Block data from server
 */
function addBlock(data) {
  const key = `${data.x},${data.y},${data.z}`;
  if (blocks.has(key)) return; // Already exists
  
  const mesh = createBlockMesh(data.x, data.y, data.z, data.color);
  scene.add(mesh);
  blocks.set(key, mesh);
}

/**
 * Remove a block from the scene
 * @param {Object} data - Block coordinates from server
 */
function removeBlock(data) {
  const key = `${data.x},${data.y},${data.z}`;
  const mesh = blocks.get(key);
  if (mesh) {
    scene.remove(mesh);
    blocks.delete(key);
  }
}

/**
 * Place a block at the given position
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate  
 * @param {number} z - Z coordinate
 */
function placeBlock(x, y, z) {
  socket.emit('block:place', { x, y, z, color: selectedColor });
}

// ============================================
// SOCKET.IO CONNECTION
// ============================================

/**
 * Connect to the Moltcraft server
 * @param {string} serverUrl - Server URL
 * @param {Object} agentData - Agent spawn data
 */
function connectToServer(serverUrl, agentData) {
  // Dynamically import Socket.io client
  import('socket.io-client').then(({ io }) => {
    socket = io(serverUrl);
    
    socket.on('connect', () => {
      console.log('Connected to server');
      
      // Spawn our agent
      socket.emit('agent:spawn', agentData);
    });
    
    socket.on('world:state', (worldBlocks) => {
      console.log(`Received world state: ${Object.keys(worldBlocks).length} blocks`);
      Object.values(worldBlocks).forEach(block => {
        addBlock(block);
      });
    });
    
    socket.on('world:agents', (agentList) => {
      agentList.forEach(addAgent);
    });
    
    socket.on('agent:joined', (data) => {
      addAgent(data);
      if (data.id === socket.id) {
        myAgentId = data.id;
      }
    });
    
    socket.on('agent:moved', (data) => {
      updateAgent(data);
    });
    
    socket.on('agent:left', (data) => {
      removeAgent(data.id);
    });
    
    socket.on('block:placed', (data) => {
      addBlock(data);
    });
    
    socket.on('block:removed', (data) => {
      removeBlock(data);
    });
    
    socket.on('chat:broadcast', (data) => {
      displayChatMessage(data.from, data.message);
    });
    
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
    
    socket.on('error', (error) => {
      console.error('Socket error:', error);
    });
  });
}

// ============================================
// INPUT HANDLING
// ============================================

/**
 * Handle keyboard input for movement
 * @param {KeyboardEvent} event 
 */
function onKeyDown(event) {
  if (!isPointerLocked) return;
  
  const speed = 0.5;
  
  switch (event.code) {
    case 'KeyW':
    case 'ArrowUp':
      camera.position.z -= speed;
      break;
    case 'KeyS':
    case 'ArrowDown':
      camera.position.z += speed;
      break;
    case 'KeyA':
    case 'ArrowLeft':
      camera.position.x -= speed;
      break;
    case 'KeyD':
    case 'ArrowRight':
      camera.position.x += speed;
      break;
    case 'Space':
      camera.position.y += 0.5;
      break;
    case 'ShiftLeft':
      camera.position.y -= 0.5;
      break;
  }
  
  // Send position update to server
  if (socket && myAgentId) {
    socket.emit('agent:move', {
      position: {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z
      }
    });
  }
}

/**
 * Handle mouse click for block placement
 * @param {MouseEvent} event 
 */
function onMouseClick(event) {
  if (!isPointerLocked) {
    renderer.domElement.requestPointerLock();
    return;
  }
  
  // Place block at center of screen
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  
  const intersects = raycaster.intersectObjects(scene.children);
  
  for (const intersect of intersects) {
    const point = intersect.point;
    const x = Math.round(point.x);
    const y = Math.round(point.y);
    const z = Math.round(point.z);
    
    // Don't place block inside the camera
    if (Math.abs(x - camera.position.x) < 1 && 
        Math.abs(y - camera.position.y) < 2 && 
        Math.abs(z - camera.position.z) < 1) {
      continue;
    }
    
    placeBlock(x, y, z);
    break;
  }
}

/**
 * Handle pointer lock state change
 */
function onPointerLockChange() {
  isPointerLocked = document.pointerLockElement === renderer.domElement;
  
  if (isPointerLocked) {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onMouseClick);
  } else {
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('click', onMouseClick);
  }
}

/**
 * Handle window resize
 */
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ============================================
// CHAT
// ============================================

/**
 * Display a chat message in the UI
 * @param {string} from - Sender name
 * @param {string} message - Message content
 */
function displayChatMessage(from, message) {
  const chatContainer = document.getElementById('chat');
  if (!chatContainer) return;
  
  const messageEl = document.createElement('div');
  messageEl.className = 'chat-message';
  messageEl.innerHTML = `<strong>${from}:</strong> ${message}`;
  chatContainer.appendChild(messageEl);
  
  // Auto-scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
  
  // Remove old messages
  while (chatContainer.children.length > 50) {
    chatContainer.removeChild(chatContainer.firstChild);
  }
}

// ============================================
// ANIMATION LOOP
// ============================================

/**
 * Main render loop
 */
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// ============================================
// EXPORTS (for testing)
// ============================================

export {
  initScene,
  createAgentMesh,
  createBlockMesh,
  addAgent,
  updateAgent,
  removeAgent,
  addBlock,
  removeBlock,
  placeBlock,
  getBlockKey: (x, y, z) => `${x},${y},${z}`,
  CONFIG
};

// ============================================
// INITIALIZATION
// ============================================

// Initialize scene
initScene();

// Start animation loop
animate();

// Set up pointer lock
document.addEventListener('pointerlockchange', onPointerLockChange);

// Connect to server (default to localhost:3000)
const serverUrl = new URLSearchParams(window.location.search).get('server') || 'http://localhost:3000';
const agentName = new URLSearchParams(window.location.search).get('name') || 'Player';
connectToServer(serverUrl, { name: agentName });

console.log('Moltcraft Client Loaded');
