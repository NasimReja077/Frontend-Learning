import React from 'react'

// Basic React Components:
// Definition: 
// Components are reusable functions or classes that return JSX, encapsulating UI and logic. They accept props for customization and manage state for interactivity.
// Types:
// Functional Components: Preferred since React 16.8 (hooks). Simple, concise, and support 
// hooks like useState, useEffect.
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// {/* Example (Functional Component): */}
// function  Welcome({name}) {
//      return <h1>Hello, {name}</h1>;
// }

// Example (Class Component):
// Legacy; use React.Component with lifecycle methods (e.g., componentDidMount).jsx
class Welcome extends React.Component{
     render(){
          return <h2>{this.props.name}</h2>
     }
}

// Rendering Components:
// Components are used like HTML tags: <Greeting name="Alice" />.
// Nested in other components or rendered directly:

// const root = createRoot(document.getElementById('root'));
// root.render(<Greeting name="Alice" />);

// Key Points:Components must return a single JSX element (or fragment).
// Props are immutable; state (via useState or setState) triggers re-renders.
// Functional components dominate in 2025 due to hooks and simplicity.



// Embedding Expressions in JSX
// JSX allows JavaScript expressions (values, not statements) within curly braces {}. This enables dynamic rendering based on variables, functions, or calculations.

const name = "Alice";
const element = <h1>Hello, {name}!</h1>; // Variable
const sum = <p>Sum: {2 + 2}</p>; // Calculation
const isLoggedIn = true;
const greeting = <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>; // Conditional
const items = ["Apple", "Banana"];

const list = <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>; //Array mapping


// Children in JSX
// Children are content between opening and closing tags. They can be text, other JSX elements, or expressions.

// // Text children
// <div>Hello, World!</div>
// // Element children
// <div>
//   <h1>Title</h1>
//   <p>Paragraph</p>
// </div>
// // Expression children
// const items = ["Item 1", "Item 2"];
// <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>

// Fragments in JSXFragments allow grouping multiple elements without adding extra DOM nodes, solving the single-parent rule. // <></>


// Long form
import React from 'react';
function List(){
     return(
          <React.Fragment>
               <li>One box</li>
               <li>Two box</li>
               <li>Three box</li>
          </React.Fragment>
     );
}

// Shorthand
function List() {
  return (
    <>
      <li>One</li>
      <li>Two</li>
    </>
  );
}


// Use Cases:
// Avoid wrapper <div> that breaks CSS (e.g., flexbox, grid).
// Return multiple elements from components (e.g., <td> in tables).
// Keyed fragments: <React.Fragment key={id}> for lists.



// Rendering Elements
// Definition: A React element is a plain JavaScript object describing a piece of the UI (e.g., { type: 'div', props: { children: 'Hello' } }). Rendering converts these elements into Real DOM nodes.

import { createRoot } from 'react-dom/client';
const element = <h1>Hello, World!</h1>;
const root = createRoot(document.getElementById('root'));
root.render(element);

// root.render mounts the element into <div id="root">, creating <h1>Hello, World!</h1> in the Real DOM.


// React 18+ Enhancements:

// Concurrent Rendering: Features like startTransition and Suspense allow prioritized updates (e.g., user input over data fetches).
// Automatic Batching: Groups multiple state updates into one re-render for performance.

// Example:

import { useState, startTransition } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    startTransition(() => setCount(count + 1)); // Non-urgent update
  };
  return <button onClick={handleClick}>{count}</button>;
}









export default mor
