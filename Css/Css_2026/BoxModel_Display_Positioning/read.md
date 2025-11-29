
# ⭐ **CSS BOX MODEL**

# ⭐ **DISPLAY PROPERTY**

# ⭐ **CSS POSITIONING**

Each with **concepts + diagrams + use cases + HTML/CSS examples**.

---

# 🟥 PART 1 — CSS BOX MODEL (MOST IMPORTANT TOPIC IN CSS)

---

Every element in CSS is a **box**.

The box is made of:

```
 _________________________________________
|                 margin                   |
|  _________________________________        |
| |              border              |      |
| |  _____________________________   |      |
| | |           padding           |  |      |
| | |   ________________________  |  |      |
| | |  |        content         | |  |      |
| | |  |________________________| |  |      |
| | |_____________________________|  |      |
| |_________________________________|      |
|___________________________________________|
```

---

## 📌 1. Content

The actual text, image, or element inside the box.

---

## 📌 2. Padding

Space **inside** the element, around the content.

✔ Pushes content inward.

---

## 📌 3. Border

The outline around padding + content.

---

## 📌 4. Margin

Space **outside** the element.

✔ Pushes elements away from each other.

---

## 📌 5. Box-Sizing (VERY IMPORTANT)

### **Default:**

`box-sizing: content-box;`
Width = only content width (padding + border add extra size)

### **Better:**

`box-sizing: border-box;`
Width = content + padding + border inside same box
✔ Layout becomes easier
✔ Used in every modern project

---

## 📌 Example

```html
<div class="box">Hello CSS</div>
```

```css
* {
  box-sizing: border-box;
}

.box {
  width: 200px;
  padding: 20px;
  border: 5px solid blue;
  margin: 30px;
  background: lightyellow;
}
```

---

# 🟦 PART 2 — CSS DISPLAY PROPERTY

---

The `display` property decides **how an element behaves in layout**.

---

# ⭐ 1. `display: block`

---

✔ Takes **full width**
✔ Starts on **new line**
✔ You can set width/height

Examples of block elements:

* `div`, `p`, `h1`, `section`, `article`

### Example:

```css
div {
  display: block;
  width: 300px;
}
```

---

# ⭐ 2. `display: inline`

---

✔ Takes only **required width**
✔ DOES NOT allow width/height
✔ No line break

Examples:

* `span`, `a`, `strong`

### Example:

```css
span {
  display: inline;
  width: 200px;   /* ❌ ignored */
}
```

---

# ⭐ 3. `display: inline-block`

---

✔ Behaves like inline (same line)
✔ Allows width & height

Best for buttons, badges, inline layouts.

### Example:

```css
button {
  display: inline-block;
  width: 150px;
  padding: 10px;
}
```

---

# ⭐ 4. `display: flex`

---

✔ Advanced layout system
✔ For horizontal/vertical alignment
✔ Very powerful
✔ Parent becomes a "flex container"

Example:

```css
.container {
  display: flex;
  gap: 10px;
}
```

---

# ⭐ 5. `display: grid`

---

✔ Two-dimensional layout
✔ Rows + columns
✔ Very powerful for complex layouts

Example:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

---

# ⭐ 6. `display: none`

---

✔ Element is removed from layout (not visible, no space taken)

Example:

```css
.hidden {
  display: none;
}
```

---

# ⭐ 7. `visibility: hidden` (NOT display but related)

---

✔ Element is invisible
✔ BUT still takes space

---

# Summary Table (Very Important)

| Display Type | Width | Height | Line Break | Use Case          |
| ------------ | ----- | ------ | ---------- | ----------------- |
| block        | ✔     | ✔      | ✔          | Layout sections   |
| inline       | ❌     | ❌      | ❌          | Text elements     |
| inline-block | ✔     | ✔      | ❌          | Buttons, badges   |
| flex         | ✔     | ✔      | ❌          | Row/column layout |
| grid         | ✔     | ✔      | ❌          | Complex layouts   |
| none         | N/A   | N/A    | Removes    | Hide elements     |

---

# 🟧 PART 3 — POSITIONING IN CSS

---

The `position` property controls **how elements are placed on the page**.

There are **5 types**:

---

# ⭐ 1. `position: static` (default)

---

✔ Normal document flow
✔ No top/right/bottom/left allowed

---

# ⭐ 2. `position: relative`

---

✔ Moves **relative to its original position**
✔ Keeps its original space reserved

### Example

```css
.box {
  position: relative;
  top: 10px;   /* moves down 10px */
  left: 20px;  /* moves right 20px */
}
```

---

# ⭐ 3. `position: absolute`

---

✔ Removed from normal flow
✔ Positions relative to **nearest positioned parent**
(parent with position: relative/absolute/fixed)

### Example

```html
<div class="parent">
  Parent Box
  <div class="child">Absolute</div>
</div>
```

```css
.parent {
  position: relative;
  height: 200px;
}

.child {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

---

# ⭐ 4. `position: fixed`

---

✔ Fixed to viewport (screen)
✔ Stays when scrolling
✔ Used for:

* sticky navbar
* floating buttons
* chat bubbles

### Example

```css
.chat {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

---

# ⭐ 5. `position: sticky`

---

✔ Behaves like relative
✔ But sticks when scrolling at a specific point

Example:

```css
.header {
  position: sticky;
  top: 0;
  background: white;
}
```

---

# ⭐ Position Summary Table

| Position | Stays in flow? | Moves relative to           | Use Case                |
| -------- | -------------- | --------------------------- | ----------------------- |
| static   | ✔              | none                        | Default                 |
| relative | ✔              | itself                      | Minor adjustments       |
| absolute | ❌              | nearest positioned ancestor | Cards, tooltips, popups |
| fixed    | ❌              | viewport                    | Sticky button, navbar   |
| sticky   | ✔ until sticky | scroll container            | Sticky header           |

---

# 🟩 Full Example Combining All Three Concepts

```html
<div class="container">
  <h1 class="title">CSS Box Model + Display + Positioning</h1>

  <div class="box">Static Box</div>

  <div class="relative-box">Relative Box</div>

  <div class="parent">
    <div class="absolute-child">Absolute Box</div>
  </div>

  <button class="float-btn">+</button>
</div>
```

```css
* {
  box-sizing: border-box;
}

.container {
  padding: 20px;
}

/* Box Model */
.box {
  border: 2px solid blue;
  padding: 20px;
  margin: 20px 0;
}

/* Relative */
.relative-box {
  position: relative;
  top: 10px;
  left: 20px;
  background: lightyellow;
  padding: 10px;
}

/* Absolute inside relative parent */
.parent {
  position: relative;
  height: 200px;
  background: #eee;
  margin: 20px 0;
}

.absolute-child {
  position: absolute;
  top: 30px;
  left: 30px;
  padding: 10px;
  background: lightpink;
}

/* Fixed Floating Button */
.float-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: black;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 30px;
}
```