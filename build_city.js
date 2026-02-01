#!/usr/bin/env node
/**
 * Moltcraft City Builder
 * Generates a complete city directly into world.json
 */

const fs = require('fs');
const path = require('path');

const WORLD_FILE = path.join(__dirname, '..', 'world.json');

// Clear existing world
const world = {};

// Color definitions
const C = {
    STONE: '#696969',
    BRICK: '#8B0000',
    WOOD: '#5C4033',
    WOOD_DARK: '#3d2817',
    GLASS: '#ADD8E6',
    COBBLE: '#4a4a4a',
    GRASS: '#228B22',
    TORCH: '#FF6600',
    DIRT: '#8B4513',
    WHITE: '#FFFFFF',
    RED: '#FF0000',
    MARBLE: '#E0E0E0'
};

function place(x, y, z, color, type = 'stone') {
    world[`${x},${y},${z}`] = { color, type };
}

function range(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
}

function rect(x1, x2, y, z1, z2, color, type = 'stone') {
    for (let x = x1; x <= x2; x++) {
        for (let z = z1; z <= z2; z++) {
            place(x, y, z, color, type);
        }
    }
}

function box(x1, x2, y1, y2, z1, z2, color, type = 'stone') {
    for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
            for (let z = z1; z <= z2; z++) {
                place(x, y, z, color, type);
            }
        }
    }
}

function wall(x1, x2, y1, y2, z, color, type = 'stone') {
    for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
            place(x, y, z, color, type);
        }
    }
}

console.log('🏙️ Building Moltcraft City...\n');

// Foundation
console.log('📐 Foundation...');
rect(-30, 30, 0, -50, 50, C.COBBLE);

// Roads
console.log('🛣️ Roads...');
rect(-3, 3, 1, -50, 50, C.DIRT);
rect(-30, 30, 1, -3, 3, C.DIRT);

// ============================================
// DOWNTOWN (Center)
// ============================================
console.log('🏢 Downtown...');

// Main skyscraper
box(-8, 2, 1, 12, -10, 0, C.COBBLE);
box(-8, 2, 13, 14, -10, -5, C.STONE);
// Antenna
place(-3, 15, -5, C.WOOD_DARK, 'torch');
place(-3, 16, -5, C.TORCH, 'torch');

// Office building
box(5, 12, 1, 8, -8, 2, C.STONE);
// Windows
rect(6, 9, 2, -8, -8, C.GLASS, 'glass');
rect(6, 9, 4, -8, -8, C.GLASS, 'glass');
rect(6, 9, 6, -8, -8, C.GLASS, 'glass');

// Bank
box(-15, -8, 1, 4, 5, 12, C.BRICK);
box(-14, -9, 5, 5, 6, 11, C.WOOD);
place(-12, 6, 9, C.WOOD);
place(-12, 7, 9, C.TORCH, 'torch');

// Hotel
box(5, 12, 1, 9, 8, 18, C.WOOD_DARK);
place(8, 10, 13, C.TORCH, 'torch');
place(9, 10, 13, C.TORCH, 'torch');

// Shopping mall
box(-20, -12, 1, 3, 8, 18, C.GLASS, 'glass');
box(-19, -13, 4, 4, 9, 17, C.GLASS, 'glass');

// ============================================
// RESIDENTIAL (Left)
// ============================================
console.log('🏠 Residential district...');

for (let i = 0; i < 6; i++) {
    const x1 = -28 + i * 4;
    const x2 = x1 + 3;
    const z1 = -35 + i * 12;
    const z2 = z1 + 8;
    
    // House walls
    box(x1, x2, 1, 3, z1, z2, C.BRICK);
    // Roof
    box(x1 - 1, x2 + 1, 4, 4, z1 - 1, z2 + 1, C.WOOD_DARK);
    // Door
    place(x1 + 1, 1, z1, C.WOOD);
    place(x1 + 1, 2, z1, C.WOOD);
    // Windows
    place(x1, 2, z1, C.GLASS, 'glass');
    place(x2, 2, z1, C.GLASS, 'glass');
}

// ============================================
// APARTMENTS (Right)
// ============================================
console.log('🏨 Apartments...');
box(15, 25, 1, 10, -15, -5, C.WOOD_DARK);
// Balconies
box(15, 15, 3, 3, -14, -6, C.WOOD);
box(25, 25, 3, 3, -14, -6, C.WOOD);
box(15, 15, 5, 5, -14, -6, C.WOOD);
box(25, 25, 5, 5, -14, -6, C.WOOD);

