Below is the **best, simple, and clear explanation** of **Advanced CSS Selectors** with examples — perfect for beginners to advanced developers.

---

# ⭐ **Advanced CSS Selectors Explained (With Examples)**

### Includes:

✔ `:is()`
✔ `:where()`
✔ `:has()`
✔ `:root`
✔ Highlight even rows
✔ Style all buttons except danger
✔ Select first paragraph inside a div
✔ Style input when empty
✔ + More useful notes

---

# 🟩 **1. `:root` — Global Scope Selector**

## ✔ What it is?

`:root` represents the **top-most HTML element** (same as `<html>`).

Used mostly for **CSS variables**.

## ✔ Example:

```css
:root {
  --primary: #4a5cff;
  --danger: #ff3b3b;
  --radius: 6px;
}
```

### Why use it?

Because variables in `:root` are accessible **everywhere**.

---

# 🟦 **2. `:is()` — Simplifies Multiple Selectors**

## ✔ What it does?

Selects elements that match **ANY** selector inside it.

### Without :is()

```css
div h1, div h2, div h3 {
  color: blue;
}
```

### With :is()

```css
div:is(h1, h2, h3) {
  color: blue;
}
```

### Benefits:

✔ Cleaner code
✔ Avoid repetition
✔ Reduces errors

---

# 🟪 **3. `:where()` — Same as :is(), BUT Zero Specificity**

## ✔ What it does?

`:where()` works like `:is()` but adds **zero CSS specificity**.

### Example:

```css
.container :where(h1, h2, h3) {
  margin: 0;
  color: #333;
}
```

### Benefit:

✔ Your global styles will **not override component styles**.
✔ Best for **resets** or **framework-level rule sets**.

---

# 🟥 **4. `:has()` — Parent Selector (Advanced & Powerful)**

## ✔ What it does?

Selects a **parent** based on what it contains.

### Example:

Highlight a card **only if** it has a checked checkbox:

```css
.card:has(input[type="checkbox"]:checked) {
  background: #eef0ff;
  border: 2px solid blue;
}
```

### This is revolutionary!

Because CSS earlier **could not select parent elements**.

✔ Form validation
✔ Navigation menu states
✔ Dynamic UI effects without JS

---

# 💠 Now — Practical Use Cases

---

# 1️⃣ **Highlight every even row in a table**

Select even-numbered `<tr>` rows:

```css
table tr:nth-child(even) {
  background: #f5f5f5;
}
```

✔ Good for tables
✔ Improves readability

---

# 2️⃣ **Make buttons styled EXCEPT the danger one**

Style all buttons:

```css
button:not(.danger) {
  background: var(--primary);
  color: white;
  padding: 10px 18px;
}
```

Danger button:

```css
button.danger {
  background: var(--danger);
}
```

✔ Useful in dashboards
✔ Clean UI design

---

# 3️⃣ **Select only the first paragraph inside a div**

```css
div > p:first-of-type {
  font-weight: bold;
  color: var(--primary);
}
```

✔ Works even if other elements exist before p
✔ Helps formatting blog sections/content

---

# 4️⃣ **Style input only when it is empty**

Using `:placeholder-shown`

```css
input:placeholder-shown {
  border: 2px dashed gray;
  background: #fafafa;
}

input:not(:placeholder-shown) {
  border: 2px solid blue;
}
```

✔ Great for form UX
✔ Highlights empty fields

---

# 5️⃣ **Using :is() + :not() together**

### Example: Style all headings except h1

```css
:is(h2, h3, h4, h5, h6):not(.no-style) {
  color: purple;
}
```

---

# 6️⃣ **Using :has() for form validation**

Mark a form group red **if it contains an invalid input**:

```css
.form-group:has(input:invalid) {
  border-left: 4px solid red;
}
```

✔ No JavaScript needed
✔ Real-time form warnings

---

# 7️⃣ **Using :where() to reset margin for multiple elements**

```css
:where(h1, h2, h3, p) {
  margin: 0;
}
```

This will **NOT** override more specific styles later.

---

# 8️⃣ **Style all links inside a nav except disabled ones**

```css
nav a:not(.disabled) {
  opacity: 1;
}

nav a.disabled {
  opacity: 0.4;
  pointer-events: none;
}
```

---

# ⭐ Summary Table

| Selector            | Purpose                | Difficulty |
| ------------------- | ---------------------- | ---------- |
| `:root`             | Global variables       | Easy       |
| `:is()`             | Match any selector     | Medium     |
| `:where()`          | Zero specificity group | Medium     |
| `:has()`            | Parent selector        | Advanced   |
| `nth-child()`       | Specific list items    | Easy       |
| `:not()`            | Exclude from styling   | Medium     |
| `placeholder-shown` | Detect empty input     | Medium     |

