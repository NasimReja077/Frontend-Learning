If you want to **learn Three.js deeply** (from beginner to advanced), here's a complete roadmap with explanations, examples, and project ideas.

---

# Three.js Complete Guide (In Depth)

## What is Three.js?

![Image](https://images.openai.com/static-rsc-4/8ccUY_ya4Sp0YwKvh3pb1ls87CudHWyb4TMzXwv1eM66PoEpjmJVS41GY8TruZpt12EKWo_GkyiVodI1Heh5nyJOuQ0bo5mzlYkyhfER0RLVElOgAXlRubFBeEUbBr8bGOi075GQg31jteHbrf4IgUsx_XAiVdpn1KwisHEylm5SI9PwWqefJgZLVUz62O6N?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/vq28KyAteo8fgi-NC4_XkJ1BHiBU8rhaLa4kh2Srff0XyVk02s15X2srEtuROpSm9v3EN7uJRoalOZM_TjtkSIJPwF4W1x5031AGybBKr7WBpVPkbxDzmAYZrWrlCc2NPxrZajUXbCFTnmt9Vgav5-ZrdxA3h6gENVvRzAV_zH4ruImX2MYQFqQ4Uap20MWw?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/nbXIY0_1KMwBIKV7r_RKzN-1Ryrfoo3PD39euGAkgWqb-dT2EtfNiEnakAkpNtWiJKQGbZLCRNMzS8YZqtYZkeL9kGDGreK6w1Yn32dt1PVSWIFkkPwSuWQ2J9bxwXUR5uthBmWLQSptjypoM0iOR1D4HYnkytle0c9kmURCwmgLwZuYRYEXh7yT5KjHZ3R0?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/OzFzRqFRioz4Os7e6OYtU-1uYzPwFp0Is_0Mmq3ui-ANHOhr0LjlIspRd8aA3_qeBAdFtr4I8hwCqc3i-VN5eQdR39FT-1E95Y7pCmUwHIz4QyI_6pyelmYCTD_aCpspHMx5h46GtWnnX3MfJP_bzGsTbebFlVyENiK2XL6HbnbY8RLrYR_IvNkM4k21bwNL?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/MQuun3jDfndy6MP7xEH1g5qUHXKPzfgITO3I9UfudbvSK-UUiBKAJcLTbht8RuanOwOxqe93uWKbQdNIQFD6UtQPazRtSwSqgU7t-NncIO4-VHEYd3JiuTJRYsMsPz5N_o8ztke76sm3LLQC33dpUNZOuXKSqa3iyXTHwxhVNRCsxB0CYPV3m6tpnE2S54u6?purpose=fullsize)

**Three.js** is a JavaScript library that makes it easy to create **3D graphics** inside a web browser.

Instead of writing hundreds of lines of WebGL code, Three.js provides simple classes and methods.

**Without Three.js**

```
Browser
   ↓
WebGL API
   ↓
GPU
```

You directly write WebGL code.

---

**With Three.js**

```
Browser
   ↓
Three.js
   ↓
WebGL
   ↓
GPU
```

Three.js handles most of the difficult work.

---

# Why Three.js?

Imagine building a game.

Without Three.js

```
Write Vertex Shader
Write Fragment Shader
Create Buffers
Calculate Matrices
Manage Camera
Handle Lights
Render Objects
```

Thousands of lines.

With Three.js

```javascript
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshStandardMaterial()
);
```

Done.

---

# Where is Three.js Used?

* 3D Websites
* Product Configurators
* Architecture
* Portfolio Websites
* Games
* Simulations
* Medical Visualization
* Education
* Digital Twins
* VR
* AR
* Metaverse

Examples:

* Tesla vehicle viewers
* Nike product pages
* Apple product showcases
* 3D portfolio websites

---

# Prerequisites

Before learning Three.js, know:

### HTML

```html
<div id="app"></div>
```

---

### CSS

```css
canvas{
width:100%;
height:100vh;
}
```

---

### JavaScript

Need to know:

* Variables
* Functions
* Objects
* Arrays
* Classes
* Modules
* Arrow Functions
* Promises
* Async/Await
* Event Listeners

---

# Installation

## Option 1

CDN

```html
<script src="https://unpkg.com/three/build/three.min.js"></script>
```

---

## Option 2 (Recommended)

```
npm install three
```

---

# Folder Structure

```
project

src
   main.js
   style.css

public

package.json

vite.config.js
```

---

# Core Components

Every Three.js application has these main parts.

```
Scene

Camera

Renderer

Objects

Lights

Animation
```

---

# Scene

The Scene is the world.

```
Scene

Cube

Sphere

Light

Camera
```

Everything exists inside the scene.

```javascript
const scene = new THREE.Scene();
```

---

# Camera

The camera is your eyes.

```
Scene

Cube

Sphere

Camera 👁️
```

Without a camera, nothing is visible.

```javascript
const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);
```

---

# Types of Cameras

### Perspective Camera

Looks realistic.

```
Near objects

████████

Far objects

██
```

---

### Orthographic Camera

No perspective.

```
Near

████

Far

████
```

Used for:

* CAD
* Maps
* UI
* 2D games

---

# Renderer

The renderer draws everything.

```
Scene

↓

Renderer

↓

Canvas

↓

Browser
```

```javascript
const renderer =
new THREE.WebGLRenderer();
```

---

# Geometry

Geometry defines shape.

Examples:

```
Cube

Sphere

Cylinder

Cone

Plane

Torus
```

```javascript
new THREE.BoxGeometry();
```

---

# Material

Material defines appearance.

```
Geometry

+

Material

=

Mesh
```

Example

```javascript
new THREE.MeshBasicMaterial({
color:'red'
})
```

---

# Mesh

A mesh combines geometry and material.

```javascript
const cube =
new THREE.Mesh(
geometry,
material
);
```

---

# Lights

Without light:

```
Dark Scene
```

With light:

```
💡

Cube Visible
```

Types:

* AmbientLight
* DirectionalLight
* PointLight
* SpotLight
* HemisphereLight
* RectAreaLight

---

# Ambient Light

Lights everything equally.

```javascript
new THREE.AmbientLight(0xffffff,1)
```

---

# Directional Light

Like the Sun.

```
☀️

↓↓↓↓↓

Cube
```

---

# Point Light

Like a bulb.

```
💡

↗ ↑ ↖

→ ○ ←

↘ ↓ ↙
```

---

# Spot Light

Flashlight.

```
🔦

\

 \

  \

 Cube
```

---

# Shadows

Enable

```javascript
renderer.shadowMap.enabled=true;
```

Object

```javascript
cube.castShadow=true;
```

Ground

```javascript
plane.receiveShadow=true;
```

---

# Position

```javascript
cube.position.x=2;
cube.position.y=1;
cube.position.z=5;
```

---

# Rotation

```javascript
cube.rotation.x=Math.PI/2;
```

---

# Scale

```javascript
cube.scale.set(2,2,2);
```

---

# Animation Loop

```javascript
function animate(){

requestAnimationFrame(animate);

cube.rotation.y+=0.01;

renderer.render(scene,camera);

}

animate();
```

---

# Clock

```javascript
const clock =
new THREE.Clock();

const delta =
clock.getDelta();
```

Used for smooth animation.

---

# Texture

A texture wraps an image around geometry.

```
Image

↓

Texture

↓

Material

↓

Cube
```

```javascript
const texture =
loader.load('brick.jpg');
```

---

# UV Mapping

Maps a 2D image onto a 3D surface.

```
Image

↓

UV Coordinates

↓

Cube
```

---

# Environment Map

Creates realistic reflections.

```
Skybox

↓

Reflection

↓

Metal Object
```

---

# Models

Three.js supports:

* glTF
* GLB
* FBX
* OBJ
* STL

Best choice:

```
GLB
```

---

# GLTF Loader

```javascript
const loader =
new GLTFLoader();

loader.load(
'model.glb',
(gltf)=>{
scene.add(gltf.scene);
});
```

---

# Controls

Most common:

OrbitControls

```
Rotate

Zoom

Pan
```

```javascript
const controls =
new OrbitControls(
camera,
renderer.domElement
);
```

---

# Raycaster

Detects mouse interaction.

```
Mouse

↓

Ray

↓

Cube
```

Used for:

* Clicking
* Hover
* Selection

---

# Fog

```javascript
scene.fog=
new THREE.Fog(
0xffffff,
10,
50
);
```

---

# Skybox

Creates a 360° background.

```
Cube Texture

↓

Sky
```

---

# Post Processing

Effects after rendering.

Examples:

* Bloom
* Motion Blur
* Outline
* Depth of Field
* SSAO
* FXAA

Pipeline:

```
Scene
   ↓
Render Pass
   ↓
Bloom
   ↓
FXAA
   ↓
Screen
```

---

# Particle System

Examples:

* Snow
* Rain
* Smoke
* Fire
* Galaxy

Uses

```
BufferGeometry

+

PointsMaterial

+

Points
```

---

# Physics

Three.js doesn't include physics.

Popular libraries:

* cannon-es
* rapier
* ammo.js

---

# Performance Optimization

### Use BufferGeometry

Fastest geometry.

---

### Use InstancedMesh

Render thousands of objects efficiently.

---

### Reduce Draw Calls

Merge geometries.

---

### Use Compressed Textures

Smaller GPU memory.

---

### Optimize Shadows

High shadow quality affects FPS.

---

### Frustum Culling

Objects outside the camera aren't rendered.

---

### Level of Detail (LOD)

Use lower-detail models when objects are far away.

---

# Math Used in Three.js

Learn these topics:

* Vectors (Vector2, Vector3)
* Euler Angles
* Quaternions
* Matrices
* Dot Product
* Cross Product
* Linear Interpolation (Lerp)
* Trigonometry (sin, cos)
* Coordinate Systems

---

# Ecosystem

Popular helper libraries:

| Library           | Purpose                  |
| ----------------- | ------------------------ |
| React Three Fiber | Use Three.js with React  |
| Drei              | Ready-made React helpers |
| GSAP              | Smooth animations        |
| Leva              | Debug UI controls        |
| Cannon-es         | Physics                  |
| Rapier            | High-performance physics |
| Theatre.js        | Animation timelines      |
| Three Mesh BVH    | Faster raycasting        |
| Draco Loader      | Compressed 3D models     |
| GLTF Pipeline     | Optimize glTF files      |

---

# Learning Path

```
Stage 1 (Basics)
├── HTML
├── CSS
├── JavaScript ES6
└── npm & Vite

↓

Stage 2 (Three.js Fundamentals)
├── Scene
├── Camera
├── Renderer
├── Geometry
├── Material
├── Mesh
├── Lights
├── Animation
└── Controls

↓

Stage 3 (Intermediate)
├── Textures
├── Shadows
├── Loading Models
├── Raycasting
├── Particles
├── Environment Maps
└── Audio

↓

Stage 4 (Advanced)
├── Custom Shaders (GLSL)
├── Post Processing
├── Physics
├── Instancing
├── GPU Optimization
├── Skeletal Animation
├── Morph Targets
└── WebXR (VR/AR)

↓

Stage 5 (Expert Projects)
├── 3D Portfolio
├── Product Configurator
├── Car Viewer
├── Solar System
├── Minecraft Clone
├── FPS Game
├── Flight Simulator
├── Digital Twin
└── Metaverse Demo
```

## Suggested Projects (in increasing difficulty)

1. Rotating cube with lighting
2. Solar system simulation
3. 3D room walkthrough
4. Interactive product viewer
5. Portfolio website with 3D effects
6. Physics-based ball simulation
7. Terrain generation with procedural noise
8. First-person exploration game
9. Real-time multiplayer 3D scene
10. WebXR VR experience

By the end of this roadmap, you'll understand not just how to use Three.js APIs, but also the underlying concepts of the 3D rendering pipeline, scene graphs, lighting, materials, animation, optimization, and how to build production-ready interactive 3D web applications.
