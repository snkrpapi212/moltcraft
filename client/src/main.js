/**
 * Moltcraft Client - Ultimate Version
 * 
 * Three.js-based 3D frontend with Minecraft-style blocks
 * Features: Day/Night Cycle, Weather, Clouds, Sun, Moon, Stars
 */

import * as THREE from 'three';
import { io } from 'socket.io-client';

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  WORLD_SIZE: 150,
  BLOCK_SIZE: 1,
  
  // Time settings
  TIME_SPEED: 0.5,
  DAY_LENGTH: 120,
  
  // Weather settings
  WEATHER_CLEAR: 'clear',
  WEATHER_RAIN: 'rain',
  WEATHER_SNOW: 'snow',
  
  // Minecraft-style block types with colors
  BLOCK_TYPES: {
    GRASS: { color: 0x228B22, name: 'grass' },
    DIRT: { color: 0x8B4513, name: 'dirt' },
    STONE: { color: 0x696969, name: 'stone' },
    WOOD: { color: 0x5C4033, name: 'wood' },
    WOOD_DARK: { color: 0x3d2817, name: 'wood_dark' },
    LEAVES: { color: 0x228B22, name: 'leaves', transparent: true, opacity: 0.9 },
    GLASS: { color: 0xADD8E6, name: 'glass', transparent: true, opacity: 0.3 },
    BRICK: { color: 0x8B0000, name: 'brick' },
    SAND: { color: 0xF4D03F, name: 'sand' },
    COBBLESTONE: { color: 0x4a4a4a, name: 'cobblestone' },
    TORCH: { color: 0xFF6600, name: 'torch', emissive: 0xFF6600 },
    WATER: { color: 0x3498DB, name: 'water', transparent: true, opacity: 0.6 },
    SNOW: { color: 0xFFFFFF, name: 'snow' }
  },
  
  // Sky colors for different times
  SKY_COLORS: {
    day: { top: 0x0077ff, bottom: 0x87CEEB, sun: 0xffffff },
    sunset: { top: 0xff7f00, bottom: 0xffd700, sun: 0xff4500 },
    night: { top: 0x000033, bottom: 0x0a0a2a, sun: 0x000000 },
    dawn: { top: 0x4169E1, bottom: 0xffb6c1, sun: 0xff6347 }
  }
};

// ============================================
// GLOBAL STATE
// ============================================

let scene, camera, renderer;
let socket;
let myAgentId = null;
let agents = new Map();
let blocks = new Map();
let selectedBlockType = 'stone';
let isPointerLocked = false;
let clock = new THREE.Clock();

// Environment state
let timeOfDay = 0.5; // 0 = midnight, 0.5 = noon, 1 = midnight
let currentWeather = CONFIG.WEATHER_CLEAR;
let sun, moon, stars, clouds, weatherParticles;
let celestialGroup;

// ============================================
// INITIALIZATION
// ============================================

function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87CEEB);
  scene.fog = new THREE.FogExp2(0x87CEEB, 0.008);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 15, 30);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById('app').appendChild(renderer.domElement);

  setupLighting();
  createGround();
  createCelestialBodies();
  createStars();
  createClouds();
  createWeatherSystem();
  createSkybox();
  createGhostBlock();  // Block placement preview
  createHighlightMesh();  // Block highlight
  createUI();
  updateBlockSelectorUI();  // Initialize block selector UI

  window.addEventListener('resize', onWindowResize);
  console.log('Moltcraft Ultimate Scene initialized');
}

// ============================================
// CELESTIAL BODIES (Sun, Moon, Stars)
// ============================================

function createCelestialBodies() {
  celestialGroup = new THREE.Group();
  scene.add(celestialGroup);
  
  // Sun with glow
  const sunGeometry = new THREE.SphereGeometry(8, 32, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false });
  sun = new THREE.Mesh(sunGeometry, sunMaterial);
  celestialGroup.add(sun);
  
  const sunGlowMat = new THREE.MeshBasicMaterial({ color: 0xffdd44, transparent: true, opacity: 0.3, fog: false });
  const sunGlow = new THREE.Mesh(new THREE.SphereGeometry(12, 32, 32), sunGlowMat);
  sun.add(sunGlow);
  
  // Moon with craters
  const moonGeometry = new THREE.SphereGeometry(4, 32, 32);
  const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false });
  moon = new THREE.Mesh(moonGeometry, moonMaterial);
  celestialGroup.add(moon);
  
  const craterMat = new THREE.MeshBasicMaterial({ color: 0xcccccc });
  for (let i = 0; i < 8; i++) {
    const crater = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), craterMat);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.5;
    crater.position.setFromSphericalCoords(4.2, phi, theta);
    moon.add(crater);
  }
}

