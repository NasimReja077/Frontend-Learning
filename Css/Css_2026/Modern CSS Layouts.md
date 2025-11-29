# **1. Flexbox (Flexible Box Layout)**

**Purpose:**
Flexbox is used to **align, distribute, and order items in a container**—even when their size is unknown or dynamic.

**Key Features:**

* One-dimensional layout (row OR column)
* Easy alignment and spacing
* Flexible item sizing (grow, shrink, basis)

**Important Properties:**

| Property (Container) | Description                                      |
| -------------------- | ------------------------------------------------ |
| `display: flex`      | Enable flex layout                               |
| `flex-direction`     | `row`, `row-reverse`, `column`, `column-reverse` |
| `justify-content`    | Align items horizontally (main axis)             |
| `align-items`        | Align items vertically (cross axis)              |
| `flex-wrap`          | Wrap items onto multiple lines if needed         |

| Property (Item) | Description                                      |
| --------------- | ------------------------------------------------ |
| `flex-grow`     | Item can grow to fill space                      |
| `flex-shrink`   | Item can shrink if needed                        |
| `flex-basis`    | Initial size of item                             |
| `align-self`    | Override container `align-items` for single item |

**Example: Flexbox Layout**

```html
<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
  <div style="background: #4f46e5; color: white; padding: 20px;">Box 1</div>
  <div style="background: #f59e0b; color: white; padding: 20px;">Box 2</div>
  <div style="background: #10b981; color: white; padding: 20px;">Box 3</div>
</div>
```

---

# **2. CSS Grid (Two-Dimensional Layout)**

**Purpose:**
Grid is used for **2D layouts**—both rows and columns simultaneously. Ideal for dashboards, galleries, and complex web layouts.

**Important Properties:**

| Property (Container)    | Description                                  |
| ----------------------- | -------------------------------------------- |
| `display: grid`         | Enable grid layout                           |
| `grid-template-columns` | Define columns (`1fr 2fr`, `repeat(3, 1fr)`) |
| `grid-template-rows`    | Define rows                                  |
| `gap`                   | Row & column spacing                         |
| `grid-auto-flow`        | Control item placement                       |

| Property (Item) | Description                |
| --------------- | -------------------------- |
| `grid-column`   | Item column span (`1 / 3`) |
| `grid-row`      | Item row span              |

**Example: Grid Layout**

```html
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
  <div style="background: #4f46e5; color: white; padding: 20px;">1</div>
  <div style="background: #f59e0b; color: white; padding: 20px;">2</div>
  <div style="background: #10b981; color: white; padding: 20px;">3</div>
  <div style="background: #ef4444; color: white; padding: 20px;">4</div>
</div>
```

---

# **3. Multi-Column Layout**

**Purpose:**
Automatically divides text or content into multiple columns—like a newspaper layout.

**Key Properties:**

* `column-count` – Number of columns
* `column-gap` – Space between columns
* `column-width` – Ideal width of columns

**Example:**

```html
<div style="column-count: 3; column-gap: 20px;">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue eu magna...</p>
</div>
```

---

# **4. CSS Shapes & Float Alternatives**

Modern layouts often replace **float** with **shape-outside** and **clip-path**:

```html
<div style="float: left; shape-outside: circle(50%); width: 200px; height: 200px; margin-right: 20px; background: #4f46e5;"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Text wraps around the circle.</p>
```

---

# **5. Advanced Positioning**

**Purpose:** Position elements in specific areas of the page.

* `static` – Default
* `relative` – Move relative to its normal position
* `absolute` – Positioned relative to nearest positioned ancestor
* `fixed` – Fixed to viewport
* `sticky` – Stick to viewport on scroll within parent

**Example: Sticky Navbar**

```html
<nav style="position: sticky; top: 0; background: #4f46e5; color: white; padding: 10px;">
  Sticky Navbar
</nav>
```

---

# **6. Modern Layout Best Practices**

* Use **Flexbox** for simple 1D layouts (navbars, buttons, cards)
* Use **Grid** for complex 2D layouts (dashboards, galleries)
* Use **clamp() / minmax() / auto-fit** for responsive sizing
* Combine **Grid + Flexbox** for ultimate control
* Avoid floats; use **Flex/Grid** instead

---

# **7. Tailwind CSS Equivalents**

| CSS Concept      | Tailwind Class Examples                               |
| ---------------- | ----------------------------------------------------- |
| Flexbox          | `flex`, `flex-col`, `justify-between`, `items-center` |
| Grid             | `grid`, `grid-cols-3`, `gap-4`, `col-span-2`          |
| Gap              | `gap-2`, `gap-6`                                      |
| Sticky           | `sticky top-0`                                        |
| Width/Height     | `w-full`, `h-64`, `min-w-[200px]`                     |
| Clamp/Responsive | `text-base md:text-lg lg:text-2xl`                    |

---