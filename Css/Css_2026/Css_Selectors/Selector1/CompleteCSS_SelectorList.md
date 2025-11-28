# ✅ **A–Z Complete CSS Selector List (Everything You Must Know)**

Below is the **final list** used by junior → senior → expert frontend developers.

---

# 🔵 **1. Basic Selectors**

| Selector           | Example     | Meaning                           |
| ------------------ | ----------- | --------------------------------- |
| **Universal**      | `*`         | Selects all elements              |
| **Element / Type** | `p`         | Selects all `<p>` tags            |
| **Class**          | `.box`      | Selects elements with class="box" |
| **ID**             | `#title`    | Selects element with id="title"   |
| **Group**          | `h1, h2, p` | Selects all listed elements       |

---

# 🔵 **2. Combinator Selectors**

| Selector             | Example    | Meaning                            |
| -------------------- | ---------- | ---------------------------------- |
| **Descendant**       | `.box p`   | Any `<p>` inside `.box`            |
| **Child**            | `.box > p` | Direct child `<p>`                 |
| **Adjacent Sibling** | `h2 + p`   | First `<p>` immediately after `h2` |
| **General Sibling**  | `h2 ~ p`   | All `<p>` after `h2` (same parent) |

---

# 🔵 **3. Attribute Selectors**

| Selector                     | Example              | Meaning                |         |                  |
| ---------------------------- | -------------------- | ---------------------- | ------- | ---------------- |
| **Exact match**              | `input[type="text"]` | Attribute equals value |         |                  |
| **Contains (*=)**            | `img[src*="logo"]`   | Attribute contains     |         |                  |
| **Starts with (^=)**         | `a[href^="https"]`   | Starts with            |         |                  |
| **Ends with ($=)**           | `img[src$=".png"]`   | Ends with              |         |                  |
| **Attribute exists**         | `button[disabled]`   | Attribute must exist   |         |                  |
| **Whitespace contains (~=)** | `[class~="active"]`  | Word inside class      |         |                  |
| **Hyphen prefix (            | =)**                 | `[lang                 | ="en"]` | en, en-US, en-UK |

---

# 🔵 **4. Pseudo-Class Selectors**

✔ **State-based**
✔ **Event-based**
✔ **Structural selectors**

### ⭐ UI States

| Selector    | Example         |
| ----------- | --------------- |
| `:hover`    | button:hover    |
| `:active`   | button:active   |
| `:focus`    | input:focus     |
| `:visited`  | a:visited       |
| `:checked`  | input:checked   |
| `:disabled` | button:disabled |
| `:enabled`  | input:enabled   |

---

### ⭐ Structural (very important)

| Selector           | Example                  | Meaning     |
| ------------------ | ------------------------ | ----------- |
| `:first-child`     | `p:first-child`          | first child |
| `:last-child`      | `p:last-child`           | last child  |
| `:nth-child(n)`    | `li:nth-child(2)`        | select nth  |
| `:nth-child(even)` | row highlight            |             |
| `:nth-child(odd)`  | alternate rows           |             |
| `:nth-of-type()`   | based on tag type        |             |
| `:first-of-type`   | first `<p>`              |             |
| `:last-of-type`    | last `<p>`               |             |
| `:only-child`      | only single child        |             |
| `:only-of-type`    | only one `<p>` in parent |             |

---

### ⭐ Logic Pseudo Classes

| Selector   | Meaning                          |
| ---------- | -------------------------------- |
| `:not()`   | Exclude elements                 |
| `:is()`    | Accept ANY selector inside       |
| `:where()` | Like is(), but zero specificity  |
| `:has()`   | Parent selector (super powerful) |

---

# 🔵 **5. Pseudo-Element Selectors**

| Selector         | Example                     | Meaning |
| ---------------- | --------------------------- | ------- |
| `::before`       | Add content before          |         |
| `::after`        | Add content after           |         |
| `::first-letter` | First letter styling        |         |
| `::first-line`   | First line of text          |         |
| `::selection`    | Text selected background    |         |
| `::marker`       | Bullet styling in lists     |         |
| `::placeholder`  | Input placeholder styling   |         |
| `::backdrop`     | Fullscreen modal background |         |

---

# 🔵 **6. Advanced Modern Selectors (CSS4+)**

| Selector             | Example                | Meaning |
| -------------------- | ---------------------- | ------- |
| `:root`              | root element (html)    |         |
| `:empty`             | No children element    |         |
| `:target`            | ID linked by URL       |         |
| `:scope`             | Current scope          |         |
| `:fullscreen`        | Element in fullscreen  |         |
| `:autofill`          | Browser autofill state |         |
| `:in-range`          | Input number valid     |         |
| `:out-of-range`      | Input number invalid   |         |
| `:placeholder-shown` | Input empty            |         |
| `:read-only`         | Field read-only        |         |
| `:read-write`        | Editable field         |         |
| `:valid`             | Form input valid       |         |
| `:invalid`           | Form input invalid     |         |
| `:optional`          | No required attribute  |         |
| `:required`          | Required input         |         |

---

# 🔵 **7. Rare Selectors (but important for interviews)**

| Selector  | Meaning                  |
| --------- | ------------------------ |
| `:link`   | Unvisited link           |
| `:left`   | Page-left in pagination  |
| `:right`  | Page-right in pagination |
| `:dir()`  | Direction (rtl/ltr)      |
| `:lang()` | Language based           |

---

# 🔵 **8. Universal Wildcard Selectors**

| Selector               | Meaning                       |
| ---------------------- | ----------------------------- |
| `* + *`                | All elements except the first |
| `*:not(:first-child)`  | Style everything after first  |
| `.container *:not(h1)` | Select all except h1          |

---

# 🔵 Summary: **Nothing Is Missing Now**

You now have:

✔ Basic Selectors
✔ Combinators
✔ Attribute selectors
✔ All pseudo-classes
✔ All pseudo-elements
✔ All advanced CSS4 selectors
✔ Form validation selectors
✔ Table row selectors
✔ Parent selectors
✔ State selectors
✔ Interaction selectors

This is the **complete selector universe**.