function createStars() {
  const starsGeometry = new THREE.BufferGeometry();
  const starCount = 2000;
  const positions = new Float32Array(starCount * 3);
  
  for (let i = 0; i < starCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.8 + 0.1;
    const r = 380;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.cos(phi);
    positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
  }
  
  starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1.5, transparent: true, opacity: 0, sizeAttenuation: true });
  stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);
}

function createClouds() {
  const cloudGroup = new THREE.Group();
  
  for (let i = 0; i < 30; i++) {
    const cloud = createCloud();
    cloud.position.set(Math.random() * 400 - 200, 40 + Math.random() * 30, Math.random() * 400 - 200);
    cloud.userData.speed = 0.02 + Math.random() * 0.03;
    cloudGroup.add(cloud);
  }
  
  clouds = cloudGroup;
  scene.add(clouds);
}

function createCloud() {
  const cloudGroup = new THREE.Group();
  const puffCount = 3 + Math.floor(Math.random() * 5);
  
  for (let i = 0; i < puffCount; i++) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(3 + Math.random() * 4, 8, 8),
      new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
    );
    puff.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 10);
    cloudGroup.add(puff);
  }
  
  return cloudGroup;
}

function createWeatherSystem() {
  weatherParticles = new THREE.Group();
  scene.add(weatherParticles);
}

function createRainParticles() {
  const rainGeo = new THREE.BufferGeometry();
  const count = 5000;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 1] = Math.random() * 100;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
  }
  
  rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const rainMat = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.3, transparent: true, opacity: 0.6 });
  return new THREE.Points(rainGeo, rainMat);
}

function createSnowParticles() {
  const snowGeo = new THREE.BufferGeometry();
  const count = 3000;
  const positions = new Float32Array(count * 3);
  const velocities = [];
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 1] = Math.random() * 80;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
    velocities.push({ x: (Math.random() - 0.5) * 0.1, y: -0.1 - Math.random() * 0.1, z: (Math.random() - 0.5) * 0.1 });
  }
  
  snowGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const snowMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, transparent: true, opacity: 0.9 });
  const snow = new THREE.Points(snowGeo, snowMat);
  snow.userData.velocities = velocities;
  return snow;
}

function setWeather(weather) {
  currentWeather = weather;
  
  while (weatherParticles.children.length > 0) {
    const child = weatherParticles.children[0];
    weatherParticles.remove(child);
    if (child.geometry) child.geometry.dispose();
    if (child.material) child.material.dispose();
  }
  
  if (weather === CONFIG.WEATHER_RAIN) {
    weatherParticles.add(createRainParticles());
    scene.fog.density = 0.02;
  } else if (weather === CONFIG.WEATHER_SNOW) {
    weatherParticles.add(createSnowParticles());
    scene.fog.density = 0.015;
  } else {
    scene.fog.density = 0.008;
  }
  
  const weatherDisplay = document.getElementById('weather-value');
  if (weatherDisplay) weatherDisplay.textContent = weather.toUpperCase();
}

// ============================================
// TIME OF DAY
// ============================================

function updateCelestialBodies(delta) {
  timeOfDay += (delta / CONFIG.DAY_LENGTH) * CONFIG.TIME_SPEED;
  if (timeOfDay >= 1) timeOfDay -= 1;
  
  const sunAngle = timeOfDay * Math.PI * 2 - Math.PI / 2;
  const moonAngle = sunAngle + Math.PI;
  const orbitRadius = 200;
  
  sun.position.x = Math.cos(sunAngle) * orbitRadius;
  sun.position.y = Math.sin(sunAngle) * orbitRadius;
  sun.position.z = 0;
  
  moon.position.x = Math.cos(moonAngle) * orbitRadius;
  moon.position.y = Math.sin(moonAngle) * orbitRadius;
  moon.position.z = 0;
  
  updateSkyColors();
  updateStars();
  
  sun.visible = sun.position.y > -20;
  moon.visible = moon.position.y > -20;
}

