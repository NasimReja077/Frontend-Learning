import { useState } from 'react'
import './App.css'

function App() {
  const[Counter, setCounter] = useState(10)
  // let Counter = 20
  const addValue =()=>{
    // console.log("Value add", Math.random());
    console.log("clicked", Counter);
    // Counter = Counter + 1
    setCounter(Counter + 1)
  }
  const removeValue =()=>{
    setCounter(Counter - 1)
  }
  return (
    <>
    <h1>My Love is Codeing</h1>
    <h2>MY Counter Value: {Counter}</h2>
    <button onClick={addValue}>Add value : {Counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    <p>footer : {Counter}</p>
    </>
  )
}

export default App

/*
function increment(){
  if(counter + 1 > 20){
    alert("Limit exceed")
  } else {
    setCounter(counter+1)
    console.log(counter);
  }
}

function decrement(){
  if(counter-1 < 0){
    alert("Value cannot be negetive")
  } else {
    setCounter(counter-1)
    console.log(counter)
  }
}*/