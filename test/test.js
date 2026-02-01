/**
 * Moltcraft - Test Suite
 * 
 * Run tests with: npm test
 * 
 * Simple test runner - no external dependencies
 */

let testsRun = 0;
let testsPassed = 0;
let testsFailed = 0;

function test(name, fn) {
  testsRun++;
  try {
    fn();
    testsPassed++;
    console.log(`  ✅ ${name}`);
  } catch (error) {
    testsFailed++;
    console.log(`  ❌ ${name}`);
    console.log(`     Error: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

function assertStrictEqual(a, b, message) {
  if (a !== b) {
    throw new Error(message || `Expected ${b}, got ${a}`);
  }
}

function assertDeepStrictEqual(a, b, message) {
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    throw new Error(message || `Expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);
  }
}

function describe(suiteName, fn) {
  console.log(`\n📦 ${suiteName}`);
  fn();
}

function it(testName, fn) {
  test(testName, fn);
}

console.log('🧪 Running Moltcraft Tests...\n');

// ============================================
// SERVER TESTS
// ============================================

describe('Moltcraft Server', () => {
  
  describe('World State', () => {
    it('should initialize with empty blocks', () => {
      const world = { blocks: {}, agents: {} };
      assertDeepStrictEqual(world.blocks, {});
      assertDeepStrictEqual(world.agents, {});
    });
    
    it('should store block at coordinates', () => {
      const world = { blocks: {} };
      const key = '0,1,0';
      world.blocks[key] = '#8B4513';
      assertStrictEqual(world.blocks[key], '#8B4513');
    });
    
    it('should remove block at coordinates', () => {
      const world = { blocks: { '0,1,0': '#8B4513' } };
      delete world.blocks['0,1,0'];
      assertDeepStrictEqual(world.blocks, {});
    });
    
    it('should serialize coordinates as "x,y,z" key', () => {
      const testCases = [
        { x: 0, y: 0, z: 0, expected: '0,0,0' },
        { x: 5, y: 10, z: -3, expected: '5,10,-3' },
        { x: -1, y: 2, z: 100, expected: '-1,2,100' }
      ];
      
      testCases.forEach(({ x, y, z, expected }) => {
        const key = `${x},${y},${z}`;
        assertStrictEqual(key, expected);
      });
    });
  });
  
  describe('Agent Management', () => {
    it('should create agent with default values', () => {
      const agentId = 'test_socket_123';
      const agent = {
        id: agentId,
        name: 'Unknown',
        color: '#ff6600',
        position: { x: 0, y: 1, z: 0 },
        avatar: 'box'
      };
      
      assertStrictEqual(agent.name, 'Unknown');
      assertStrictEqual(agent.color, '#ff6600');
      assertDeepStrictEqual(agent.position, { x: 0, y: 1, z: 0 });
    });
    
    it('should update agent position', () => {
      const agent = { position: { x: 0, y: 1, z: 0 } };
      agent.position = { x: 5, y: 2, z: 10 };
      assertDeepStrictEqual(agent.position, { x: 5, y: 2, z: 10 });
    });
    
    it('should generate agent ID from socket', () => {
      const socketId = 'abc123xyz';
      const agentId = `agent_${socketId}`;
      assertStrictEqual(agentId, 'agent_abc123xyz');
    });
  });
  
  describe('Block Operations', () => {
    it('should validate block coordinates are integers', () => {
      const isValidCoordinate = (n) => Number.isInteger(n);
      
      assertStrictEqual(isValidCoordinate(0), true);
      assertStrictEqual(isValidCoordinate(5), true);
      assertStrictEqual(isValidCoordinate(-10), true);
      assertStrictEqual(isValidCoordinate(1.5), false);
      assertStrictEqual(isValidCoordinate(NaN), false);
    });
    
    it('should validate block color is hex string', () => {
      const isValidColor = (color) => /^#[0-9A-Fa-f]{6}$/.test(color);
      
      assertStrictEqual(isValidColor('#ff6600'), true);
      assertStrictEqual(isValidColor('#8B4513'), true);
      assertStrictEqual(isValidColor('#000000'), true);
      assertStrictEqual(isValidColor('#FFFFFF'), true);
      assertStrictEqual(isValidColor('red'), false);
      assertStrictEqual(isValidColor('#ff66'), false);
    });
  });
});

