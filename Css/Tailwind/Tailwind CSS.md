# **1. Introduction to Tailwind CSS**

**What is Tailwind CSS?**
Tailwind CSS is a **utility-first CSS framework**. Instead of writing custom CSS for each class, you use **predefined utility classes** directly in your HTML to style elements.

**Example:**

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Click Me
</button>
```

* `bg-blue-500` → background color
* `text-white` → text color
* `px-4 py-2` → padding x & y
* `rounded` → border-radius

**Advantages:**

* Rapid UI development
* Responsive design is easy
* Consistent design system

**Setup Options:**

1. **CDN (Quick start)**

```html
<script src="https://cdn.tailwindcss.com"></script>
```

2. **NPM (For projects)**

```bash
npm install -D tailwindcss
npx tailwindcss init
```

---

# **2. Colors**

Tailwind has **default colors**, or you can define custom ones in `tailwind.config.js`.

**Example:**

```html
<div class="bg-red-500 text-white p-4">Red Box</div>
<div class="bg-green-200 text-green-800 p-4">Green Box</div>
```

**Usage:**

* `bg-` → background color
* `text-` → text color
* `border-` → border color

**Custom color in config:**

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: '#1DA1F2',
    }
  }
}
```

```html
<div class="bg-brand text-white p-4">Brand Color</div>
```

---

# **3. Typography**

**Text Size, Weight, Alignment**

```html
<p class="text-lg font-bold text-center">
  Hello Tailwind!
</p>
```

* `text-lg` → large text
* `font-bold` → bold text
* `text-center` → center aligned

**Line-height, Letter-spacing**

```html
<p class="leading-loose tracking-wide">
  Spaced Text
</p>
```

* `leading-loose` → line height
* `tracking-wide` → letter spacing

**Font Family**

```html
<p class="font-serif">Serif Font</p>
<p class="font-sans">Sans Font</p>
```

---

# **4. Spacing (Padding & Margin)**

**Padding (`p`) & Margin (`m`)**

```html
<div class="m-4 p-6 bg-gray-200">Box</div>
```

* `m-4` → margin all sides
* `p-6` → padding all sides

**Directional Spacing:**

* `mx-4` → horizontal margin
* `my-2` → vertical margin
* `px-2 py-4` → padding x & y

---

# **5. Borders & Radius**

```html
<div class="border-4 border-blue-500 rounded-lg p-4">
  Rounded Box
</div>
```

* `border-4` → 4px border
* `border-blue-500` → border color
* `rounded-lg` → border-radius

**Circle**

```html
<img class="rounded-full w-24 h-24" src="avatar.png">
```

---

# **6. Flexbox**

**Container Flex**

```html
<div class="flex justify-between items-center p-4 bg-gray-100">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

* `flex` → turns div into flex container
* `justify-between` → space between items horizontally
* `items-center` → center vertically

**Flex Direction**

* `flex-row` → default row
* `flex-col` → vertical layout

**Flex Grow & Shrink**

```html
<div class="flex">
  <div class="flex-grow bg-red-500 p-4">Grow</div>
  <div class="flex-shrink bg-blue-500 p-4">Shrink</div>
</div>
```

---

# **7. Grid**

**Basic Grid**

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-red-200 p-4">1</div>
  <div class="bg-blue-200 p-4">2</div>
  <div class="bg-green-200 p-4">3</div>
</div>
```

* `grid-cols-3` → 3 columns
* `gap-4` → gap between grid items

**Responsive Grid**

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  ...
</div>
```

* `md:grid-cols-3` → 3 columns on medium screens

---

# **8. Responsive Design**

Tailwind is mobile-first. Use **breakpoints**:

| Prefix | Screen size |
| ------ | ----------- |
| sm     | ≥640px      |
| md     | ≥768px      |
| lg     | ≥1024px     |
| xl     | ≥1280px     |
| 2xl    | ≥1536px     |

**Example:**

```html
<div class="p-2 sm:p-4 md:p-6 lg:p-8 bg-gray-200">
  Responsive Box
</div>
```

---

# **9. States (Hover, Focus, Active)**

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Hover Me
</button>
```

* `hover:bg-blue-700` → background changes on hover

**Focus Example:**

```html
<input class="border p-2 focus:ring-2 focus:ring-blue-500" />
```

---

# **10. Shadows, Opacity, and Rounded**

```html
<div class="shadow-lg rounded-xl opacity-80 p-4 bg-white">
  Shadow Box
</div>
```

* `shadow-lg` → large shadow
* `opacity-80` → 80% opacity

---

# **11. Transitions & Animations**

```html
<button class="bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out p-2 rounded">
  Hover Smooth
</button>

<div class="animate-bounce bg-red-500 p-4">Bouncing</div>
```

---

# **12. Customization & Config**

**Extend Colors in tailwind.config.js**

```js
theme: {
  extend: {
    colors: {
      primary: '#FF5733',
    }
  }
}
```

```html
<div class="bg-primary text-white p-4">Custom Color</div>
```

**@apply (Reusable classes)**

```css
/* style.css */
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700;
}
```

```html
<button class="btn">Button</button>
```

---

# **13. Forms**

```html
<input class="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500" placeholder="Enter Name">
<select class="border p-2 rounded w-full">
  <option>Option 1</option>
</select>
```

---

# **14. Dark Mode**

**Setup in config**

```js
darkMode: 'class'
```

```html
<div class="bg-white dark:bg-gray-800 text-black dark:text-white p-4">
  Dark Mode Box
</div>
```

---

# **15. Advanced Utilities**

* **Transform**: `rotate-45`, `scale-110`
* **Filters**: `blur-sm`, `brightness-125`, `contrast-150`
* **Line Clamp**: `line-clamp-3`

---

# **16. Real-world Example**

**Card Component**

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="image.jpg" alt="Image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">Some description here.</p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2">#tag1</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700">#tag2</span>
  </div>
</div>
```
