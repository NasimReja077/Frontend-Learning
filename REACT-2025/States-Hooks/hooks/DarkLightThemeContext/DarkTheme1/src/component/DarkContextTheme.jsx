/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useState } from "react";

//1> Create the Context - Context helps share data (like theme) across components without prop drilling
// createContext - not return normal vareable alwas return component
export const ThemeContext = createContext(); 

//2> Create the Provider Wrapper / component - Provider component that holds the theme state and toggle function
export const ThemeProvider = ({children}) => {
     const [theme, setTheme] = useState("dark");

     const handleToggleTheme = () => { // Toggle between dark and light themes
          return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
     }
          
     
//Provider is prototype //pass as a obj and {{theme:theme}} key:value and key and value are same then not 2 time write 

     return (
          <ThemeContext.Provider value={{theme, handleToggleTheme}}>
               {children}
          </ThemeContext.Provider>
     );
};

//----------------

// Consumer Component - This component uses the ThemeContext values
export const DarkContextTheme = () => {
     // Access theme and toggle function from the use hook
     const { theme, handleToggleTheme } = use(ThemeContext);

     return (
          <div 
          className={`p-4 h-lvh flex flex-col justify-center items-center 
          ${theme === "dark" ? "bg-gray-900" : "bg-blue-300"}`
          }>
               <h1 
               className={`my-4 text-5xl 
               ${theme === "light" ? "text-gray-800" : "text-white"}`
               }> 
               Dark Light Mode Using Context API 🌗
               </h1>
               <p 
               className={`my-4 text-2xl font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                    Hello!! My React V19 Fan Dev
               </p>
               <button 
               onClick={handleToggleTheme} 
               className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl mt-4 p-4 cursor-pointer">
                    {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
               </button>
          </div>
     )
}