# 🌈 **CSS TRANSITIONS — Full Beginner to Advanced**

## 🔹 1. What are Transitions?

Transitions allow an element to **move from one style to another smoothly** (like fade, move, rotate, scale).

Without transition → changes happen instantly.
With transition → changes happen smoothly (animation-like).

---

## 🔹 2. Basic Syntax

```css
transition: property duration timing-function delay;
```

### Example:

```css
.box {
  width: 100px;
  background: blue;
  transition: width 0.5s ease;
}

.box:hover {
  width: 200px;
}
```

✔ When hovered → width increases **smoothly**.
✔ Without transition → instant change.

---

# 🧩 **Transition Properties**

### **1. transition-property**

Which property should animate?

```css
transition-property: width, background-color;
```

### **2. transition-duration**

How long it will take?

```css
transition-duration: 1s;
```

### **3. transition-timing-function**

How motion behaves?

| Timing Function          | Meaning            |
| ------------------------ | ------------------ |
| linear                   | constant speed     |
| ease                     | slow → fast → slow |
| ease-in                  | slow start         |
| ease-out                 | slow end           |
| ease-in-out              | slow start & end   |
| cubic-bezier(x, y, z, a) | custom curve       |

Example:

```css
transition-timing-function: ease-in-out;
```

### **4. transition-delay**

Wait before animation starts.

```css
transition-delay: 0.3s;
```

---

# 🎯 **Best Way (Shorthand)**

```css
transition: all 0.5s ease;
```

Means → animate all animatable properties.

---

# ⚡ Common Transition Use Cases

### ✔ Button Hover Animation

```css
button {
  padding: 12px;
  background: royalblue;
  color: white;
  border: none;
  transition: background 0.4s, transform 0.4s;
}

button:hover {
  background: navy;
  transform: scale(1.1);
}
```

### ✔ Smooth Color Change

```css
p {
  color: black;
  transition: color 0.3s;
}

p:hover {
  color: red;
}
```

### ✔ Smooth Slide

```css
.box {
  margin-left: 0;
  transition: margin 0.5s;
}

.box:hover {
  margin-left: 50px;
}
```

---

# 🎬 **CSS ANIMATIONS — Full Beginner to Advanced**

Animations = **multi-step motion**, unlike transitions (start & end only).

---

# 🔹 1. What are Keyframes?

Keyframes = define the animation’s steps.

```css
@keyframes moveBox {
  from { transform: translateX(0); }
  to { transform: translateX(200px); }
}
```

---

# 🔹 2. Using the Animation

```css
.box {
  animation: moveBox 2s ease-in-out infinite;
}
```

---

# 🎛 **Animation Properties (All Levels)**

| Property                  | Meaning           |
| ------------------------- | ----------------- |
| animation-name            | keyframe name     |
| animation-duration        | time              |
| animation-timing-function | speed pattern     |
| animation-delay           | wait time         |
| animation-iteration-count | number of repeats |
| animation-direction       | play direction    |
| animation-fill-mode       | keep last state?  |
| animation-play-state      | pause/resume      |

---

# 🧠 **Detailed Explanation**

## 1️⃣ animation-iteration-count

```css
animation-iteration-count: infinite;
```

Other values:

* `1` (default)
* `2`
* `5`
* `infinite`

---

## 2️⃣ animation-direction

```css
animation-direction: alternate;
```

Possible values:

* normal
* reverse
* alternate → forward then backward
* alternate-reverse

---

## 3️⃣ animation-fill-mode

Controls how the element looks **before or after animation**.

| Mode      | Behavior                       |
| --------- | ------------------------------ |
| none      | revert to original             |
| forwards  | keep final state               |
| backwards | apply first frame during delay |
| both      | apply both effects             |

Example:

```css
animation-fill-mode: forwards;
```

---

## 4️⃣ animation-play-state

Pause / resume animation.

```css
animation-play-state: paused;
```

On hover resume:

```css
.box:hover {
  animation-play-state: running;
}
```

---

# 🌟 **REAL USE CASES**

### ✔ Pulsing Button

```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

button {
  animation: pulse 1s infinite;
}
```

---

### ✔ Loading Spinner

```css
.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #ddd;
  border-top-color: blue;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

### ✔ Typewriter Text Animation

```css
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

.text {
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  animation: typing 3s steps(20) forwards;
}
```

---

### ✔ Smooth Fade In

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  animation: fadeIn 1s ease-in;
}
```

---

# 🔥 **ADVANCED ANIMATION: Using `cubic-bezier()`**

```css
animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
```

This creates a **professional website-level smooth motion**.

---

# 🏆 BEGINNER VS ADVANCED SUMMARY

## ✔ Transitions

➡ Only two states: start → end
➡ Triggered by hover, click, focus

## ✔ Animations

➡ Multi-step motion
➡ Can loop forever
➡ Can run automatically
➡ More powerful

---


## =========================

---

# 🌟 **CSS Transform, Transition & Animation — Full Explanation**

---

# 🟦 **1. CSS Transform**

**Transform** allows you to visually change an element without affecting the document flow.

