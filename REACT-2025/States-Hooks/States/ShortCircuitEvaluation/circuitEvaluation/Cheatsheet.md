# 📘 Short Circuit Evaluation in React

## 🔹 What is Short Circuit Evaluation?

Short circuit evaluation is a **logical operation technique** in JavaScript where expressions are evaluated from left to right and stop (short-circuit) once the result is determined.

👉 In React, this concept is widely used for **conditional rendering**.

---

## 🔹 Operators Used

### 1. **AND (`&&`)**

* Syntax: `condition && expression`
* If the **condition is true**, the expression is rendered.
* If the **condition is false**, nothing is rendered.

✅ Example:

```jsx
{isLoggedIn && <p>Welcome back, user!</p>}
```

* If `isLoggedIn = true` → `"Welcome back, user!"` is shown.
* If `isLoggedIn = false` → nothing is shown.

---

### 2. **OR (`||`)**

* Syntax: `condition || expression`
* If the **condition is true**, it is rendered.
* If the **condition is false**, the fallback expression is rendered.

✅ Example:

```jsx
<p>{userName || "Guest User"}</p>
```

* If `userName = "Nasim"` → `"Nasim"` is shown.
* If `userName = ""` → `"Guest User"` is shown.

---

## 🔹 Why Use Short Circuit in React?

* Makes conditional rendering **simpler** than using `if-else`.
* Avoids writing **extra ternary operators** for simple checks.
* Helps render **fallback UI** or hide elements efficiently.

---

## 🔹 Examples

### Example 1: Using `&&`

```jsx
{isLoggedIn && <p>✅ You are logged in!</p>}
```

👉 Renders only when `isLoggedIn` is `true`.

---

### Example 2: Using `||`

```jsx
<p>{cartItems || "🛒 Cart is empty"}</p>
```

👉 If `cartItems = 0`, shows `"Cart is empty"`.

---

### Example 3: Mixed Condition

```jsx
{isLoggedIn && user
  ? `Welcome back, ${user}!`
  : "Please login and set your name."}
```

👉 Combines `&&` with ternary to make logic more flexible.

---

### Example 4: Notification Example

```jsx
{notification && <p>🔔 {notification}</p>}
```

👉 Renders notification only if it exists.

---

## 🔹 Benefits

* ✅ Clean and **concise syntax**.
* ✅ Easy to handle **optional UI rendering**.
* ✅ Improves **readability** compared to nested ternary/if-else.

---

## 🔹 Summary

* **`&&`** → Renders the expression only if the condition is true.
* **`||`** → Renders fallback expression if the condition is false.
* Useful for **conditional rendering** like login states, error messages, fallback UI, notifications, etc.

---

👉 Short Circuit Evaluation is one of the most common React patterns for handling **conditional UI rendering**.

---

Got it 👍 You want me to **fix the OR (||) Fallback Example row** in the cheatsheet table (it looked a bit confusing).
Here’s the **corrected Markdown table**:

---

# 📑 Short Circuit Evaluation Cheatsheet (React)

| Operator                  | Syntax                           | Behavior                                                                   | React Example                                                   | Output                                                          |             |                                                                               |                 |   |                        |                                                                      |
| ------------------------- | -------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------- | --------------- | - | ---------------------- | -------------------------------------------------------------------- |
| **AND (&&)**              | `condition && expression`        | If condition is **true**, render expression. If **false**, render nothing. | `{isLoggedIn && <p>Welcome!</p>}`                               | ✔️ `isLoggedIn = true` → `Welcome!` <br> ❌ `false` → nothing    |             |                                                                               |                 |   |                        |                                                                      |
| \*\*OR (                  |                                  | )\*\*                                                                      | \`condition                                                     |                                                                 | fallback\`  | If condition is **truthy**, render condition. If **falsy**, render fallback.  | \`<p>{userName  |   | "Guest User"}</p>\`    | ✔️ `userName = "Nasim"` → `Nasim` <br> ❌ `""` → `Guest User`         |
| **Mixed (&& + ternary)**  | `cond1 && cond2 ? expr1 : expr2` | Combine multiple checks.                                                   | `{isLoggedIn && user ? \`Hello, \${user}\` : "Please log in"}\` | ✔️ Both true → `"Hello, Nasim"` <br> ❌ Else → `"Please log in"` |             |                                                                               |                 |   |                        |                                                                      |
| \*\*Fallback Example (    |                                  | )\*\*                                                                      | \`value                                                         |                                                                 | "Default"\` | Show **default** if value is falsy (`""`, `0`, `null`, `undefined`, `false`). | \`<p>{cartItems |   | "Cart is empty"}</p>\` | ✔️ `cartItems = 0` → `"Cart is empty"` <br> ✔️ `cartItems = 5` → `5` |
| **Optional Display (&&)** | `value && <Component />`         | Render a component only if value exists (truthy).                          | `{notification && <p>{notification}</p>}`                       | ✔️ `notification="New Msg"` → `"New Msg"` <br> ❌ `""` → nothing |             |                                                                               |                 |   |                        |                                                                      |

---

👉 Now the **OR (||) fallback** explanation is **clear**:

* If the value is truthy → it will show the value.
* If falsy → it will show the fallback.

---

Do you also want me to **add examples of falsy values in JS** (`0, "", null, undefined, false, NaN`) into this cheatsheet for clarity?
