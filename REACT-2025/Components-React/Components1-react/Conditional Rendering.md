Perfect ⚡ You already learned **4 ways of conditional rendering** (if/else, ternary, variable, function).
But React gives you **many more patterns**. Let’s go **step by step with examples** 👇

---

# 🎯 All Ways of Conditional Rendering in React

---

## **1. if/else inside return (not recommended)**

```jsx
function Example1({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please login</h1>;
  }
}
```

✅ Clear, but not good for inline conditions.

---

## **2. Inline Ternary Operator (most common)**

```jsx
function Example2({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please login</h1>}
    </div>
  );
}
```

✅ Best for **small one-liners**.

---

## **3. Variable Before Return**

```jsx
function Example3({ isLoggedIn }) {
  let message;
  if (isLoggedIn) {
    message = "Welcome back!";
  } else {
    message = "Please login";
  }

  return <h1>{message}</h1>;
}
```

✅ Good when condition logic is **big/complex**.

---

## **4. Function Returning UI**

```jsx
function Example4({ isLoggedIn }) {
  function renderMessage() {
    if (isLoggedIn) return <h1>Welcome back!</h1>;
    return <h1>Please login</h1>;
  }

  return <div>{renderMessage()}</div>;
}
```

✅ Best when **logic is reusable**.

---

## **5. Logical AND (`&&`)**

👉 Show something **only if condition is true**.

```jsx
function Example5({ isAdmin }) {
  return (
    <div>
      <h1>User Dashboard</h1>
      {isAdmin && <button>Delete User</button>}
    </div>
  );
}
```

✅ Used when **nothing should show if false**.

---

## **6. Logical OR (`||`)**

👉 Show a **fallback value**.

```jsx
function Example6({ username }) {
  return <h1>Hello, {username || "Guest"}</h1>;
}
```

✅ Useful for **default values**.

---

## **7. Switch Statement**

👉 Best when you have **many cases**.

```jsx
function Example7({ role }) {
  switch (role) {
    case "admin":
      return <h1>Welcome Admin</h1>;
    case "user":
      return <h1>Welcome User</h1>;
    default:
      return <h1>Guest Access</h1>;
  }
}
```

---

## **8. Using Immediately Invoked Function Expression (IIFE)**

👉 For **inline logic** inside JSX.

```jsx
function Example8({ age }) {
  return (
    <div>
      {(() => {
        if (age >= 18) return <p>You can watch</p>;
        return <p>Not allowed</p>;
      })()}
    </div>
  );
}
```

✅ Good when you want **complex logic inline**.

---

## **9. Array Mapping with Condition**

👉 Render **list items conditionally**.

```jsx
function Example9({ movies }) {
  return (
    <ul>
      {movies.map((m) =>
        m.rating >= 8 ? <li key={m.id}>{m.title}</li> : null
      )}
    </ul>
  );
}
```

✅ Perfect for **lists with filtering**.

---

## **10. Conditional CSS Classes**

👉 Hide/Show UI using className.

```jsx
function Example10({ isDark }) {
  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
      Welcome to my site
    </div>
  );
}
```

✅ Smart way to **conditionally style**.

---

## **11. Null Rendering**

👉 Return `null` when nothing should render.

```jsx
function Example11({ show }) {
  if (!show) return null;
  return <h1>I am visible</h1>;
}
```

✅ Useful for **completely hiding components**.

---

# 🚀 Summary of Conditional Rendering Patterns

1. if/else inside return
2. Inline ternary operator
3. Variable before return
4. Function returning UI
5. Logical AND (`&&`)
6. Logical OR (`||`)
7. Switch statement
8. IIFE (inline function)
9. Array map with condition
10. Conditional CSS classes
11. Return `null`

👉 Total **11 powerful techniques** 🔥

---

Do you want me to **take your Netflix card example** and show all these **11 conditional rendering methods inside it** (like different ways to check age, rating, genre)?