// ============================================
// HOSPITAL (North)
// ============================================
console.log('🏥 Hospital...');
box(18, 25, 1, 3, 25, 32, C.WHITE);
// Red cross
place(21, 3, 28, C.RED, 'brick');
place(22, 3, 28, C.RED, 'brick');
place(21, 3, 29, C.RED, 'brick');
place(21, 3, 27, C.RED, 'brick');

// ============================================
// SCHOOL (West)
// ============================================
console.log('🏫 School...');
box(-25, -18, 1, 2, 25, 32, C.BRICK);
place(-21, 3, 28, C.WOOD);
place(-21, 4, 28, C.WOOD);

// ============================================
// CHURCH (East)
// ============================================
console.log('⛪ Church...');
box(15, 22, 1, 4, -5, 2, C.WHITE);
// Steeple
box(18, 18, 5, 10, -1, -1, C.WHITE);
// Cross
place(18, 11, -1, C.WOOD);
place(18, 10, -2, C.WOOD);

// ============================================
// STADIUM (South)
// ============================================
console.log('🏟️ Stadium...');
box(-8, 8, 1, 3, 38, 48, C.STONE);
// Field
rect(-5, 5, 2, 40, 46, C.GRASS, 'grass');

// ============================================
// PARK (North East)
// ============================================
console.log('🌳 Park...');
rect(-5, 5, 1, 25, 35, C.GRASS, 'grass');
// Trees
for (let tx of [-3, 0, 3]) {
    for (let tz of [27, 30, 33]) {
        place(tx, 1, tz, C.WOOD);
        place(tx, 2, tz, C.WOOD);
        place(tx, 3, tz, C.WOOD);
        place(tx, 4, tz, C.LEAVES, 'leaves');
    }
}
// Fountain
place(0, 2, 30, C.GLASS, 'glass');
place(0, 3, 30, C.TORCH, 'torch');

// ============================================
// THEATER (South West)
// ============================================
console.log('🎭 Theater...');
box(-5, 2, 1, 3, -20, -12, C.BRICK);
// Marquee
rect(-4, 1, 4, -11, -11, C.RED, 'brick');

// ============================================
// FACTORIES (Industrial)
// ============================================
console.log('🏭 Factories...');
box(-25, -18, 1, 4, -20, -12, C.COBBLE);
// Chimney
box(-21, -21, 5, 8, -16, -16, C.BRICK);
place(-21, 9, -16, C.TORCH, 'torch');

// ============================================
// WATERFRONT
// ============================================
console.log('🌊 Waterfront...');
rect(20, 30, 1, 35, 45, C.GLASS, 'glass');

// ============================================
// ENTERTAINMENT
// ============================================
console.log('🎡 Ferris wheel...');
box(20, 20, 1, 4, 38, 38, C.COBBLE);
box(25, 25, 1, 4, 43, 43, C.COBBLE);

// ============================================
// BRIDGE
// ============================================
console.log('🌉 Bridge...');
box(8, 12, 3, 3, -2, 2, C.WOOD_DARK);

// ============================================
// MONUMENT (City Center)
// ============================================
console.log('🗽 City Square Monument...');
box(0, 0, 1, 8, 5, 5, C.MARBLE);
place(0, 9, 5, C.TORCH, 'torch');
place(0, 10, 5, C.TORCH, 'torch');

// ============================================
// STREET LAMPS
// ============================================
console.log('💡 Street lamps...');
for (let z of [-30, -15, 0, 15, 30]) {
    place(-5, 1, z, C.WOOD);
    place(-5, 2, z, C.WOOD);
    place(-5, 3, z, C.TORCH, 'torch');
    place(5, 1, z, C.WOOD);
    place(5, 2, z, C.WOOD);
    place(5, 3, z, C.TORCH, 'torch');
}

// Save world
fs.writeFileSync(WORLD_FILE, JSON.stringify(world, null, 2));
console.log(`\n✅ City built with ${Object.keys(world).toLocaleString()} blocks!`);
console.log(`📁 Saved to: ${WORLD_FILE}`);
console.log('\n🏙️ Restart the server and open http://localhost:3070 to view your city!');
