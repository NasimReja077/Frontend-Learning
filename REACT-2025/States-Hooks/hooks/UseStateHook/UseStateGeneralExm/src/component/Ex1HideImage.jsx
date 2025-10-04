
import React, { useState } from 'react'

export const Ex1HideImage =()=> {
     const [showImage, setShowImage] = useState(true);
     return (

          <div className="text-center mt-10">
               {/* Conditional Rendering */}
               <h1>Ex-1 Build a show/hide image functionality in React.</h1>
               {showImage &&(
                    <img src="https://shorturl.at/kjk3j" alt="Profile Picture" 
                    className='mx-auto p-4 w-65 h-55 rounded-lg shadow-2xl '/>
               )}

               {/* Toggle Button */}
               
               <button
               onClick={() => setShowImage(!showImage)} 
               className='mt-4 px-5 py-2 rounded-lg border-3 border-indigo-500 text-center cursor-pointer bg-pink-500 font-medium text-amber-100'>
                    {showImage ? "Hide Image" : "Show Image"}
               </button>
    </div>
  )
}


// The () (parentheses) are not required by React — they are just JavaScript grouping syntax used for readability when returning multi-line JSX.

// Why we use () here:

// Better readability
// Instead of writing everything in one line:
// {showImage && <img src="..." alt="..." />}


// we use parentheses to make multi-line JSX look clean:
// {showImage && (
//   <img 
//     src="..." 
//     alt="..." 
//     className="rounded-lg shadow-md"
//   />
// )}


// Avoids confusion in JSX expressions
// If the JSX inside is large (multiple tags, props, or nested elements), parentheses clearly group the JSX as the right-hand value of the &&.

// Consistency with return statements
// In React, we often do:
// return (
//   <div>
//     <h1>Hello</h1>
//   </div>
// )


// Same idea — parentheses make it visually clear that this block of JSX is being returned or conditionally rendered.

// ✅ In short:
// () is optional if you return a single short JSX element in one line.
// But it's recommended when JSX spans multiple lines for clarity and fewer bugs.
