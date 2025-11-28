Below is **every CSS selector explained with**:

✔️ **When to use it**
✔️ **Real example**
✔️ **HTML + CSS together**

This will make everything 100% clear.
(Perfect for beginners → advanced → interview level)

---

# 🌟 **1. Element Selector**

## ✔️ **When to use:**

When you want to style *all* elements of a specific tag.

### **Example**

### HTML:

```html
<p>Hello</p>
<p>Welcome</p>
```

### CSS:

```css
p {
  color: blue;
}
```

---

# 🌟 **2. Class Selector (.)**

## ✔️ When to use:

When you want to style **multiple elements** with the same design.

### Example

### HTML:

```html
<h2 class="title">Heading</h2>
<p class="title">Paragraph</p>
```

### CSS:

```css
.title {
  color: green;
  font-size: 24px;
}
```

---

# 🌟 **3. ID Selector (#)**

## ✔️ When to use:

When you want to style a **unique** element (one per page).

### Example

### HTML:

```html
<div id="main-header">My Website</div>
```

### CSS:

```css
#main-header {
  background: black;
  color: white;
  padding: 20px;
}
```

---

# 🌟 **4. Universal Selector (*)**

## ✔️ When to use:

To remove margin/padding from **all** elements or apply global styles.

### Example

### HTML:

```html
<h1>Title</h1>
<p>Text</p>
```

### CSS:

```css
* {
  margin: 0;
  padding: 0;
}
```

---

# 🌟 **5. Group Selector (,)**

## ✔️ When to use:

When multiple selectors share the **same** style.

### Example

### HTML:

```html
<h1>Heading</h1>
<h2>Subheading</h2>
```

### CSS:

```css
h1, h2 {
  color: purple;
}
```

---

# 🌟 **6. Descendant Selector (space)**

## ✔️ When to use:

To target elements **inside** another element (any level deep).

### Example

### HTML:

```html
<div>
  <p>This paragraph will be red</p>
</div>

<p>This one will not be red</p>
```

### CSS:

```css
div p {
  color: red;
}
```

---

# 🌟 **7. Child Selector ( > )**

## ✔️ When to use:

To select **direct children only**.

### Example

### HTML:

```html
<div>
  <p>Direct child (will turn blue)</p>

  <span>
    <p>Not direct child (will NOT change)</p>
  </span>
</div>
```

### CSS:

```css
div > p {
  color: blue;
}
```

---

# 🌟 **8. Adjacent Sibling Selector ( + )**

## ✔️ When to use:

To style the **very next** element after another.

### Example

### HTML:

```html
<h3>Title</h3>
<p>Only this paragraph will be green</p>

<p>This will NOT be selected</p>
```

### CSS:

```css
h3 + p {
  color: green;
}
```

---

# 🌟 **9. General Sibling Selector ( ~ )**

## ✔️ When to use:

To style **all siblings after** an element.

### Example

### HTML:

```html
<h3>Title</h3>
<p>Paragraph 1 (green)</p>
<p>Paragraph 2 (green)</p>
```

### CSS:

```css
h3 ~ p {
  color: green;
}
```

---

# 🌟 **10. Attribute Selectors**

Used when an element has a **specific attribute**.

---

## ✔️ 10.1 Exact Match

### HTML:

```html
<input type="text">
<input type="password">
```

### CSS:

```css
input[type="text"] {
  border: 2px solid blue;
}
```

---

## ✔️ 10.2 Starts With (^)

### HTML:

```html
<img src="icon-home.png">
<img src="photo.jpg">
```

### CSS:

```css
img[src^="icon"] {
  width: 32px;
}
```

---

## ✔️ 10.3 Ends With ($)

### HTML:

```html
<img src="banner.png">
<img src="logo.svg">
```

### CSS:

```css
img[src$=".png"] {
  border: 2px solid red;
}
```

---

## ✔️ 10.4 Contains (*)

### HTML:

```html
<a href="https://google.com">Google</a>
<a href="https://example.com">Example</a>
```

### CSS:

```css
a[href*="google"] {
  color: red;
}
```

---

# 🌟 **11. Pseudo-Class Selectors (state-based)**

---

## ✔️ 11.1 :hover

### HTML:

```html
<button>Hover Me</button>
```

### CSS:

```css
button:hover {
  background: black;
  color: white;
}
```

---

## ✔️ 11.2 :focus

### HTML:

```html
<input type="text">
```

### CSS:

```css
input:focus {
  border-color: blue;
}
```

---

## ✔️ 11.3 :checked

### HTML:

```html
<input type="checkbox" id="c1">
<label for="c1">Agree</label>
```

### CSS:

```css
input:checked + label {
  font-weight: bold;
}
```

---

## ✔️ 11.4 :nth-child()

### HTML:

```html
<ul>
  <li>Row 1</li>
  <li>Row 2</li>
  <li>Row 3</li>
</ul>
```

### CSS:

```css
li:nth-child(odd) {
  background: lightgray;
}
```

---

# 🌟 **12. Pseudo-Element Selectors (::before, ::after)**

---

## ✔️ 12.1 ::before

### HTML:

```html
<h2>Welcome</h2>
```

### CSS:

```css
h2::before {
  content: "🔥 ";
}
```

---

## ✔️ 12.2 ::after

### HTML:

```html
<h2>Success</h2>
```

### CSS:

```css
h2::after {
  content: " ✔️";
}
```

---

## ✔️ 12.3 ::first-letter

### HTML:

```html
<p>Hello world!</p>
```

### CSS:

```css
p::first-letter {
  font-size: 40px;
}
```

---

# 🌟 **13. :not() Selector**

## ✔️ When to use:

To select everything **except** something.

### Example

### HTML:

```html
<button class="primary">Primary</button>
<button>Normal</button>
<button>Normal</button>
```

### CSS:

```css
button:not(.primary) {
  background: gray;
}
```

---

# 🌟 **14. :is() Selector (advanced)**

## ✔️ When to use:

To simplify long selectors.

### Example

### HTML:

```html
<h1>Main</h1>
<h2>Sub</h2>
<h3>Small</h3>
```

### CSS:

```css
:is(h1, h2, h3) {
  color: blue;
}
```

---

# 🌟 **15. :has() Selector (MOST powerful)**

### ✔️ When to use:

To select a **parent** based on **child**.

### Example

### HTML:

```html
<div class="card">
  <img src="photo.jpg">
</div>
```

### CSS:

```css
.card:has(img) {
  border: 2px solid green;
}
```

---

# 🌟 **Need a full PDF or cheat-sheet with diagrams?**

I can generate a beautifully designed **Selectors PDF**, **practice questions**, or a **full CSS book**.
