// . Implement a counter app with increment and decrement buttons.

import React, { Children, useState } from 'react'

// Reusable Button Component
// CounterButton is Reusable Component // hear We are sending the function from the parent with a prop:
const CounterButton = ({ onClick, disabled, children, color}) => {
  const baseStyle = "text-white font-bold py-2 px-4 rounded-lg transition duration-200";
  const colors = {// colors is object.// normally use colors.green
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
  };

  return (
    <button
    onClick={onClick} // Then the handleincrement function is in the regional prop.//  Just forwarding between buttons: // = when button clicked, call that function. // passing Parent to child
    disabled={disabled}
    className={`${baseStyle} ${colors[color]} disabled:opacity-50 disabled:cursor-not-allowed`} // dynamic value fetch from object //${colors[color]} but color is dynamic prop then use [], when key is dynamic then use square bracket notation // (variable theke value ashe).
    >
      {children}
    </button>
  )
}


export const Ex2Counter2 = () => {
     const [folowerCount, setFolowerCount] = useState(0);

     /**
      * setFollowerCount(followerCount + 1);
      * It will update the value, but there is a small risk ⚠️:
      * React state updates are asynchronous (they don’t happen instantly).So if multiple updates happen quickly, React might use the old value instead of the latest one.
      * ============
      * Functional Update Form--
      * To fix this, React lets us use a function inside setState:
      * setFollowerCount((prev) => prev + 1);
      * Here:
      *     prev means the previous value of state (the most updated one at that moment).
      *     React guarantees prev is correct, even if updates happen back-to-back.
      */

     const handleINcrement =()=>{
      setFolowerCount((prev) => (prev < 20 ? prev + 1 : prev));
     } // "Check if less than 20, then add 1, else no change."
     const handleDEcrement = () =>{
      setFolowerCount((prev) => (prev > 0 ? prev - 1 : prev));
     }
     const handleAllReset = () => setFolowerCount(0);
     
     
     // Dynamic message
     const getMessage = () => {
      if(folowerCount === 20) return "MAX Limit reached";
      if(folowerCount === 0) return "MIN Limit reached";
      return " Keep Going";
     };

     const getMessageColor = () => {
      if(folowerCount === 20) return "text-red-500";
      if(folowerCount === 0) return "text-yellow-600";
      return "text-blue-600";
     };

     return (
     
     <div className='flex justify-center items-center bg-gray-300 flex-col gap-6'>
      
      
      <p className="text-lg">
        Folower Count:{" "}
        <span className='font-bold text-2xl text-green-600'>
          {folowerCount}
        </span>
      </p>
      
      
      <p className={`text-md font-semibold ${getMessageColor}`}>
        {getMessage()}
      </p>

     
      <div className='flex gap-4'>
        <CounterButton

        onClick={handleINcrement}
        disabled={folowerCount >= 20}
        color = "green"
        >
           Folower Increment
        </CounterButton>

        <CounterButton
        
        onClick={handleDEcrement}
        disabled={folowerCount <= 0}
        color = "blue"
        >
           Folower Decrement
        </CounterButton>

        <CounterButton
        onClick={handleAllReset}
        color = "red"
        >
           All Reset
        </CounterButton>
      </div>
    </div>
  )
}
