#!/bin/bash
# Moltcraft City Builder
# Builds an entire city with buildings, roads, parks, and landmarks

SERVER_URL="http://localhost:3005"

echo "🏙️ Building Moltcraft City..."

# Colors for buildings
STONE="#696969"
BRICK="#8B0000"
WOOD="#5C4033"
WOOD_DARK="#3d2817"
GLASS="#ADD8E6"
COBBLE="#4a4a4a"
GRASS="#228B22"
TORCH="#FF6600"
DIRT="#8B4513"

# Function to place a block
place_block() {
    curl -s -X POST "$SERVER_URL/api/blocks" -H "Content-Type: application/json" -d "{\"x\":$1,\"y\":$2,\"z\":$3,\"color\":\"$4\",\"type\":\"stone\"}" > /dev/null 2>&1
}

# Clear the area first
echo "🧹 Clearing building area..."
for x in $(seq -20 20); do
    for z in $(seq -40 40); do
        curl -s -X DELETE "$SERVER_URL/api/blocks/$x/1/$z" > /dev/null 2>&1
    done
done

echo "🏗️ Building foundation..."
# Main city foundation
for x in $(seq -25 25); do
    for z in $(seq -45 45); do
        place_block $x 0 $z $COBBLE
    done
done

echo "🏠 Building residential district..."
# Row houses (left side)
for i in 0 1 2 3 4 5; do
    base_x=-20
    base_z=$(( -35 + i * 12 ))
    # House structure
    for x in $(seq $base_x $((base_x + 6))); do
        for z in $(seq $base_z $((base_z + 8))); do
            # Walls
            for y in 1 2 3 4; do
                if [ $x -eq $base_x ] || [ $x -eq $((base_x + 6)) ] || [ $z -eq $base_z ] || [ $z -eq $((base_z + 8)) ]; then
                    place_block $x $y $z $BRICK
                fi
            done
        done
    done
    # Roof
    for x in $(seq $((base_x - 1)) $((base_x + 7))); do
        for z in $(seq $((base_z - 1)) $((base_z + 9))); do
            place_block $x 5 $z $WOOD_DARK
        done
    done
    # Door
    place_block $((base_x + 3)) 1 $base_z $WOOD
    place_block $((base_x + 3)) 2 $base_z $WOOD
    # Windows
    place_block $((base_x + 1)) 2 $base_z $GLASS
    place_block $((base_x + 5)) 2 $base_z $GLASS
done

echo "🏢 Building downtown skyscrapers..."
# Downtown district (center)
for i in 0 1 2 3 4; do
    case $i in
        0)  # Main tower
            for x in $(seq -8 2); do
                for z in $(seq -10 0); do
                    for y in 1 2 3 4 5 6 7 8 9 10; do
                        place_block $x $y $z $COBBLE
                    done
                done
            done
            # Antenna
            for y in 11 12; do
                place_block -3 $y -5 $WOOD_DARK
            done
            ;;
        1)  # Office building
            for x in $(seq 5 12); do
                for z in $(seq -8 2); do
                    for y in 1 2 3 4 5 6 7; do
                        place_block $x $y $z $STONE
                    done
                done
            done
            # Windows pattern
            for x in 6 9 12; do
                for y in 2 4 6; do
                    for z in -8; do
                        place_block $x $y $z $GLASS
                    done
                done
            done
            ;;
        2)  # Bank
            for x in $(seq -15 -8); do
                for z in $(seq 5 12); do
                    for y in 1 2 3 4; do
                        place_block $x $y $z $BRICK
                    done
                done
            done
            # Dome
            for x in $(seq -14 -9); do
                for z in $(seq 6 11); do
                    place_block $x 5 $z $WOOD
                done
            done
            place_block -12 6 9 $WOOD
            ;;
        3)  # Hotel
            for x in $(seq 5 12); do
                for z in $(seq 8 18); do
                    for y in 1 2 3 4 5 6 7 8; do
                        place_block $x $y $z $WOOD_DARK
                    done
                done
            done
            # Sign
            place_block 8 9 13 $TORCH
            place_block 9 9 13 $TORCH
            ;;
        4)  # Shopping mall
            for x in $(seq -20 -12); do
                for z in $(seq 8 18); do
                    for y in 1 2; do
                        place_block $x $y $z $GLASS
                    done
                done
            done
            # Glass roof
            for x in $(seq -19 -13); do
                for z in $(seq 9 17); do
                    place_block $x 3 $z $GLASS
                done
            done
            ;;
    esac
done

echo "⛪ Building places of worship..."
# Church
for x in $(seq 15 22); do
    for z in $(seq -5 2); do
        for y in 1 2 3 4; do
            place_block $x $y $z $WHITE
        done
    done
