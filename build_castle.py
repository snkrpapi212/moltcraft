#!/usr/bin/env python3
"""
Moltcraft Castle Builder
Builds an epic Minecraft-style castle
"""

import requests
import time

API_URL = "http://localhost:3005/api/block"

# Block types with colors
BLOCKS = {
    'cobblestone': '#4a4a4a',
    'stone': '#696969',
    'wood': '#5C4033',
    'wood_dark': '#3d2817',
    'brick': '#8B0000',
    'glass': '#ADD8E6',
    'grass': '#228B22',
    'dirt': '#8B4513',
    'torch': '#FF6600',
}

def place_block(x, y, z, block_type='cobblestone'):
    """Place a single block"""
    try:
        requests.post(API_URL, json={
            'action': 'place',
            'x': x,
            'y': y,
            'z': z,
            'color': BLOCKS.get(block_type, '#4a4a4a'),
            'type': block_type
        }, timeout=1)
    except:
        pass

def build_castle():
    print("Building Epic Castle...")
    
    # 1. Foundation - cobblestone platform
    print("1. Foundation...")
    for x in range(-12, 13):
        for z in range(-12, 13):
            place_block(x, 0, z, 'cobblestone')
    
    # 2. Main walls - stone with brick accents
    print("2. Walls...")
    for x in range(-10, 11):
        for y in range(1, 6):
            # Front wall with gate
            if x in [-10, -9, -8, -7, -6, -5, -2, -1, 0, 1, 2, 5, 6, 7, 8, 9, 10]:
                place_block(x, y, 10, 'stone')
            # Back wall
            place_block(x, y, -10, 'stone')
            # Left wall
            place_block(-10, y, z, 'stone')
            # Right wall
            place_block(10, y, z, 'stone')
    
    # 3. Corner towers
    print("3. Towers...")
    for tower_x in [-10, 10]:
        for tower_z in [-10, 10]:
            for y in range(1, 10):
                place_block(tower_x, y, tower_z, 'wood_dark')
                place_block(tower_x, y, tower_z + 1 if tower_z == -10 else tower_z - 1, 'wood_dark')
                place_block(tower_x + 1 if tower_x == -10 else tower_x - 1, y, tower_z, 'wood_dark')
    
    # 4. Gatehouse
    print("4. Gatehouse...")
    for y in range(1, 5):
        place_block(-3, y, 10, 'wood_dark')
        place_block(-2, y, 10, 'wood_dark')
        place_block(2, y, 10, 'wood_dark')
        place_block(3, y, 10, 'wood_dark')
    # Gate opening
    place_block(-1, 1, 10, 'glass')
    place_block(0, 1, 10, 'glass')
    place_block(1, 1, 10, 'glass')
    place_block(0, 2, 10, 'glass')
    # Gate roof
    for x in range(-3, 4):
        place_block(x, 5, 10, 'brick')
    # Torches
    place_block(-5, 3, 10, 'torch')
    place_block(5, 3, 10, 'torch')
    
    # 5. Windows - glass blocks
    print("5. Windows...")
    for x in [-9, -5, 0, 5, 9]:
        place_block(x, 3, 10, 'glass')
        place_block(x, 4, 10, 'glass')
    # Back windows
    for x in [-9, -5, 0, 5, 9]:
        place_block(x, 3, -10, 'glass')
        place_block(x, 4, -10, 'glass')
    
    # 6. Central Keep - main building
    print("6. Keep...")
    for x in range(-4, 5):
        for z in range(-4, 5):
            for y in range(1, 8):
                place_block(x, y, z, 'wood')
    
    # Keep roof
    for x in range(-5, 6):
        for z in range(-5, 6):
            place_block(x, 8, z, 'brick')
    
    # Keep tower on top
    for y in range(9, 14):
        place_block(0, y, 0, 'wood_dark')
    
    # 7. Battlements
    print("7. Battlements...")
    for x in range(-9, 10):
        if x % 2 == 0:
            place_block(x, 6, 10, 'brick')
    for x in range(-9, 10):
        if x % 2 == 0:
            place_block(x, 6, -10, 'brick')
    
    # 8. Trees around castle
    print("8. Trees...")
    for _ in range(20):
        import random
        tx = random.randint(-25, 25)
        tz = random.randint(-25, 25)
        if abs(tx) > 12 or abs(tz) > 12:
            # Tree trunk
            for y in range(1, 4):
                place_block(tx, y, tz, 'wood')
            # Tree leaves
            for lx in range(tx-2, tx+3):
                for lz in range(tz-2, tz+3):
                    for ly in range(4, 7):
                        if abs(lx-tx) + abs(lz-tz) < 3:
                            place_block(lx, ly, lz, 'leaves')
    
    # 9. Interior floors
    print("9. Interior...")
    for x in range(-8, 9):
        for z in range(-8, 9):
            if abs(x) <= 3 and abs(z) <= 3:
                place_block(x, 1, z, 'dirt')  # Floor
                place_block(x, 4, z, 'wood')  # Second floor
    
    print("\nCastle construction complete!")

if __name__ == "__main__":
    build_castle()
