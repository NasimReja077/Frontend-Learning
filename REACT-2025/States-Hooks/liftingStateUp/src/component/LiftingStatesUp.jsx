import React, { useState } from 'react'

function LiftingStatesUp() {
     //  Issues with Child Component State Transfer
     const [inputValue, setInputValue] = useState(""); // Lifting State Up in React
  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Lifting State Up Demo
        </h1>
        <InputComponet inputValue={inputValue} setInputValue={setInputValue} /> {/**passing data by a propes */}
          <DisplayComponent inputValue={inputValue} />
      </div>
    </div>
  );
}

export default LiftingStatesUp;

// Creating a React App with Two Child Components
const InputComponet =({inputValue, setInputValue})=>{
     // const [inputValue, setInputValue] = useState("") // child componet not sher each outher but only pass data using parent componert // c1 > parent (passing data by a propes) > c2 (ok) // c1 >< c2 (not ok) // this ressan useState use in parent // by a propes // propes meins propate atribut
     return( 
          <>
          <input type='text' placeholder='Enter Your Name'
          value={inputValue}
          // {/**which valu we store and this is now contorl element reat is contorl now*/} 
          onChange={(e) => setInputValue(e.target.value)} 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></input>
          </>
     )
}

// inputValue get
// const DisplayComponent = ({inputValue}) =>{
//      return (
//           <p>The current input valu is: {inputValue}</p>
//      )
// }

const DisplayComponent = ({ inputValue }) => {
  return (
    <p className="text-lg text-gray-700 text-center">
      The current input value is:{" "}
      <span className="font-semibold text-blue-600">{inputValue || "___"}</span>
    </p>
  );
};

/// Lifting State Up in React: A Complete Guide

