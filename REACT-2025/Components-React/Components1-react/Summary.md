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



#### Core React & JSX Concepts Components: 
You've created a functional React component named NetFlixSeriesCard. You've also seen how to reuse this component multiple times within the main App component.

#### JSX (JavaScript XML): 
You've used JSX syntax to write HTML-like code within your JavaScript files. This includes using self-closing tags (like <img ... />) and embedding a component with <NetFlixSeriesCard />.

#### React Fragments (<>): 
You've used the short syntax for React Fragments (<></>) to group multiple components without adding an extra div to the DOM. This is a common practice for clean and efficient rendering.

#### Dynamic Content in JSX Embedding Variables: 
You've learned how to embed JavaScript variables directly into JSX using curly braces {}. For example, {name} and {sumamry}.

#### Expressions in JSX: 
You've used curly braces to perform and display the result of JavaScript expressions, like {3+9}. This shows that you can do more than just display variables; you can also perform calculations.

#### Function Calls in JSX: 
You've called a function, returnGenre(), directly inside your JSX to dynamically render its return value. This is a powerful way to encapsulate logic and make your code more organized.

#### Conditional Rendering Ternary Operator: 
You've demonstrated how to use the ternary operator (condition ? value_if_true : value_if_false) to conditionally render a string based on a condition (age >= 18). This is a concise way to handle simple conditional logic.

#### Function-based Conditional Rendering: 
You've shown a more advanced approach to conditional rendering by creating a separate function (canWatch) that returns different JSX or values based on a condition. This is a great way to handle more complex logic in a clean, reusable manner.

You've got a solid foundation in some of the most fundamental concepts of modern React development!

