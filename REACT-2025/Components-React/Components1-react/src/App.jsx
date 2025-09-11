/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'


const src = "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// const NetFlixSeriesCard = () =>{ // Components alwase camel case // it is not funtion 
//   return(
//     <div>
//       <div>
//         <img src={src} alt='photo.jpg' width="20%" height="10%" />
//       </div>
//       <h2>Andor</h2>
//       <h3>Rating:8.5</h3>
//       <p>
//         Reviewers say 'Andor' is lauded for mature storytelling, complex characters, and gritty realism, setting it apart from other Star Wars content. The series deeply explores the Star Wars universe, focusing on ordinary people's struggles against the Empire. Diego Luna's performance is particularly noted for its intensity and depth. The show's world-building, attention to detail, and thematic depth offer a fresh, engaging take on the franchise, avoiding typical tropes for a nuanced narrative.
//       </p>
//       <button onClick ={() => alert ("Why are you clike me ha,,")} className='btn'>Not Click</button>
//       <input type="text" data-test="input" />
//     </div>
//   )
// }


// 1. Variables
// You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

// 2. Expressions
// JSX allows you to write JavaScript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.

// Dynamic Values using Function call
const NetFlixSeriesCard = () =>{ 
  // Dynamic Values 
  const name = "Andor"
  const Rating = "8.9"
  const sumamry = "Reviewers say 'Andor' is lauded for mature storytelling, complex characters, and gritty realism, setting it apart from other Star Wars content. The series deeply explores the Star Wars universe, focusing on ordinary people's struggles against the Empire. Diego Luna's performance is particularly noted for its intensity and depth. The show's world-building, attention to detail, and thematic depth offer a fresh, engaging take on the franchise, avoiding typical tropes for a nuanced narrative."

  // Conditional rendering
  let age = 20;

  // Funtion calls
  // Funtions, especially those that return jsx, can be invoked direcily with your jsx.
  const returnGenre = () =>{
    const genre = "SiFi";
    return genre;
  }
  // Conditional rendering
  // Conditional oparator 4 types
  // (if/else, ternary, variable, function)
//typ-1
  // But this is violated Dry (Do not repeat yourself)
  // if (age < 18){
  //   return(
  //     <div>
  //     <div>
  //       <img src={src} alt='photo.jpg' width="20%" height="10%" />
  //     </div>
  //     <h2>Andor{name}</h2>
  //     <h3>Rating:{3+9}</h3>
  //     <p>
  //       sumamry - {sumamry}
  //     </p>
  //     <p>Genre: {returnGenre()}</p>
  //     <button>Not Avalabel</button>
  //   </div>
  //   )
  // }
//typ-2
  // <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
//typ-3
// Sometimes you might have very comples if CSSConditionRule, fot that therre are some solutions

  // let canWatch = "Not Available";
  // if (age >= 18) canWatch = "Watch Now";

// type - 4
// 4: solution can be better as it prevents cluttering of variables outside and encapsulates such logic inside a function.
// One another benefit is also that, you can also pass some dynamic values as function parameter.

const canWatch = () =>{
  if (age >= 18) return "Wach Now!";
  return "Not Available";
};

  return(
    <div>
      <div>
        <img src={src} alt='photo.jpg' width="20%" height="10%" />
      </div>
      <h2>Andor{name}</h2>
      {/* <h3>Rating:{Rating}</h3> */}
      <h3>Rating:{3+9}</h3> {/* Expressions  */}
      {/* <h3>Rating:{10/3.5}</h3> */}
      <p>
        sumamry - {sumamry}
      </p>
      <p>Genre: {returnGenre()}</p>
      {/* <button>Watch Now</button> */}
      {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
      {/* <button>{canWatch}</button> */}
       <button>{canWatch()}</button>


    </div>
  )
}



function App() {
  return (
    <> {/**<> is React Fragments: Remove unwanted Nodes & Speed Up Rendering */}
      <NetFlixSeriesCard />
      <NetFlixSeriesCard />
      <NetFlixSeriesCard />
    </>
  )
}

export default App
