import React, { useState } from 'react'

export const Ex9TextColorChanger = () => {
     const [color, setColor] = useState("text-black");
     const [bgColor, setBgColor] = useState("#ffc0cb");

     // Array of Tailwind color classes
     const colors = [
          "text-red-500",
          "text-blue-500",
          "text-green-500",
          "text-yellow-500",
          "text-purple-500",
          "text-pink-500",
     ];
     const changeColor = () =>{
         const randomColorIndex = Math.floor(Math.random()* colors.length);
         setColor(colors[randomColorIndex]); 
     }
     const randomBgColor = () =>{
          // generate a full 6-digit hex and pad with zeros if necessary
          const bgColorBoxs = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
          setBgColor(bgColorBoxs);

     }
  return (
    // apply background color via inline style
    <div className={`flex flex-col items-center justify-center gap-6`} style={{ backgroundColor: bgColor }}>
     <h1>Background Color Changer</h1>
      <p>Click the button to change the background color!</p>
      <h1 className={`text-3xl font-bold transition duration-300 ${color}`}>Click the button to change my color!</h1>
      <button onClick={changeColor} className='cursor-pointer'>Change TextColor</button>
      <button onClick={randomBgColor} className='cursor-pointer'>Change BG-Color</button>
    </div>
  )
}
