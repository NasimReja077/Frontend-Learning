import React, { useState } from 'react'

export const Ex16ThemeToggle = () =>{
     const [isDark, setIsDark] = useState(false);
     const toggleTheme = () => {
          setIsDark((prev) => !prev)
     }
  return (
    <div className={`flex flex-col items-center justify-center transition duration-300 ${isDark ? "bg-gray-900 text-white " : "bg-amber-200 text-gray-900 font-bold"}`}>
      <h1 className="text-3xl  mb-6">Theme Toggle Example</h1>
      <p className='mb-4 text-lg'>
          current Mode: {""}
          <span className='font-bold text-center leading-2'>
               {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </span>
      </p>
      <button
      onClick={toggleTheme}
      className={`px-6 py-2 rounded-lg font-semibold shadow-md transition duration-300 ${
          isDark
            ? "bg-yellow-400 text-black hover:bg-yellow-500"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  )
}
