import { useEffect } from "react"

export const ChildComponent = () =>{
     useEffect(() =>{
          console.log("🟢 Child Mounted");
          return () =>{
               console.log("🔴 Child Unmounted");
          }
     },[]); 
     return (
          <div className="p-4 bg-green-200 rounded-lg text-gray-800 shadow-md">
               <h2 className="text-xl font-semibold">👋 Hello! I’m the Child Component</h2>
               <p>Watch the console for mount/unmount logs.</p>
          </div>
     )
}