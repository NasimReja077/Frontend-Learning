import React, { useState } from 'react'

export const Ex2Counter = () => {
     const [folowerCount, setFolowerCount] = useState(0);

     const handleINcrement =()=>{
      setFolowerCount(folowerCount + 1);
     }
     const handleDEcrement = () =>{
      setFolowerCount(folowerCount - 1)
     }
     const handleAllReset = () =>{
      setFolowerCount(0);
     }
     
     // Dynamic message
     const getMessage = () => {
      if(folowerCount === 20) return "MAX Limit reached";
      if(folowerCount === 0) return "MIN Limit reached";
      return " Keep Going";
     };

     return (
     <div className='flex justify-center items-center bg-gray-400 flex-col gap-6'>

      <p className="text-lg">
        Folower Count:{" "}
        <span className='font-bold text-2xl text-green-600'>
          {folowerCount}
        </span>
      </p>
      <p className={`text-md font-semibold ${
        folowerCount === 20 ? "text-red-500" : folowerCount === 0 ? "text-yellow-600" : "text-blue-600" 
      }`}>
        {getMessage()}
      </p>
      <div className='grid grid-cols-3 gap-3 justify-between'>
        <button 
        onClick={handleINcrement} 
        disabled={folowerCount >= 20} 
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
          Folower Increment
        </button>

        <button 
        onClick={handleDEcrement} 
        disabled={folowerCount <= 0} 
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
          Folower Decrement
        </button>

        <button 
        onClick={handleAllReset} 
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
          All Reset
        </button>
      </div>
    </div>
  )
}
