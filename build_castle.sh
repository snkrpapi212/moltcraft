#!/bin/bash
# Moltcraft Castle Builder
# Builds an epic Minecraft-style castle

API_URL="http://localhost:3005/api/block"

place_block() {
    local x=$1 y=$2 z=$3 type=$4
    curl -s -X POST "$API_URL" \
        -H "Content-Type: application/json" \
        -d "{\"action\": \"place\", \"x\": $x, \"y\": $y, \"z\": $z, \"type\": \"$type\"}" &
}

echo "=== Building Epic Moltcraft Castle ==="

# 1. Foundation - cobblestone
echo "1. Foundation (cobblestone)..."
for x in $(seq -10 10); do
    for z in $(seq -10 10); do
        place_block $x 0 $z "cobblestone"
    done
done
wait

# 2. Main walls - stone
echo "2. Main walls..."
for x in $(seq -10 10); do
    for y in $(seq 1 5); do
        # Front wall (with gate gap)
        if [[ $x -lt -3 ]] || [[ $x -gt 3 ]]; then
            place_block $x $y 10 "stone"
        fi
        # Back wall
        place_block $x $y -10 "stone"
    done
done

for z in $(seq -9 9); do
    for y in $(seq 1 5); do
        # Left wall
        place_block -10 $y $z "stone"
        # Right wall
        place_block 10 $y $z "stone"
    done
done
wait

# 3. Corner towers - wood dark
echo "3. Corner towers..."
for tx in -10 10; do
    for tz in -10 10; do
        for y in $(seq 1 9); do
            place_block $tx $y $tz "wood_dark"
            [[ $tz -eq -10 ]] && place_block $tx $y $((tz+1)) "wood_dark"
            [[ $tz -eq 10 ]] && place_block $tx $y $((tz-1)) "wood_dark"
            [[ $tx -eq -10 ]] && place_block $((tx+1)) $y $tz "wood_dark"
            [[ $tx -eq 10 ]] && place_block $((tx-1)) $y $tz "wood_dark"
        done
    done
done
wait

# 4. Gatehouse
echo "4. Gatehouse..."
for y in $(seq 1 4); do
    place_block -3 $y 10 "wood_dark"
    place_block -2 $y 10 "wood_dark"
    place_block 2 $y 10 "wood_dark"
    place_block 3 $y 10 "wood_dark"
done
# Gate opening (glass)
place_block -1 1 10 "glass"
place_block 0 1 10 "glass"
place_block 1 1 10 "glass"
place_block 0 2 10 "glass"
# Gate roof
for x in $(seq -3 3); do
    place_block $x 5 10 "brick"
done
# Torches
place_block -5 3 10 "torch"
place_block 5 3 10 "torch"
wait

# 5. Windows
echo "5. Windows..."
for x in -9 -5 0 5 9; do
    place_block $x 3 10 "glass"
    place_block $x 4 10 "glass"
    place_block $x 3 -10 "glass"
    place_block $x 4 -10 "glass"
done
wait

# 6. Central Keep - main building
echo "6. Central Keep..."
for x in $(seq -4 4); do
    for z in $(seq -4 4); do
        for y in $(seq 1 7); do
            place_block $x $y $z "wood"
        done
    done
done
wait

# Keep roof
echo "7. Keep roof..."
for x in $(seq -5 5); do
    for z in $(seq -5 5); do
        place_block $x 8 $z "brick"
    done
done

# Keep tower
for y in $(seq 9 13); do
    place_block 0 $y 0 "wood_dark"
done
wait

# 8. Battlements
echo "8. Battlements..."
for x in $(seq -9 9); do
    if [[ $((x % 2)) -eq 0 ]]; then
        place_block $x 6 10 "brick"
        place_block $x 6 -10 "brick"
    fi
done
wait

# 9. Interior
echo "9. Interior..."
for x in $(seq -3 3); do
    for z in $(seq -3 3); do
        place_block $x 1 $z "dirt"
        place_block $x 4 $z "wood"
    done
done
wait

# 10. Trees
echo "10. Trees..."
for i in $(seq 1 25); do
    tx=$((RANDOM % 60 - 30))
    tz=$((RANDOM % 60 - 30))
    
    if [[ $tx -lt -12 ]] || [[ $tx -gt 12 ]] || [[ $tz -lt -12 ]] || [[ $tz -gt 12 ]]; then
        # Trunk
        for y in $(seq 1 4); do
            place_block $tx $y $tz "wood"
        done
        # Leaves
        for lx in $(seq $((tx-2)) $((tx+2))); do
            for lz in $(seq $((tz-2)) $((tz+2))); do
                for ly in $(seq 5 8); do
                    dist=$(( (lx-tx)*(lx-tx) + (lz-tz)*(lz-tz) ))
                    if [[ $dist -lt 9 ]]; then
                        place_block $lx $ly $lz "leaves"
                    fi
                done
            done
        done
    fi
done
wait

echo ""
echo "=== Castle Complete! ==="
curl -s "http://localhost:3005/api/world" | python3 -c "import sys,json; d=json.load(sys.stdin); print(f'Total blocks: {len(d)}')"
