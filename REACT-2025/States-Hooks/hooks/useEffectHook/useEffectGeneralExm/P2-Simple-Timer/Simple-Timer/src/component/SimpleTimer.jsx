import { useEffect } from "react";
import { useState } from "react";


export const SimpleTimer = () =>{
     const [seconds, setSeconds] = useState(0);

     useEffect(() =>{
          console.log("⏳ Timer started...");

          const timeInterval = setInterval(() =>{
               setSeconds((prev) => prev + 1);
          }, 100);

          return () => {
               clearInterval(timeInterval);
               console.log("🧹 Timer stopped (cleanup done).");
          }
     }, []);
     

     return (
     <div className="flex flex-col items-center mt-10 p-6">
          <h2 className="text-2xl font-semibold mb-4">⏱ Simple Timer</h2>
          <p className="text-lg text-gray-700">
               Elapsed Time: <span className="font-bold text-blue-600">{seconds}s</span>
          </p>
     </div>
     )
}


/**
 * How It Works (Step by Step)
Mount (First Render):
     useEffect runs once because of the empty dependency array [].
     Starts an interval that updates seconds every 1 second.

Re-render (Every Second):
     setSeconds() updates the state → triggers re-render → shows updated time.

Unmount (Component Removed):
     The cleanup function runs → clearInterval(intervalId) stops the timer.
     Prevents memory leaks or unnecessary background execution.
 */