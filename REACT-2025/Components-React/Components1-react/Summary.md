# Things You Learned in This Code

## 1. React Basics

- How to create a functional component (NetFlixSeriesCard, App).

- Components must use PascalCase naming (NetFlixSeriesCard not netflixSeriesCard).

- Using default export (export default App).

- Using fragments (<> </>) to avoid extra <div> wrappers.

## 2. JSX Fundamentals

- Embedding variables inside JSX using {} → `{name}, {Rating}`.
- Embedding expressions → `{3+9}, {10/3.5}`.
- Writing multi-line JSX inside return().
- JSX must return a single root element (here `<div>`).
- Using JSX comments → `{/* comment */}`.

## 3. Dynamic Values

- Declaring variables (name, Rating, summary) and using them inside JSX.
- Function calls returning dynamic values → returnGenre().

## 4. Conditional Rendering

- Different ways to render UI conditionally:
- if/else inside JSX return (commented example).
- Ternary operator → `{age >= 18 ? "Watch Now" : "Not Available"}`.
- Pre-defined variable outside JSX (let canWatch = "...- ").
- Encapsulating logic in a function → `canWatch()`.

## 5. Events in React

- Using onClick event handler → (commented example: `onClick={() => alert("Why are you click me")}`).

## 6. Props & Reusability (Basic Idea)

- Right now NetFlixSeriesCard is repeated 3 times in <App />.

- Each instance could accept props (title, rating, summary) instead of hardcoding values → reusability lesson.

## 7. UI Structuring

- Breaking down large UI into reusable smaller components (NetFlixSeriesCard for each card).

- Nesting elements properly inside parent <div>.

## 8. Best Practices

- Keeping functions (returnGenre, canWatch) small and reusable.

- Avoiding repetition → DRY principle (Don’t Repeat Yourself).

- Using camelCase for variables and PascalCase for components.

## 9. Miscellaneous

- How to use an image in JSX `(<img src={src} ... />)`.

- Using alt attribute for accessibility.

- Understanding React fragments (<> </>) → optimize DOM, avoid extra wrapper `<div>`.

- Importance of keys in lists (though not applied here, but relevant when repeating <NetFlixSeriesCard />).

## 📌 Summary of Topics You Learned

- Functional components
- PascalCase naming convention
- Default export
- React Fragments (<> </>)
- JSX basics (variables, expressions, single root element, comments)
- Dynamic values with variables
- Function calls inside JSX
- Conditional rendering (4 methods)
- Event handling (onClick)
- Component reusability (concept of props)
- Breaking UI into smaller components
- DRY principle (avoiding repetition)
- Images in JSX (src, alt)
- Accessibility (alt text)
- Nesting elements properly
- JSX return must have one root element
👉 That’s 16 key lessons from just this one file 🚀