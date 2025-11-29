---

# 🎯 **BEGINNER LEVEL (1–10)**

These teach fundamentals: rows, columns, gaps, alignment.

---

## **1. Create a 3-column Grid**

### Goal:

Make 3 equal columns.

```html
<div class="grid">
  <div>1</div><div>2</div><div>3</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

---

## **2. Create a 2×2 Square Grid**

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(2, 150px);
  gap: 10px;
}
```

---

## **3. Create a Responsive Grid Using auto-fit**

```css
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

---

## **4. Create a Grid with Different Column Sizes**

```css
grid-template-columns: 100px 200px auto 1fr;
```

---

## **5. Use gap for spacing**

```css
gap: 20px;
```

---

## **6. Align items inside grid cells**

```css
place-items: center;
```

---

## **7. Create a grid with implicit rows**

```css
grid-auto-rows: 120px;
```

---

## **8. Highlight every even item**

```css
.grid div:nth-child(even) {
  background: #dff2ff;
}
```

---

## **9. Span 2 columns**

```css
.grid div:first-child {
  grid-column: span 2;
}
```

---

## **10. Span 2 rows**

```css
.grid div:nth-child(3) {
  grid-row: span 2;
}
```

---

# 🎯 **INTERMEDIATE LEVEL (11–18)**

These include grid areas, auto-placement, minmax, and dynamic layouts.

---

## **11. Create a Netflix-style Layout (Row fixed, columns auto-scroll)**

```css
.grid {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 200px;
  overflow-x: auto;
}
```

---

## **12. Use minmax() for dynamic cell sizes**

```css
grid-template-columns: repeat(4, minmax(150px, 1fr));
```

---

## **13. Create a Grid Using grid-template-areas**

```css
grid-template-areas:
  "header header"
  "sidebar content"
  "footer footer";
```

---

## **14. Create a Dashboard Grid Layout**

4 cards per row, responsive on mobile.

```css
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
```

---

## **15. Auto-flow dense (fills empty gaps)**

```css
grid-auto-flow: dense;
```

---

## **16. Center the whole grid**

```css
justify-content: center;
align-content: center;
```

---

## **17. Place-items shortcut**

```css
place-items: center;
```

---

## **18. Use nth-child selectors with Grid**

Highlight every 3rd card:

```css
.grid div:nth-child(3n) {
  background: #ffe4e4;
}
```

---

# 🎯 **ADVANCED LEVEL (19–25)**

These include full page layouts, complex grids, real app UI, and nested grids.

---

## **19. Build a Complete Website Layout Using Grid Areas**

```
+---------------------------+
| Header                    |
+------+--------------------+
| Nav  | Content           |
+------+--------------------+
| Footer                    |
+---------------------------+
```

```css
.wrapper {
  display: grid;
  grid-template-areas:
    "header header"
    "nav content"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px auto 60px;
}
```

---

## **20. Build a Complex Card Layout (Pinterest/Masonry Style)**

```css
.container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-flow: dense;
}
.card:nth-child(2) { grid-row: span 2; }
.card:nth-child(5) { grid-column: span 2; }
```

---

## **21. Create a 12-Column Layout (Bootstrap Style)**

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
.col-6 { grid-column: span 6; }
.col-4 { grid-column: span 4; }
.col-12 { grid-column: span 12; }
```

---

## **22. Build an Admin Dashboard Layout**

Sections:

* sidebar
* header
* cards
* stats
* reports

Grid:

```css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
}
```

---

## **23. Nested Grid (Grid inside Grid)**

```css
.card {
  display: grid;
  grid-template-columns: 100px 1fr;
}
```

---

## **24. Responsive product grid (E-commerce style)**

```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

---

## **25. Full Hero Section with Grid Positioning**

```css
.hero {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  place-items: center;
}
```