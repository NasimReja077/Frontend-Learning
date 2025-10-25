import { useState } from "react"
import { ChildComponent } from "./ChildComponent";

export const ToggleVisibility = () =>{
     const [isVisible, setIsVisible] = useState(false);
     const togleHandler = () => setIsVisible(!isVisible);


     return (
          <div className="flex flex-column items-center e-justify-center min-h-screen bg-gray-100 p-6">
               <h1 className="text-3xl font-bold mb-6 text-blue-700">
                    🔄 Toggle Component Visibility
               </h1>
               <h1>ChildComponent</h1>
               <button 
               onClick={togleHandler}
               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mb-6 transition-all">
                    {isVisible ? "Hide child" : "Show Child"}
               </button>

               {isVisible && <ChildComponent />}
          </div>

     )
}