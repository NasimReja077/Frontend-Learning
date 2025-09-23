import React, { useState } from "react";

export const Counter = () =>{
     // console.log(useState(1));
     const [count,setCount] = useState(0);

     const handleINcrement = () => {
          setCount(count + 1);
          console.log("inner", count);
     }
     console.log("outer", count); // Fixed: Changed console() to console.log()
     return(
          <div className="container mx-auto px-4 text-center w-56 h-[200px] border-2 shadow-2xl m-3.5 p-5 align-middle">
               <h1>UseState Hook!</h1>
               <br />
               <p className="pb-5">{count}</p> 
               {/* <button className="bg-blue-500 hover:bg-blue-700 text-white front-bold py-2 px-4 rounded" onClick={() =>setCount(count + 1)}>Increment</button> */}
               <button className="bg-blue-500 hover:bg-blue-700 text-white front-bold py-2 px-4 rounded" onClick={handleINcrement}>Increment</button>
          </div>
     );
};