function updateSkyColors() {
  let topColor, bottomColor;
  
  if (timeOfDay > 0.2 && timeOfDay < 0.3) {
    const t = (timeOfDay - 0.2) / 0.1;
    topColor = lerpColor(CONFIG.SKY_COLORS.night.top, CONFIG.SKY_COLORS.dawn.top, t);
    bottomColor = lerpColor(CONFIG.SKY_COLORS.night.bottom, CONFIG.SKY_COLORS.dawn.bottom, t);
  } else if (timeOfDay >= 0.3 && timeOfDay < 0.4) {
    const t = (timeOfDay - 0.3) / 0.1;
    topColor = lerpColor(CONFIG.SKY_COLORS.dawn.top, CONFIG.SKY_COLORS.day.top, t);
    bottomColor = lerpColor(CONFIG.SKY_COLORS.dawn.bottom, CONFIG.SKY_COLORS.day.bottom, t);
  } else if (timeOfDay >= 0.4 && timeOfDay < 0.7) {
    topColor = CONFIG.SKY_COLORS.day.top;
    bottomColor = CONFIG.SKY_COLORS.day.bottom;
  } else if (timeOfDay >= 0.7 && timeOfDay < 0.8) {
    const t = (timeOfDay - 0.7) / 0.1;
    topColor = lerpColor(CONFIG.SKY_COLORS.day.top, CONFIG.SKY_COLORS.sunset.top, t);
    bottomColor = lerpColor(CONFIG.SKY_COLORS.day.bottom, CONFIG.SKY_COLORS.sunset.bottom, t);
  } else if (timeOfDay >= 0.8 && timeOfDay < 0.9) {
    const t = (timeOfDay - 0.8) / 0.1;
    topColor = lerpColor(CONFIG.SKY_COLORS.sunset.top, CONFIG.SKY_COLORS.night.top, t);
    bottomColor = lerpColor(CONFIG.SKY_COLORS.sunset.bottom, CONFIG.SKY_COLORS.night.bottom, t);
  } else {
    topColor = CONFIG.SKY_COLORS.night.top;
    bottomColor = CONFIG.SKY_COLORS.night.bottom;
  }
  
  // Update sky shader
  const skyObj = scene.children.find(c => c.material && c.material.uniforms);
  if (skyObj && skyObj.material.uniforms) {
    skyObj.material.uniforms.topColor.value.setHex(topColor);
    skyObj.material.uniforms.bottomColor.value.setHex(bottomColor);
  }
  scene.background.setHex(topColor);
  scene.fog.color.setHex(topColor);
}

function updateStars() {
  if (!stars) return;
  const isNight = timeOfDay > 0.75 || timeOfDay < 0.25;
  stars.material.opacity = isNight ? Math.min(stars.material.opacity + 0.01, 0.8) : Math.max(stars.material.opacity - 0.02, 0);
}

function lerpColor(color1, color2, t) {
  return new THREE.Color(color1).lerp(new THREE.Color(color2), t).getHex();
}

function updateClouds(delta) {
  if (!clouds) return;
  clouds.children.forEach(cloud => {
    cloud.position.x += cloud.userData.speed;
    if (cloud.position.x > 200) cloud.position.x = -200;
  });
}

function updateWeather(delta) {
  if (!weatherParticles) return;
  weatherParticles.children.forEach(particles => {
    const positions = particles.geometry.attributes.position.array;
    
    if (currentWeather === CONFIG.WEATHER_RAIN) {
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 1.5;
        if (positions[i + 1] < 0) {
          positions[i + 1] = 100;
          positions[i] = (Math.random() - 0.5) * 200;
          positions[i + 2] = (Math.random() - 0.5) * 200;
        }
      }
    } else if (currentWeather === CONFIG.WEATHER_SNOW) {
      const velocities = particles.userData.velocities;
      for (let i = 0; i < positions.length; i += 3) {
        const vi = i / 3;
        positions[i] += velocities[vi].x + Math.sin(Date.now() * 0.001 + i) * 0.02;
        positions[i + 1] += velocities[vi].y;
        positions[i + 2] += velocities[vi].z + Math.cos(Date.now() * 0.001 + i) * 0.02;
        if (positions[i + 1] < 0) {
          positions[i + 1] = 80;
          positions[i] = (Math.random() - 0.5) * 200;
          positions[i + 2] = (Math.random() - 0.5) * 200;
        }
      }
    }
    particles.geometry.attributes.position.needsUpdate = true;
  });
}

function updateTimeDisplay() {
  const timeEl = document.getElementById('time-value');
  if (timeEl) {
    const hours = Math.floor(timeOfDay * 24);
    const minutes = Math.floor((timeOfDay * 24 - hours) * 60);
    timeEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
}

// ============================================
// LIGHTING
// ============================================

function setupLighting() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xffffff, 1);
  sunLight.position.set(100, 100, 50);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 500;
  sunLight.shadow.camera.left = -100;
  sunLight.shadow.camera.right = 100;
  sunLight.shadow.camera.top = 100;
  sunLight.shadow.camera.bottom = -100;
  scene.add(sunLight);
}

