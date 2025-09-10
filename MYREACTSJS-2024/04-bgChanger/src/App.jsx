import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2" style={{ marginLeft: "35%" }}>
        <div className="mr-10 flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-10 py-7 rounded-full text-white shadow-log  " style={{backgroundColor: "red"}}>red</button>

          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-10 py-7 rounded-full text-white shadow-log " style={{backgroundColor: "blue"}}>blue</button>

          <button
          onClick={() => setColor("green")}
          className="outline-none px-10 py-7 rounded-full text-white shadow-log " style={{backgroundColor: "green"}}>green</button>
        </div>
      </div>
    </div>
  );
}

export default App
