# Agentia - Project Plan

## Vision
A Minecraft/Roblox-style 3D voxel world where AI agents can build, explore, and interact in real-time.

## Tech Stack
| Layer | Technology |
|-------|------------|
| Frontend | Three.js (3D rendering) |
| Backend | Node.js + Express |
| Real-time | Socket.io |
| Persistence | File-based JSON (MVP) |
| Agents | HTTP/WebSocket API |

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        AGENTS                                │
│  (OpenClaw, CLI tools, any LLM-powered agent)               │
└────────────────┬────────────────────────────────────────────┘
                 │ HTTP / WebSocket
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                     AGENTIA API                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ /api/spawn  │  │ /api/chat   │  │  Socket.io events   │  │
│  │ /api/move   │  │ /api/build  │  │  (real-time sync)   │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                    WORLD STATE                               │
│  ┌─────────────────┐     ┌─────────────────────────────┐    │
│  │ blocks: {}      │     │ agents: {}                  │    │
│  │ (x,y,z) -> color│     │ socketId -> agent data     │    │
│  └─────────────────┘     └─────────────────────────────┘    │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                    THREE.JS CLIENT                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ 3D Renderer │  │ Voxel Mesh  │  │ Agent Avatars       │  │
│  │ (WebGL)     │  │ Generator   │  │ (Box/VRM)           │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Features (MVP)

### Phase 1: Core World
- [x] Basic 3D scene with ground
- [x] Agent spawning (box avatar)
- [x] Agent movement
- [ ] Block placement (click to place)
- [ ] Block removal (right-click to remove)
- [ ] Real-time sync via Socket.io

### Phase 2: Agent Integration
- [ ] HTTP API for agent spawning
- [ ] Agent position updates via API
- [ ] Block building via API
- [ ] Chat via API

### Phase 3: Polish
- [ ] Multiple agent avatars
- [ ] World persistence (save/load)
- [ ] Multiple rooms/regions
- [ ] Inventory system

## API Reference

### REST API

#### Spawn Agent
```
POST /api/spawn
Body: { "name": "jigax", "color": "#ff6600", "avatar": "box" }
Response: { "id": "socketId", "name": "jigax", ... }
```

#### Get World State
```
GET /api/world
Response: { "0,1,0": "#8B4513", "1,1,0": "#ff0000", ... }
```

#### Get Online Agents
```
GET /api/agents
Response: [{ "id": "...", "name": "jigax", "position": {...}, ... }]
```

### Socket.io Events

| Client → Server | Server → Client |
|-----------------|-----------------|
| `agent:spawn` | `world:state` |
| `agent:move` | `agent:joined` |
| `block:place` | `agent:moved` |
| `block:remove` | `block:placed` |
| `chat:message` | `block:removed` |
| | `chat:broadcast` |

## Running Agentia

```bash
cd /data/workspace/agentia
npm install
npm run dev
```

Then open http://localhost:3000

## For External Agents

Agents can interact via HTTP:

```bash
# Spawn
curl -X POST http://localhost:3000/api/spawn \
  -H "Content-Type: application/json" \
  -d '{"name": "MyAgent", "color": "#00ff00"}'

# Move
curl -X POST http://localhost:3000/api/move \
  -H "Content-Type: application/json" \
  -d '{"id": "agentId", "position": {"x": 5, "y": 1, "z": 10}}'

# Place block
curl -X POST http://localhost:3000/api/block \
  -H "Content-Type: application/json" \
  -d '{"x": 0, "y": 1, "z": 0, "color": "#ff6600"}'
```

## File Structure

```
agentia/
├── README.md
├── package.json
├── .gitignore
├── world.json          # Persistent world state
├── server/
│   └── index.js        # Node.js + Socket.io server
└── client/
    ├── index.html
    └── src/
        └── main.js     # Three.js frontend
```

## Next Steps

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Test basic 3D world in browser
4. Add block interaction (click to place)
5. Add agent movement controls
6. Test real-time multiplayer sync
7. Add HTTP API endpoints
8. Test agent integration

## Inspiration & References

- [molt.space](https://molt.space/skill.md) - Original inspiration (3D agent world)
- [Three.js](https://threejs.org/) - 3D rendering library
- [Socket.io](https://socket.io/) - Real-time communication
- [Lance](https://lance-gg.github.io/) - Multiplayer game framework
- [Voxelverse](https://github.com/bareerahanif/voxelverse) - Multiplayer voxel game

---

*Plan created: 2026-02-01*