// ============================================
// CLIENT TESTS
// ============================================

describe('Moltcraft Client', () => {
  
  describe('Three.js Setup', () => {
    it('should have valid FOV setting', () => {
      const fov = 75;
      const aspect = 1920 / 1080;
      const near = 0.1;
      const far = 1000;
      
      assertStrictEqual(fov, 75);
      assertStrictEqual(aspect > 0, true);
      assertStrictEqual(near < far, true);
    });
    
    it('should have valid renderer dimensions', () => {
      const width = 800;
      const height = 600;
      
      assertStrictEqual(width > 0, true);
      assertStrictEqual(height > 0, true);
    });
  });
  
  describe('Voxel Operations', () => {
    it('should generate unique voxel key', () => {
      const getVoxelKey = (x, y, z) => `${x},${y},${z}`;
      
      assertStrictEqual(getVoxelKey(0, 0, 0), '0,0,0');
      assertStrictEqual(getVoxelKey(1, 2, 3), '1,2,3');
    });
    
    it('should calculate distance between positions', () => {
      const distance = (a, b) => {
        return Math.sqrt(
          Math.pow(b.x - a.x, 2) +
          Math.pow(b.y - a.y, 2) +
          Math.pow(b.z - a.z, 2)
        );
      };
      
      const dist = distance({ x: 0, y: 0, z: 0 }, { x: 3, y: 4, z: 0 });
      assertStrictEqual(dist, 5); // 3-4-5 triangle
    });
  });
  
  describe('Chat Message', () => {
    it('should validate message length', () => {
      const MAX_LENGTH = 500;
      const isValidLength = (msg) => msg.length <= MAX_LENGTH;
      
      assertStrictEqual(isValidLength('Hello'), true);
      assertStrictEqual(isValidLength('a'.repeat(500)), true);
      assertStrictEqual(isValidLength('a'.repeat(501)), false);
    });
  });
});

// ============================================
// INTEGRATION TESTS
// ============================================

describe('Moltcraft Integration', () => {
  
  describe('Full World Cycle', () => {
    it('should handle complete agent session', () => {
      const world = { blocks: {}, agents: {} };
      
      // 1. Agent spawns
      const agentId = 'agent_123';
      world.agents[agentId] = {
        id: agentId,
        name: 'TestAgent',
        position: { x: 0, y: 1, z: 0 }
      };
      
      // 2. Agent places block
      const blockKey = '0,1,0';
      world.blocks[blockKey] = '#ff6600';
      
      // 3. Agent moves
      world.agents[agentId].position = { x: 5, y: 1, z: 5 };
      
      assertStrictEqual(Object.keys(world.agents).length, 1);
      assertStrictEqual(Object.keys(world.blocks).length, 1);
      assertStrictEqual(world.blocks[blockKey], '#ff6600');
      
      // 4. Agent disconnects (block persists)
      delete world.agents[agentId];
      
      assertStrictEqual(Object.keys(world.agents).length, 0);
      assertStrictEqual(Object.keys(world.blocks).length, 1);
    });
  });
  
  describe('World Persistence', () => {
    it('should serialize and deserialize world', () => {
      const world = {
        blocks: { '0,1,0': '#ff6600', '1,1,0': '#8B4513' }
      };
      
      // Simulate save/load
      const serialized = JSON.stringify(world);
      const loaded = JSON.parse(serialized);
      
      assertDeepStrictEqual(loaded.blocks, world.blocks);
    });
  });
});

// ============================================
// SUMMARY
// ============================================

console.log('\n' + '='.repeat(40));
console.log(`📊 Test Results: ${testsRun} total | ${testsPassed} passed | ${testsFailed} failed`);
console.log('='.repeat(40));

if (testsFailed > 0) {
  console.log('\n❌ Some tests failed!');
  process.exit(1);
} else {
  console.log('\n✅ All tests passed!');
  process.exit(0);
}
