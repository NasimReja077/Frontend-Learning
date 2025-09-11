/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'


// What is JSX?
// JSX is a syntax that allows developers to write HTML-like code within JavaScript. It’s not a standard part of JavaScript (or ECMAScript) but a preprocessor step that transforms JSX into JavaScript objects compatible with React’s Virtual DOM. JSX makes React code readable and expressive, bridging the gap between UI structure and logic.


// export const App = () =>{
//   return <h1>Hello, Mi name is Nasim.</h1> // in js writh html this call jsx
// };


// Transpiled by Babel to

// export const App = () =>{ 
//   return React.createElement("h1", null, "Hello, Mi name is Nasim.");
// }; // createElement is conver into react eliment or vercual dom
// output
// This creates a Virtual DOM node ({ type: 'h1', props: { children: 'Hello, World!' } }).


// console.log(React.createElement("h1", null, "Hello, Mi name is Nasim."))

// https://babeljs.io/

// import { jsx as _jsx } from "react/jsx-runtime";
// export const App = () => {
//   return /*#__PURE__*/_jsx("h1", {
//     children: "Hello, Mi name is Nasim."
//   });
// };


// when only one paren then nort (), use when multipal then use and not use {}

//? Each jsx expression must have one parent element, which means if you try return multiple eliments, React will throw an error.

//? Everv jsx tag needs to be closed. You can use self-closing tags for elements that don't have childern, e.g., <img src="url" />

// Valid: <div><p>One</p><p>Two</p></div> or <><p>One</p><p>Two</p></>
// Invalid: <p>One</p><p>Two</p> (no single parent).

// Fragments: Use <React.Fragment> or shorthand <></> to group elements without adding DOM nodes.Example: <><h1>Title</h1><p>Text</p></>



// Attributes in JSX
// JSX attributes mirror HTML but follow camelCase and integrate JS expressions.



const src = "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const App = () =>{
  return (
    <div>
      <div>
        <img src={src} alt='photo.jpg' width="50%" height="50%" />
      </div>
      <h2>Andor</h2>
      <h3>Rating:8.5</h3>
      <p>
        Reviewers say 'Andor' is lauded for mature storytelling, complex characters, and gritty realism, setting it apart from other Star Wars content. The series deeply explores the Star Wars universe, focusing on ordinary people's struggles against the Empire. Diego Luna's performance is particularly noted for its intensity and depth. The show's world-building, attention to detail, and thematic depth offer a fresh, engaging take on the franchise, avoiding typical tropes for a nuanced narrative.
      </p>
      <button onClick ={() => alert ("Why are you clike me ha,,")} className='btn'>Not Click</button>
      <input type="text" data-test="input" />
    </div>

    //Notes:class → className (due to JS reserved word).
    // for → htmlFor (e.g., in <label>).
    // Boolean attributes: disabled={true} (or shorthand disabled); disabled={false} omits the attribute.
    // Custom attributes: Use data- prefix (e.g., data-id="123").
  )
}



export default App
