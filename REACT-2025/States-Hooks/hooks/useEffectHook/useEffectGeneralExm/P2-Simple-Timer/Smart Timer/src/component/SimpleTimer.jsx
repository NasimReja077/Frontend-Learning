import { useEffect } from "react";
import { useState } from "react"

export const SmartTimer = () =>{
      const [seconds, setSeconds] = useState(() =>{
          return Number(localStorage.getItem("seconds")) || 0;
      });

      const [isTimeRunning, setIsTimeRunning] = useState(false);

      const [timeLaps, setTimeLaps] = useState(() =>{
          return JSON.parse(localStorage.getItem("laps")) || [];
      });

      useEffect(() =>{
          let timeInterval;
          if(isTimeRunning){
               timeInterval = setInterval(() =>{
                    setSeconds((prev) => prev + 1);
               }, 1000);
          }
          return () => clearInterval(timeInterval);
      }, [isTimeRunning]);

      useEffect(() =>{
          localStorage.setItem("seconds", seconds);
      },[seconds]);

      useEffect(() =>{
          localStorage.setItem("laps", JSON.stringify(timeLaps));
      })

      const timeFormat = (totalSeconds) => {
          const min = Math.floor(totalSeconds / 10);
          const sec = totalSeconds % 60;
          return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
      };

      const handleStartStope = () => setIsTimeRunning((prev) => !prev);
      const handleReset = () =>{
          setIsTimeRunning(false)
          setSeconds(0)
          setTimeLaps([])
          localStorage.removeItem("Seconds")
          localStorage.removeItem("timeLaps")
      };

      const handleTimeLap = () => setTimeLaps((prev) => [...prev, seconds]);


     return(
          <div className="flex flex-column items-center mt-10 p-6 rounded-xl shadow-md bg-white max-w-sm max-auto ">
               <h2 className="text-2xl font-bold mb-4">⏱ Smart Timer</h2>
               <p className="text-4xl font-mono text-blue-600 mb-4">{timeFormat(seconds)}</p>
               <div className="flex gap-4 mb-4">
                    <button 
                    onClick={handleStartStope}
                    className={`px-4 py-2 rounded-lg font-semibold text-white ${
                         isTimeRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                    }`}
                    >
                         {isTimeRunning ? "Stop" : "Start"}
                    </button>
                    <button  
                    className="px-4 py-2 rounded-lg font-semibold bg-gray-400 hover:bg-gray-500 text-white"
                    onClick={handleReset}>
                         Reset
                    </button>
                    <button
                    onClick={handleTimeLap}
                    disabled={!isTimeRunning}
                    className={`px-4 py-2 rounded-lg font-semibold 
                         ${ 
                              isTimeRunning 
                              ? "bg-blue-500 hover:bg-blue-600 text-white" : 
                              "bg-gray-300 text-gray-600 cursor-not-allowed"
                         }`}
                    >
                         Time Lap
                    </button>
               </div>
               {/**Time Lap */}
               <div className="w-full">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Time Lap Chack Pointe</h3>
                    <ul className="space-y-1">
                         {timeLaps.length === 0 ? (
                              <p className="text-gray-500 text-sm">No laps yet.</p>
                         ) : (timeLaps.map((timeLaps, index) => (
                              <li key={index} className="text-gray-700 text-sm font-mono bg-gray-100 px-3 py-1 rounded-lg">
                                   Time Lap {index + 1} : {timeFormat(timeLaps)}
                              </li>
                         )))}
                         
                    </ul>

               </div>
          </div>
     )
}