---

## ============================================
Here is a **clean, advanced-level CSS snippet** using:

✔ `:is()`
✔ `:where()`
✔ `:has()`
✔ `:root`
✔ Even table rows
✔ Style all buttons except danger
✔ Select only first `<p>` inside `<div>`
✔ Style input when empty

Everything is written clearly with examples.

---

# ✅ **FINAL ADVANCED CSS**

```css
/* -------------------------------------------
   1. :root (Global Variables)
-------------------------------------------- */
:root {
  --primary: #4a5cff;
  --danger: #ff3b3b;
  --bg-light: #f5f5f5;
  --radius: 6px;
}



/* -------------------------------------------
   2. Highlight Every Even Row in a Table
-------------------------------------------- */
table tr:nth-child(even) {
  background: var(--bg-light);
}



/* -------------------------------------------
   3. Style All Buttons Except Danger One
      (Using :not() + attribute selector)
-------------------------------------------- */
button:not(.danger) {
  background: var(--primary);
  color: #fff;
  padding: 10px 18px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
}

button.danger {
  background: var(--danger);
  color: white;
}



/* -------------------------------------------
   4. Select Only the First <p> Inside a <div>
      (Using :is() and :first-of-type)
-------------------------------------------- */
div:is(.content, .box) > p:first-of-type {
  font-weight: bold;
  color: var(--primary);
}



/* -------------------------------------------
   5. Style Input Only When It Is Empty
      (Using :placeholder-shown or :not(:placeholder-shown))
-------------------------------------------- */
input:placeholder-shown {
  border: 2px dashed #999;
  background: #fafafa;
}

input:not(:placeholder-shown) {
  border: 2px solid var(--primary);
}



/* -------------------------------------------
   6. Using :has() for Parent-Based Styling
   Example: Highlight card if it contains checkbox checked
-------------------------------------------- */

.card:has(input[type="checkbox"]:checked) {
  border: 2px solid var(--primary);
  background: #eef0ff;
}



/* -------------------------------------------
   7. Using :where() – zero specificity selector group
-------------------------------------------- */
.container :where(h1, h2, h3) {
  margin: 0;
  padding-bottom: 6px;
  color: #333;
}
```

---

# ⭐ What This Code Does

### ✔ **`:root`**

Used for CSS variables.

### ✔ **Highlight every even row**

```css
table tr:nth-child(even)
```

### ✔ **Buttons except danger**

```css
button:not(.danger)
```

### ✔ **Select first paragraph inside div**

```css
div:is(.content, .box) > p:first-of-type
```

### ✔ **Input when empty**

```css
input:placeholder-shown
```

### ✔ **Parent selector (`:has()`)**

```css
.card:has(input[type="checkbox"]:checked)
```

This styles the *parent* when the *child* is checked.

### ✔ **Zero specificity group (`:where()`)**

---

# 📦 Want Full Project?

I can provide:

✅ Full HTML + CSS project
✅ With tables, buttons, cards, inputs
✅ Fully styled and ready to run

Just say **“give full advanced selector project with HTML”**.
## ==============================
Below is the **full, clear, and beginner-to-advanced explanation** of the **most powerful CSS advanced selectors**:

✔️ `:is()`
✔️ `:where()`
✔️ `:has()`
✔️ `:root`

Plus **real-life examples**:

✔️ Highlight even table rows
✔️ Style buttons except danger
✔️ Select only first paragraph inside a div
✔️ Style input only when empty
✔️ + More useful cases

All examples include **HTML + CSS**.

---

# 🌟 1. **:is() Selector**

## ✔️ What it does:

* Simplifies **complex selectors**
* Helps avoid repetition
* Specificity = highest selector inside it

---

## ✔️ When to use:

* You want a common style for multiple element types
* You want cleaner, shorter CSS

---

## ✔️ Example 1: Style all headings (h1–h4)

### HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```

### CSS

```css
:is(h1, h2, h3, h4) {
  color: blue;
}
```

---

## ✔️ Example 2: Buttons inside card OR inside sidebar

### HTML

```html
<div class="card">
  <button>Card Button</button>
</div>

<div class="sidebar">
  <button>Sidebar Button</button>
</div>
```

### CSS

```css
:is(.card, .sidebar) button {
  padding: 10px 20px;
  background: green;
  color: white;
}
```

---

# 🌟 2. **:where() Selector**

## ✔️ What it does:

* Same as `:is()`
* BUT specificity = **always 0**
* Best for resets or global styling

---

## ✔️ When to use:

* Want to group selectors but avoid specificity issues
* Want to override them later easily

---

## ✔️ Example: Global margin reset (best practice)

### CSS:

```css
:where(h1, h2, h3, p) {
  margin: 0;
}
```

Same as:

```css
h1, h2, h3, p { margin: 0 }
```

but **zero specificity** → easier overrides.

---

# 🌟 3. **:has() Selector (Parent Selector – VERY powerful)**

### ⭐ CSS’s first “parent selector”

## ✔️ What it does:

Selects **an element depending on what is inside it**.

---

## ✔️ When to use:

* Style parent if child exists
* Form validation without JS
* Make card highlighted if image exists
* Style list item that contains selected element

---

## ✔️ Example 1: Highlight card if it has an image

### HTML

```html
<div class="card">
  <img src="photo.png">
</div>
```

### CSS

```css
.card:has(img) {
  border: 2px solid green;
}
```

---

## ✔️ Example 2: Style form group if input is focused

### HTML

```html
<div class="form-group">
  <label>Name</label>
  <input type="text">
</div>
```

### CSS

```css
.form-group:has(input:focus) {
  background: #f0f8ff;
}
```

---

## ✔️ Example 3: Highlight menu item that contains an active link

### HTML

```html
<li class="menu-item">
  <a class="active">Home</a>
</li>
```

### CSS

```css
.menu-item:has(.active) {
  background: yellow;
}
```

---

# 🌟 4. **:root Selector**

## ✔️ What it does:

Selects the root element (`<html>`)

Used mainly for **CSS variables**.

---

## ✔️ When to use:

* Define global theme colors
* Dark mode support
* Reusable layout spacing

---

## ✔️ Example: Global theme variables

### CSS

```css
:root {
  --primary: #3498db;
  --danger: #e74c3c;
}
```

Use it:

```css
button {
  background: var(--primary);
}
```

---

# ✔️ ADVANCED PRACTICAL EXAMPLES

Now let's solve your requested cases.

---

# ⭐ 1. **Highlight Every Even Row in a Table**

### HTML

```html
<table>
  <tr><td>Row 1</td></tr>
  <tr><td>Row 2</td></tr>
  <tr><td>Row 3</td></tr>
  <tr><td>Row 4</td></tr>
</table>
```

### CSS

```css
tr:nth-child(even) {
  background: #f5f5f5;
}
```

---

# ⭐ 2. **Style All Buttons Except the Danger One**

### HTML

```html
<button class="primary">Primary</button>
<button class="secondary">Secondary</button>
<button class="danger">Delete</button>
```

### CSS

```css
button:not(.danger) {
  background: blue;
  color: white;
}
```

---

# ⭐ 3. **Select Only the First Paragraph Inside a Div**

### HTML

```html
<div class="box">
  <p>First paragraph</p>
  <p>Second paragraph</p>
</div>
```

### CSS

```css
.box > p:first-child {
  font-weight: bold;
  color: green;
}
```

---

# ⭐ 4. **Style Input Only When It Is Empty**

Use `:placeholder-shown` or `:empty`.

### HTML

```html
<input type="text" placeholder="Enter your name">
```

### CSS

```css
input:placeholder-shown {
  border: 2px dashed red;
}
```

---

# ⭐ 5. **Style Cards That Contain Both Image AND Text (using :has)**

### HTML

```html
<div class="card">
  <img src="img.png">
  <p>Description</p>
</div>
```

### CSS

```css
.card:has(img, p) {
  padding: 15px;
  border: 2px solid green;
}
```

---

# ⭐ 6. **Make Form Group Red if Input is Empty (no JS!)**

### HTML

```html
<div class="field">
  <input type="text" placeholder="Enter email">
</div>
```

### CSS

```css
.field:has(input:placeholder-shown) {
  background: #ffe9e9;
  border: 1px solid red;
}
```

---

# ⭐ 7. **Style Navigation Parent When Child Link is Hovered**

### HTML

```html
<li class="nav-item">
  <a href="#">Home</a>
</li>
```

### CSS

```css
.nav-item:has(a:hover) {
  background: lightblue;
}
```

---

# ⭐ 8. **Make a Parent Div Active When Checkbox is Checked**

### HTML

```html
<div class="option">
  <input type="checkbox">
</div>
```

### CSS

```css
.option:has(input:checked) {
  background: lightgreen;
}
```

---

# ⭐ Want more?

I can give:

✅ 20 more advanced selector examples
✅ A full "Selectors Cheat Sheet" PDF
✅ A full CSS course (Beginner → Senior level)
✅ Practice questions, projects, interview questions

Just say **"More examples"** or **"Make PDF"**.
## ==================