Transform does **NOT** push other elements — it acts on the element itself.

---

## ✅ **Transform Types**

### **1. `scale()` — Resize**

```css
.box {
  transform: scale(1.5); /* 150% */
}
```

* `scale(1)` = original
* `scale(2)` = double
* `scale(0.5)` = half

---

### **2. `rotate()` — Rotate**

```css
.box {
  transform: rotate(45deg);
}
```

---

### **3. `translate()` — Move X & Y**

```css
.box {
  transform: translate(50px, 20px);
}
```

* Does NOT affect surrounding elements.

---

### **4. `skew()` — Slant**

```css
.box {
  transform: skew(15deg, 10deg);
}
```

---

### **5. Multiple transforms**

```css
.box {
  transform: translateX(30px) rotate(20deg) scale(1.2);
}
```

✔️ Order matters: first translate → rotate → scale.

---

### **6. `transform-origin`**

Controls *pivot point* of rotation or scale.

Default: `50% 50%` (center)

```css
.box {
  transform-origin: top left;
  transform: rotate(45deg);
}
```

---

### **7. 3D Transforms**

```
rotateX()
rotateY()
rotateZ()
translateZ()
scaleZ()
perspective()
```

Example:

```css
.card {
  transform: rotateY(45deg);
}
```

---

# 🟩 **2. CSS Transition**

A transition makes a property change *smoothly* over time.

---

## ✔️ Essential Properties

### **1. `transition-property`**

Material you want to animate:

```css
transition-property: transform, background;
```

---

### **2. `transition-duration`**

Length of animation:

```css
transition-duration: 0.5s;
```

---

### **3. `transition-timing-function`**

Defines speed curve:

```
ease  
ease-in  
ease-out  
ease-in-out  
linear  
cubic-bezier()
```

Example:

```css
transition-timing-function: ease-in-out;
```

---

### **4. `transition-delay`**

When to start:

```css
transition-delay: 0.3s;
```

---

### ✔️ Shortcut

```css
transition: property duration timing delay;
```

Example:

```css
transition: all 0.5s ease;
```

---

### 🔥 Example (Button Hover)

```css
button {
  background: rgb(50, 100, 240);
  transition: background 0.3s ease, transform 0.2s ease-in;
}

button:hover {
  background: rgb(20, 60, 200);
  transform: scale(1.05);
}
```

---

# 🟥 **3. CSS Animations (Advanced)**

More powerful than transitions.
**Does NOT need user interaction** (hover).

---

## ✔️ Structure of Animation

### **1. @keyframes**

Defines the animation steps.

```css
@keyframes moveBox {
  from { transform: translateX(0); }
  to   { transform: translateX(200px); }
}
```

---

### **2. Attach animation**

```css
.box {
  animation-name: moveBox;
  animation-duration: 2s;
}
```

---

## ✔️ Animation Properties

| Property                    | Use                        |
| --------------------------- | -------------------------- |
| `animation-name`            | which keyframes to apply   |
| `animation-duration`        | total time                 |
| `animation-timing-function` | speed curve                |
| `animation-delay`           | wait before start          |
| `animation-iteration-count` | how many times             |
| `animation-direction`       | normal, reverse, alternate |
| `animation-fill-mode`       | hold end state or not      |
| `animation-play-state`      | running or paused          |

---

### 🔥 Example: Bouncing Ball

```css
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-80px); }
  100% { transform: translateY(0); }
}

.ball {
  animation: bounce 1s ease-in-out infinite;
}
```

---

### **Animation Direction**

```css
animation-direction: alternate;
```

Moves forward → back → forward → back.

---

### **Animation Fill Mode**

```
none      → reset to original
forwards  → stays at last keyframe
backwards → apply first keyframe before start
both      → both backwards + forwards
```

Example:

```css
animation-fill-mode: forwards;
```

---

### **Multiple animations**

```css
animation: slide 2s, fade 3s;
```

---

# 🟣 **Comparisons**

## **Transform vs Transition**

| Transform              | Transition              |
| ---------------------- | ----------------------- |
| Changes shape/position | Smooth change over time |
| Instant                | Needs duration          |
| No animation           | Animated effect         |

---

## **Transition vs Animation**

| Transition        | Animation                  |
| ----------------- | -------------------------- |
| Needs interaction | Runs automatically         |
| Only start → end  | Multiple steps (keyframes) |
| Simple            | Complex                    |

---

# 🟨 **Practical Example Using All**

### ✔️ HTML

```html
<div class="card">
  Hover me
</div>
```

### ✔️ CSS

```css
.card {
  width: 150px;
  height: 150px;
  background: skyblue;
  border-radius: 10px;

  /* transition */
  transition: transform 0.4s ease, background 0.3s ease;
}

/* Hover changes trigger transition */
.card:hover {
  background: steelblue;
  transform: scale(1.1) rotate(5deg);
}

/* Animation */
@keyframes glow {
  0% { box-shadow: 0 0 0px blue; }
  50% { box-shadow: 0 0 20px blue; }
  100% { box-shadow: 0 0 0px blue; }
}

.card {
  animation: glow 2s infinite ease-in-out;
}
```