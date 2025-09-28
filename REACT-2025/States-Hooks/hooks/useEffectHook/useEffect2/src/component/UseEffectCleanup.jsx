import React, { useEffect, useState } from 'react'
export const UseEffectCleanup = () => {
     const [count, setCount] = useState(0);

     useEffect(() =>{
          const timer = setInterval(() =>{
               setCount((prev) => prev + 1); // closer 
          }, 1000);
          return () => clearInterval(timer); // cleanup fun
     },[]); // creat for one time rendaring 

     // setInterval(() =>{
     //      setCount(count + 1);
     // }, 1000);
     return(
          <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400">
               <div className="bg-white shadow-2xl rounded-2xl p-8 text-center max-w-sm w-full">
                   <p className="text-lg font-semibold text-gray-700 mb-4">My Subscribers on YT</p>
                   <div className="text-6xl font-extrabold text-indigo-600 mb-4 animate-bounce">{count}</div> 
                    <h3 className="text-gray-600 text-xl font-medium">
                    subscribers <br/> 
                    <span className="text-sm text-gray-500">Realtime Counter</span>
                   </h3>
                   <button
                   onClick={() => setCount(0)}
                   className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-amber-950 shadow-2xl transition-all duration-200">Reset Counter </button>
               </div>

          </div>
     )
}
