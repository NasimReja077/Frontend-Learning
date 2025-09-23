import React, { useState } from 'react'
// className="bg-blue-500 hover:bg-blue-700 text-white front-bold py-2 px-4 rounded"


export const AdvancedCounterChallenge =() => {
     const [count, setCount] = useState(0);
     const [step, setStep] = useState(0);
     const handleINcrement = () =>{
          setCount(count + step);
     }
     const handleDEcrement = () =>{
          setCount(count - step);
     }
     const handleAllReset = () => {
          setCount("0");
     }
     return(
           <div className="flex justify-conter items-center min-h-screen bg-gray-100">
               <div className='container mx-auto px-6 py-8 text-center w-72 h-auto border-2 border-gray-200 shadow-2xl bg-white'>
                    <h1 className='text-xl font-bold text-indigo-600 mb-4'>UseState Advanced Counter Challenge</h1>
               <p className="pb-5 text-lg">Count:{" "} 
                    <span className='font-bold text-2xl text-green-600'>{count}</span></p> 
               <div className='mb-6'>
                    <label htmlFor="step" className='block text-sm font-medium text-gray-700 mb-2'>
                         Step:
                         <input type="number" 
                         form='step' 
                         value={step}
                         className='border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none'
                         onChange={(e)=>setStep(Number(e.target.value))}
                         />
                    </label>
               </div>
               <div className='grid grid-rows-3 gap-3'>
                    <button 
                    onClick={handleINcrement} 
                    disabled={count >= 100}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                         Increment
                    </button>
                    <button 
                    onClick={handleDEcrement} 
                    disabled={count <= 0}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >Decrement
                    </button>
                    <button 
                    onClick={handleAllReset}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
                    >All Reset
                    </button>
               </div>
               </div>
          </div>
     )
}

 
