import { useState } from 'react'
import './App.css'

function App() {
  // const [valu, funtion] = useState(defolt valu )
  // Use state to manage the counter value.
  const[Counter, setCounter] = useState(10) // setCounter name any no error  it is all so funtion 
  // let Counter = 20
  // Function to increase the counter value.
  const addValue =()=>{
    // console.log("Value add", Math.random());
    console.log("clicked", Counter);
    // Counter = Counter + 1
    setCounter(Counter + 1)

    // You could add a limit here, for example:
    // if (Counter < 30){
    //   setCounter(Counter + 1);
    // }

  }
   // Function to decrease the counter value.
  const removeValue =()=>{
    if(Counter > 0){
      setCounter(Counter -1)
    };
    // setCounter(Counter - 1)
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