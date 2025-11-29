# 🎯 **CSS Functions & Advanced Features — Full Explanation**

CSS includes many built-in functions that help calculate values, repeat patterns, manipulate colors, set sizes, generate shapes, and more.

We will cover:

## ✅ 1. `calc()`

## ✅ 2. `min()`, `max()`, `clamp()`

## ✅ 3. `var()` & CSS Custom Properties

## ✅ 4. `attr()`

## ✅ 5. `url()`

## ✅ 6. `rgb()`, `hsl()`

## ✅ 7. `rgba()` with opacity

## ✅ 8. `repeat()` (CSS Grid)

## ✅ 9. `minmax()`

## ✅ 10. `fit-content()`

## ✅ 11. `transform()` functions

## ✅ 12. `filter()`

## ✅ 13. `conic-gradient()`, `radial-gradient()`, `linear-gradient()`

## ✅ 14. `@supports`

## ✅ 15. `@layer`, `@property`, `@scope`

---

# ⭐ 1. `calc()`

**Used for calculations inside CSS.**
Useful when combining **% + px** or height minus navbar etc.

### ✔ Example:

```css
.box {
  width: calc(100% - 50px);
  padding: calc(10px + 1rem);
  height: calc(100vh - 80px);
}
```

---

# ⭐ 2. `min()`, `max()`, `clamp()`

## ✔ `min(a, b)`

Picks **smallest** value.

```css
img {
  width: min(90%, 500px);
}
```

Meaning:
→ On big screens max width = 500px
→ On mobile width = 90%

---

## ✔ `max(a, b)`

Picks **largest** value.

```css
.box {
  width: max(300px, 40%);
}
```

---

## ✔ `clamp(min, preferred, max)`

Best for responsive design.

```css
h1 {
  font-size: clamp(1.2rem, 5vw, 3rem);
}
```

⚡ Automatically scales between a **minimum** and **maximum**.

---

# ⭐ 3. `var()` & CSS Custom Properties

Create reusable CSS variables.

### ✔ Define variables:

```css
:root {
  --primary: #4f46e5;
  --spacing: 20px;
}
```

### ✔ Use variable:

```css
button {
  background: var(--primary);
  padding: var(--spacing);
}
```

---

# ⭐ 4. `attr()` (rare but useful)

Gets the value of an **HTML attribute**.

### HTML:

```html
<p data-name="Nasim" class="tag"></p>
```

### CSS:

```css
.tag::after {
  content: attr(data-name);
}
```

---

# ⭐ 5. `url()`

Used for loading images, fonts, audio, video.

```css
.bg {
  background-image: url("images/bg.jpg");
}

@font-face {
  src: url("Font/MyFont.woff2");
}
```

---

# ⭐ 6. `rgb()`, `hsl()`

### RGB:

```css
color: rgb(255, 0, 0);
```

### HSL (Hue, Saturation, Lightness):

```css
color: hsl(210, 100%, 50%);
```

HSL is more predictable for UI design.

---

# ⭐ 7. `rgba()` for transparency

```css
background: rgba(0, 0, 0, 0.4);
```

---

# ⭐ 8. `repeat()` (Grid)

### Instead of writing:

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

Use:

```css
grid-template-columns: repeat(4, 1fr);
```

---

# ⭐ 9. `minmax()` (Grid)

```css
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
```

→ Each item min = 200px, max = full available space.

---

# ⭐ 10. `fit-content()`

Prevents overflowing content.

```css
.box {
  width: fit-content;
  max-width: 400px;
}
```

---

# ⭐ 11. `transform()` Functions

• `translate()`
• `scale()`
• `rotate()`
• `skew()`
• `matrix()`

### Example:

```css
.box {
  transform: translateX(50px) scale(1.2) rotate(10deg);
}
```

---

# ⭐ 12. `filter()`

Effects like blur, brightness, contrast.

```css
img {
  filter: blur(2px) brightness(120%);
}
```

---

# ⭐ 13. CSS Gradients

### ✔ Linear Gradient

```css
background: linear-gradient(to right, red, blue);
```

### ✔ Radial Gradient

```css
background: radial-gradient(circle, red, yellow);
```

### ✔ Conic Gradient

Used for pie charts:

```css
background: conic-gradient(red 30%, blue 30% 70%, green 70%);
```

---

# ⭐ 14. `@supports` (CSS Feature Detection)

Run CSS only if browser supports something.

```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}
```

---

# ⭐ 15. `@layer`, `@property`, `@scope` (NEW + ADVANCED)

### ✔ `@layer`

Controls **CSS order**.

```css
@layer base {
  h1 { color: red; }
}

@layer components {
  .btn { padding: 10px; }
}
```

---

### ✔ `@property`

Allows **animation-friendly variables**.

```css
@property --progress {
  syntax: "<number>";
  initial-value: 0;
}
```

---

### ✔ `@scope`

Limits CSS to a specific area (like Shadow DOM).

```css
@scope (.card) {
  h1 { color: blue; }
}
```

---

# 🎁 BONUS: Useful CSS Math Functions

| Function  | Purpose            |
| --------- | ------------------ |
| `round()` | round numbers      |
| `mod()`   | remainder          |
| `hypot()` | triangles/polygons |
| `sign()`  | returns -1, 0, 1   |

Example:

```css
width: calc(50% + round(10.4px));
```

---
