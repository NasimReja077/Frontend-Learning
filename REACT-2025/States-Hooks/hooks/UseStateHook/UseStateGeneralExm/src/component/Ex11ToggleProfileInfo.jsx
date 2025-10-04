import React, { useState } from 'react'

export const Ex11ToggleProfileInfo = () => {
     const [showInfo, setShowInfo] = useState(false);
     const toggleInfo = () =>{
          setShowInfo((prev) => !prev); // If it’s true → make it false. // If it’s false → make it true.
     }
  return (
    <div className='flex flex-col items-center justify-center bg-gray-400 gap-6'>
      <h1 className="text-2xl font-bold text-gray-800">Profile Info</h1>
      {showInfo && (
          <p className="text-gray-700 max-w-md text-center leading-relaxed">
          👋 Hi, I am <span className="font-bold">Nasim Reja Mondal</span>.  
          I am a Software Engineer specializing in Frontend Development using
          React.js, Tailwind CSS, and MERN stack. I love building clean, 
          scalable, and interactive web applications.
        </p>
      )}
      <button onClick={toggleInfo} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition">
          {showInfo ? "Hide Info" : "Show Info"}
      </button>
    </div>
  )
}