done
# Steeple
for y in 5 6 7 8 9; do
    place_block 18 $y -1 $WHITE
done
# Cross
place_block 18 10 -1 $WOOD
place_block 18 9 -2 $WOOD

echo "🌳 Creating parks and green spaces..."
# Park 1 (north)
for x in $(seq -5 5); do
    for z in $(seq 25 35); do
        place_block $x 1 $z $GRASS
    done
done
# Trees in park
for x in -3 0 3; do
    for z in 27 30 33; do
        place_block $x 1 $z $WOOD
        place_block $x 2 $z $WOOD
        place_block $x 3 $z $WOOD
        place_block $x 4 $z $LEAVES
        place_block $x 3 $((z+1)) $LEAVES
        place_block $x 3 $((z-1)) $LEAVES
    done
done

# Fountain in park
for x in 0; do
    for z in 30; do
        for y in 1 2; do
            place_block $x $y $z $GLASS
        done
    done
done

echo "🛣️ Building roads..."
# Main road (north-south)
for z in $(seq -40 40); do
    for x in -2 -1 0 1 2; do
        place_block $x 1 $z $DIRT
    done
done
# Side road (east-west)
for x in $(seq -20 20); do
    for z in -2 -1 0 1; do
        place_block $x 1 $z $DIRT
    done
done

echo "🏥 Building hospital..."
for x in $(seq 18 25); do
    for z in $(seq 25 32); do
        for y in 1 2 3; do
            place_block $x $y $z $WHITE
        done
    done
done
# Red cross
place_block 21 3 28 $RED
place_block 22 3 28 $RED
place_block 21 3 29 $RED
place_block 21 3 27 $RED

echo "🏫 Building school..."
for x in $(seq -25 -18); do
    for z in $(seq 25 32); do
        for y in 1 2; do
            place_block $x $y $z $BRICK
        done
    done
done
# Flag pole
place_block -21 3 28 $WOOD
place_block -21 4 28 $WOOD

echo "🏟️ Building stadium..."
# Stadium bowl
for x in $(seq -8 8); do
    for z in $(seq 38 48); do
        for y in 1 2 3; do
            place_block $x $y $z $STONE
        done
    done
done
# Field inside
for x in $(seq -5 5); do
    for z in $(seq 40 46); do
        place_block $x 2 $z $GRASS
    done
done

echo "🌉 Building bridges..."
# Bridge over road
for x in $(seq 8 12); do
    for z in $(seq -2 2); do
        place_block $x 3 $z $WOOD_DARK
    done
done

echo "🎢 Building entertainment..."
# Ferris wheel base
for x in 20 25; do
    for z in 38 43; do
        for y in 1 2 3; do
            place_block $x $y $z $COBBLE
        done
    done
done

echo "🏭 Building factories..."
for x in $(seq -25 -18); do
    for z in $(seq -20 -12); do
        for y in 1 2 3 4; do
            place_block $x $y $z $COBBLE
        done
    done
done
# Chimney
for y in 5 6 7 8; do
    place_block -21 $y -16 $BRICK
done

echo "🏨 Building apartment complex..."
# Large apartment building
for x in $(seq 15 25); do
    for z in $(seq -15 -5); do
        for y in 1 2 3 4 5 6 7 8 9 10; do
            place_block $x $y $z $WOOD_DARK
        done
    done
done
# Balconies
for x in 15 25; do
    for y in 3 5 7 9; do
        for z in $(seq -14 -6); do
            place_block $x $y $z $WOOD
        done
    done
done

echo "🎭 Building theater..."
for x in $(seq -5 2); do
    for z in $(seq -20 -12); do
        for y in 1 2 3; do
            place_block $x $y $z $BRICK
        done
    done
done
# Marquee
for x in $(seq -4 1); do
    place_block $x 4 -11 $RED
done

echo "🌊 Building waterfront..."
for z in $(seq 35 45); do
    for x in $(seq 20 30); do
        place_block $x 1 $z $GLASS
    done
done

echo "🏗️ Building construction site..."
for x in $(seq -12 -8); do
    for z in $(seq 5 10); do
        for y in 1 2 3; do
            place_block $x $y $z $COBBLE
        done
    done
done
# Crane
place_block -10 4 7 $WOOD
place_block -10 5 7 $WOOD
place_block -10 6 7 $WOOD
place_block -10 7 7 $WOOD

echo "🌟 Adding landmarks and details..."
# City square monument
for x in 0; do
    for z in 5; do
        for y in 1 2 3 4 5 6 7 8; do
            place_block $x $y $z $MARBLE
        done
    done
done
# Spire
place_block 0 9 5 $TORCH
place_block 0 10 5 $TORCH

echo "🏙️ City construction complete!"
echo "📸 Open http://localhost:3070 to view your city!"