// ============================================
// SKYBOX
// ============================================

function createSkybox() {
  const skyGeo = new THREE.SphereGeometry(400, 32, 32);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      topColor: { value: new THREE.Color(0x0077ff) },
      bottomColor: { value: new THREE.Color(0x87CEEB) },
      offset: { value: 33 },
      exponent: { value: 0.6 }
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `,
    side: THREE.BackSide
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));
}

// ============================================
// GROUND
// ============================================

function createGround() {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(CONFIG.WORLD_SIZE, CONFIG.WORLD_SIZE),
    new THREE.MeshLambertMaterial({ color: 0x228B22 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
}

// ============================================
// UI
// ============================================

function createUI() {
  const overlay = document.createElement('div');
  overlay.id = 'ui-overlay';
  overlay.innerHTML = `
    <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:24px;height:24px;pointer-events:none;z-index:1000;">
      <div style="position:absolute;top:50%;left:0;width:24px;height:2px;background:rgba(255,255,255,0.8);transform:translateY(-50%);border-radius:1px;"></div>
      <div style="position:absolute;top:0;left:50%;width:2px;height:24px;background:rgba(255,255,255,0.8);transform:translateX(-50%);border-radius:1px;"></div>
      <div style="position:absolute;top:50%;left:50%;width:4px;height:4px;background:white;transform:translate(-50%,-50%);border-radius:50%;"></div>
    </div>
    <div id="block-selector" style="position:fixed;bottom:20px;left:50%;transform:translateX(-50%);display:flex;gap:8px;background:rgba(0,0,0,0.6);padding:12px;border-radius:12px;backdrop-filter:blur(5px);">
      <button class="block-btn" data-type="stone" style="width:50px;height:50px;background:linear-gradient(135deg,#696969,#808080);border:3px solid transparent;border-radius:8px;cursor:pointer;position:relative;">
        <span style="position:absolute;bottom:2px;right:4px;font-size:10px;color:white;font-weight:bold;">1</span>
      </button>
      <button class="block-btn" data-type="wood" style="width:50px;height:50px;background:linear-gradient(135deg,#5C4033,#8B4513);border:3px solid transparent;border-radius:8px;cursor:pointer;position:relative;">
        <span style="position:absolute;bottom:2px;right:4px;font-size:10px;color:white;font-weight:bold;">2</span>
      </button>
      <button class="block-btn" data-type="brick" style="width:50px;height:50px;background:linear-gradient(135deg,#8B0000,#A52A2A);border:3px solid transparent;border-radius:8px;cursor:pointer;position:relative;">
        <span style="position:absolute;bottom:2px;right:4px;font-size:10px;color:white;font-weight:bold;">3</span>
      </button>
      <button class="block-btn" data-type="glass" style="width:50px;height:50px;background:linear-gradient(135deg,rgba(173,216,230,0.6),rgba(135,206,235,0.8));border:3px solid transparent;border-radius:8px;cursor:pointer;position:relative;">
        <span style="position:absolute;bottom:2px;right:4px;font-size:10px;color:black;font-weight:bold;">4</span>
      </button>
      <button class="block-btn" data-type="torch" style="width:50px;height:50px;background:linear-gradient(135deg,#FF6600,#FF8C00);border:3px solid transparent;border-radius:8px;cursor:pointer;position:relative;">
        <span style="position:absolute;bottom:2px;right:4px;font-size:10px;color:black;font-weight:bold;">5</span>
      </button>
    </div>
    <div style="position:fixed;top:20px;left:20px;color:white;background:rgba(0,0,0,0.6);padding:12px;border-radius:8px;font-family:monospace;font-size:13px;backdrop-filter:blur(5px);">
      <div>🕹️ WASD: Move | SPACE: Jump</div>
      <div>🖱️ Click: Place Block | Shift+Click: Remove</div>
      <div>⌨️ 1-5: Select Block | T: Chat</div>
    </div>
    <div style="position:fixed;top:20px;right:20px;color:white;background:rgba(0,0,0,0.6);padding:12px;border-radius:8px;font-family:monospace;font-size:13px;backdrop-filter:blur(5px);">
      <div>⏰ Time: <span id="time-value">12:00</span></div>
      <div>🌤️ Weather: <span id="weather-value">CLEAR</span></div>
    </div>
    <div style="position:fixed;bottom:90px;right:20px;display:flex;gap:5px;">
      <button onclick="setWeather('clear')" style="background:#87CEEB;color:black;padding:8px 12px;border:none;cursor:pointer;border-radius:5px;font-size:16px;" title="Clear">☀️</button>
      <button onclick="setWeather('rain')" style="background:#3498DB;color:white;padding:8px 12px;border:none;cursor:pointer;border-radius:5px;font-size:16px;" title="Rain">🌧️</button>
      <button onclick="setWeather('snow')" style="background:#FFFFFF;color:black;padding:8px 12px;border:none;cursor:pointer;border-radius:5px;font-size:16px;" title="Snow">❄️</button>
    </div>
    <div id="chat" style="position:fixed;bottom:90px;left:20px;max-height:200px;overflow-y:auto;color:white;background:rgba(0,0,0,0.4);padding:10px;border-radius:8px;font-family:monospace;font-size:13px;backdrop-filter:blur(5px);max-width:300px;"></div>
  `;
  document.body.appendChild(overlay);

  // Add click handlers for block buttons
  document.querySelectorAll('.block-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedBlockType = btn.dataset.type;
      updateBlockSelectorUI();
    });
  });
}

function updateBlockSelectorUI() {
  document.querySelectorAll('.block-btn').forEach(btn => {
    if (btn.dataset.type === selectedBlockType) {
      btn.style.borderColor = '#00ff00';
      btn.style.transform = 'scale(1.1)';
    } else {
      btn.style.borderColor = 'transparent';
      btn.style.transform = 'scale(1)';
    }
  });
}

// ============================================
// AGENT MANAGEMENT
// ============================================

function createAgentMesh(data) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 1.8, 0.8),
    new THREE.MeshLambertMaterial({ color: data.color || 0xff6600 })
  );
  mesh.position.set(data.position?.x || 0, (data.position?.y || 1) + 0.9, data.position?.z || 0);
  mesh.castShadow = true;
  mesh.userData = { agentId: data.id, agentName: data.name };
  return mesh;
}

function addAgent(data) {
  if (agents.has(data.id)) { updateAgent(data); return; }
  const mesh = createAgentMesh(data);
  scene.add(mesh);
  agents.set(data.id, mesh);
}

function updateAgent(data) {
  const mesh = agents.get(data.id);
  if (mesh) mesh.position.set(data.position?.x || mesh.position.x, (data.position?.y || mesh.position.y) + 0.9, data.position?.z || mesh.position.z);
}

function removeAgent(agentId) {
  const mesh = agents.get(agentId);
  if (mesh) { scene.remove(mesh); agents.delete(agentId); }
}

// ============================================
// BLOCK MANAGEMENT
// ============================================

function createBlockMesh(x, y, z, color, blockType = 'stone') {
  const blockConfig = CONFIG.BLOCK_TYPES[blockType.toUpperCase()] || {};
  const materialOptions = { color: color || blockConfig.color || 0x696969 };
  if (blockConfig.transparent) { materialOptions.transparent = true; materialOptions.opacity = blockConfig.opacity || 0.5; }
  if (blockConfig.emissive) { materialOptions.emissive = blockConfig.emissive; materialOptions.emissiveIntensity = 0.5; }
  
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(CONFIG.BLOCK_SIZE, CONFIG.BLOCK_SIZE, CONFIG.BLOCK_SIZE), new THREE.MeshLambertMaterial(materialOptions));
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData = { blockKey: `${x},${y},${z}`, blockType };
  return mesh;
}

function addBlock(data) {
  const key = `${data.x},${data.y},${data.z}`;
  if (blocks.has(key)) return;
  const mesh = createBlockMesh(data.x, data.y, data.z, data.color, data.type);
  scene.add(mesh);
  blocks.set(key, mesh);
}

function removeBlock(data) {
  const key = `${data.x},${data.y},${data.z}`;
  const mesh = blocks.get(key);
  if (mesh) { scene.remove(mesh); blocks.delete(key); }
}

function placeBlock(x, y, z) {
  const blockConfig = CONFIG.BLOCK_TYPES[selectedBlockType.toUpperCase()] || {};
  socket.emit('block:place', { x, y, z, color: '#' + (blockConfig.color || 0x696969).toString(16).padStart(6, '0'), type: selectedBlockType });
}

function removeBlockAt(x, y, z) {
  socket.emit('block:remove', { x, y, z });
}

// ============================================
// PLAYER CONTROLS
// ============================================

const moveState = { forward: false, backward: false, left: false, right: false };
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

function onKeyDown(event) {
  switch (event.code) {
    case 'KeyW': moveState.forward = true; break;
    case 'KeyS': moveState.backward = true; break;
    case 'KeyA': moveState.left = true; break;
    case 'KeyD': moveState.right = true; break;
    case 'Space': if (isGrounded) { velocityY = jumpForce; isGrounded = false; } break;
    case 'Digit1': selectedBlockType = 'stone'; updateBlockSelectorUI(); break;
    case 'Digit2': selectedBlockType = 'wood'; updateBlockSelectorUI(); break;
    case 'Digit3': selectedBlockType = 'brick'; updateBlockSelectorUI(); break;
    case 'Digit4': selectedBlockType = 'glass'; updateBlockSelectorUI(); break;
    case 'Digit5': selectedBlockType = 'torch'; updateBlockSelectorUI(); break;
    case 'KeyT': const msg = prompt('Message:'); if (msg) socket.emit('chat:message', { message: msg }); break;
  }
}

function onKeyUp(event) {
  switch (event.code) {
    case 'KeyW': moveState.forward = false; break;
    case 'KeyS': moveState.backward = false; break;
    case 'KeyA': moveState.left = false; break;
    case 'KeyD': moveState.right = false; break;
  }
}

function updatePlayer(delta) {
  if (!isPointerLocked) return;
  const speed = 10 * delta;
  direction.z = Number(moveState.forward) - Number(moveState.backward);
  direction.x = Number(moveState.right) - Number(moveState.left);
  direction.normalize();
  velocity.z = direction.z * speed;
  velocity.x = direction.x * speed;
  camera.position.x += velocity.x;
  camera.position.z += velocity.z;
  if (socket && myAgentId) socket.emit('agent:move', { id: myAgentId, position: { x: camera.position.x, y: camera.position.y, z: camera.position.z } });
}

// ============================================
// PLAYER PHYSICS & COLLISION
// ============================================

const playerHeight = 1.8;
const playerRadius = 0.3;
let velocityY = 0;
let isGrounded = false;
const gravity = 30;
const jumpForce = 10;

function checkCollision(x, y, z) {
  // Check if position collides with any block
  const playerMinX = x - playerRadius, playerMaxX = x + playerRadius;
  const playerMinY = y, playerMaxY = y + playerHeight;
  const playerMinZ = z - playerRadius, playerMaxZ = z + playerRadius;

  for (const [key, mesh] of blocks) {
    const [bx, by, bz] = key.split(',').map(Number);
    const blockMinX = bx - 0.5, blockMaxX = bx + 0.5;
    const blockMinY = by - 0.5, blockMaxY = by + 0.5;
    const blockMinZ = bz - 0.5, blockMaxZ = bz + 0.5;

    if (playerMaxX > blockMinX && playerMinX < blockMaxX &&
        playerMaxY > blockMinY && playerMinY < blockMaxY &&
        playerMaxZ > blockMinZ && playerMinZ < blockMaxZ) {
      return true;
    }
  }
  return false;
}

function updatePlayerPhysics(delta) {
  if (!isPointerLocked) return;

  // Apply gravity
  if (!isGrounded) {
    velocityY -= gravity * delta;
  }

  // Calculate horizontal movement
  const speed = 10;
  const direction = new THREE.Vector3();
  const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
  forward.y = 0;
  forward.normalize();
  const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
  right.y = 0;
  right.normalize();

  if (moveState.forward) direction.add(forward);
  if (moveState.backward) direction.sub(forward);
  if (moveState.left) direction.sub(right);
  if (moveState.right) direction.add(right);
  direction.normalize();

  // Try to move
  const newX = camera.position.x + direction.x * speed * delta;
  const newZ = camera.position.z + direction.z * speed * delta;

  // Horizontal collision detection
  if (!checkCollision(newX, camera.position.y, camera.position.z)) {
    camera.position.x = newX;
  }
  if (!checkCollision(camera.position.x, camera.position.y, newZ)) {
    camera.position.z = newZ;
  }

  // Vertical movement
  const newY = camera.position.y + velocityY * delta;
  if (checkCollision(camera.position.x, newY, camera.position.z)) {
    if (velocityY < 0) {
      isGrounded = true;
      // Snap to top of block
      camera.position.y = Math.ceil(camera.position.y) + 0.5;
    }
    velocityY = 0;
  } else {
    isGrounded = false;
    camera.position.y = newY;
  }

  // World boundaries
  const worldHalf = CONFIG.WORLD_SIZE / 2;
  camera.position.x = Math.max(-worldHalf + 1, Math.min(worldHalf - 1, camera.position.x));
  camera.position.z = Math.max(-worldHalf + 1, Math.min(worldHalf - 1, camera.position.z));
  camera.position.y = Math.max(1, camera.position.y); // Prevent falling below world

  // Fall reset
  if (camera.position.y < -10) {
    camera.position.set(0, 5, 0);
    velocityY = 0;
  }
}

// ============================================
// GHOST BLOCK (Placement Preview)
// ============================================

let ghostBlock = null;

function createGhostBlock() {
  const geometry = new THREE.BoxGeometry(CONFIG.BLOCK_SIZE * 0.99, CONFIG.BLOCK_SIZE * 0.99, CONFIG.BLOCK_SIZE * 0.99);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5, depthTest: false });
  ghostBlock = new THREE.Mesh(geometry, material);
  ghostBlock.visible = false;
  ghostBlock.renderOrder = 999;
  scene.add(ghostBlock);
}

// Unified function to calculate block placement position from raycast
function getPlacementPosition(hit) {
  // Get the exact hit point and add a small offset in the normal direction
  const px = hit.point.x + hit.face.normal.x * 0.501;
  const py = hit.point.y + hit.face.normal.y * 0.501;
  const pz = hit.point.z + hit.face.normal.z * 0.501;
  
  // Round to nearest integer (block center)
  return {
    x: Math.round(px),
    y: Math.round(py),
    z: Math.round(pz)
  };
}

// Get the block position for removal (the block being looked at)
function getTargetBlockPosition(hit) {
  return {
    x: Math.round(hit.object.position.x),
    y: Math.round(hit.object.position.y),
    z: Math.round(hit.object.position.z)
  };
}

// Highlight the block being looked at
let highlightMesh = null;

function createHighlightMesh() {
  const geometry = new THREE.BoxGeometry(CONFIG.BLOCK_SIZE * 1.02, CONFIG.BLOCK_SIZE * 1.02, CONFIG.BLOCK_SIZE * 1.02);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.3, depthTest: false });
  highlightMesh = new THREE.Mesh(geometry, material);
  highlightMesh.visible = false;
  highlightMesh.renderOrder = 998;
  scene.add(highlightMesh);
}

function updateHighlightMesh() {
  if (!isPointerLocked || !highlightMesh) return;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const blockMeshes = Array.from(blocks.values());
  const intersects = raycaster.intersectObjects(blockMeshes);

  if (intersects.length > 0) {
    const hit = intersects[0];
    highlightMesh.position.copy(hit.object.position);
    highlightMesh.visible = true;
  } else {
    highlightMesh.visible = false;
  }
}

function updateGhostBlock() {
  if (!isPointerLocked || !ghostBlock) return;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const blockMeshes = Array.from(blocks.values());
  const intersects = raycaster.intersectObjects(blockMeshes);

  if (intersects.length > 0) {
    const hit = intersects[0];
    const pos = getPlacementPosition(hit);

    // Check if space is empty
    const key = `${pos.x},${pos.y},${pos.z}`;
    if (!blocks.has(key)) {
      ghostBlock.position.set(pos.x, pos.y, pos.z);
      ghostBlock.visible = true;

      // Change color based on distance
      const dist = camera.position.distanceTo(new THREE.Vector3(pos.x, pos.y, pos.z));
      ghostBlock.material.color.setHex(dist > 10 ? 0xff0000 : 0x00ff00);
      ghostBlock.material.opacity = Math.max(0.2, 0.5 - dist * 0.02);
      return;
    }
  }
  ghostBlock.visible = false;
}

// ============================================
// MOUSE
// ============================================

// Initial click handler - always active to enable pointer lock
function onInitialClick(event) {
  if (!isPointerLocked && event.target === renderer.domElement) {
    renderer.domElement.requestPointerLock();
  }
}

function onMouseClick(event) {
  if (!isPointerLocked) { renderer.domElement.requestPointerLock(); return; }

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const blockMeshes = Array.from(blocks.values());
  const intersects = raycaster.intersectObjects(blockMeshes);

  if (intersects.length > 0) {
    const hit = intersects[0];
    
    if (event.shiftKey) {
      // Remove the block we're looking at
      const pos = getTargetBlockPosition(hit);
      removeBlockAt(pos.x, pos.y, pos.z);
    } else {
      // Place at the ghost block position (adjacent to hit)
      const pos = getPlacementPosition(hit);
      placeBlock(pos.x, pos.y, pos.z);
    }
  }
}

function onMouseMove(event) {
  if (!isPointerLocked) return;
  camera.rotation.y -= event.movementX * 0.002;
  camera.rotation.x -= event.movementY * 0.002;
  camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x));
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onPointerLockChange() {
  isPointerLocked = document.pointerLockElement === renderer.domElement;
  if (isPointerLocked) {
    // Remove initial click handler since pointer lock is now active
    document.removeEventListener('click', onInitialClick);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('click', onMouseClick);  // Use click, not mousedown
    document.addEventListener('mousemove', onMouseMove);
  } else {
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keyup', onKeyUp);
    document.removeEventListener('click', onMouseClick);
    document.removeEventListener('mousemove', onMouseMove);
    // Re-add initial click handler
    document.addEventListener('click', onInitialClick);
  }
}

// ============================================
// CHAT
// ============================================

function displayChatMessage(from, message) {
  const chatContainer = document.getElementById('chat');
  if (!chatContainer) return;
  const messageEl = document.createElement('div');
  messageEl.innerHTML = `<strong>${from}:</strong> ${message}`;
  chatContainer.appendChild(messageEl);
  chatContainer.scrollTop = chatContainer.scrollHeight;
  while (chatContainer.children.length > 50) chatContainer.removeChild(chatContainer.firstChild);
}

// ============================================
// SOCKET
// ============================================

function connectToServer(url, agentData) {
  // Force polling transport only for Railway (no WebSocket support)
  // Using forceWebsockets: false to prevent upgrade attempts
  socket = io(url, {
    transports: ['polling'],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    timeout: 10000,
    autoConnect: true,
    upgrade: false,  // Prevent transport upgrade
    rememberUpgrade: false  // Don't remember WebSocket preference
  });

  // Connection event handlers
  socket.on('connect', () => {
    console.log('Connected to server:', url);
    // Use agent:spawn to match server
    socket.emit('agent:spawn', agentData);
  });

  socket.on('connect_error', (error) => {
    console.error('Socket connection error:', error.message);
  });

  socket.on('disconnect', (reason) => {
    console.log('Disconnected from server:', reason);
  });

  socket.on('reconnect', (attemptNumber) => {
    console.log('Reconnected after', attemptNumber, 'attempts');
  });

  // Event listeners - ensure proper acknowledgement
  socket.on('agent:joined', (data) => {
    myAgentId = data.id;
    console.log('My agent ID:', myAgentId);
  });

  socket.on('world:state', (data) => {
    if (data.blocks && Array.isArray(data.blocks)) {
      data.blocks.forEach(addBlock);
    }
    if (data.agents && Array.isArray(data.agents)) {
      data.agents.forEach(addAgent);
    }
  });

  socket.on('block:placed', addBlock);
  socket.on('block:removed', removeBlock);
  socket.on('agent:moved', updateAgent);
  socket.on('agent:left', (data) => {
    if (data && data.id) removeAgent(data.id);
  });

  // Chat message - server sends 'chat:broadcast', not 'chat:message'
  socket.on('chat:broadcast', (data) => {
    if (data && data.from && data.message) {
      displayChatMessage(data.from, data.message);
    }
  });

  // Handle unknown events gracefully
  socket.onAny((event, ...args) => {
    console.log('Received event:', event);
  });
}

// ============================================
// ANIMATION LOOP
// ============================================

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  updateCelestialBodies(delta);
  updateClouds(delta);
  updateWeather(delta);
  updatePlayer(delta);
  updatePlayerPhysics(delta);  // Physics & collision
  updateGhostBlock();  // Ghost block preview
  updateHighlightMesh();  // Block highlight
  updateTimeDisplay();
  renderer.render(scene, camera);
}

// Expose for screenshots
window.scene = scene;
window.camera = camera;
window.setWeather = setWeather;

initScene();
animate();
document.addEventListener('pointerlockchange', onPointerLockChange);
document.addEventListener('click', onInitialClick);  // Always active to enable pointer lock

const serverUrl = new URLSearchParams(window.location.search).get('server') || (import.meta.env.VITE_SERVER_URL || window.location.origin);
const agentName = new URLSearchParams(window.location.search).get('name') || 'Player';
connectToServer(serverUrl, { name: agentName });

console.log('Moltcraft Ultimate Client Loaded');
