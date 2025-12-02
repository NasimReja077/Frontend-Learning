// simple validation on input fields
import { useState } from "react"
import './App.css'

const App =()=> {
  const [name, setName] = useState('');
  const [nameErr, setNameErr]= useState('');

  const [password, setPassword] = useState("");
  const [passErr, setPasswordErr] = useState("");



  const handleName = (event) => {
    console.log(event.target.value);
    if(event.target.value.length > 5){
      setNameErr("Pleasse enter valid username. only 5 characters allowed")
    }else{
      setNameErr()
    }
  }

  const handlePassword=(event)=>{
    let regex = /^[A-Z0-9]+$/i;
    if(regex.test(event.target.value)){
      setPasswordErr()
    }else{
      setPasswordErr("Pleasse enter valid Password. only characters allowed")
    }

  }
  return (
    <div>
      <input className={nameErr?'error':''} onChange={handleName}type="text" placeholder="enter name" />
      <span className="red-color">{nameErr && nameErr}</span>
      <br /><br />
      <input className={passErr ? 'error' : ''} onChange={handlePassword} type="text" placeholder="enter password" />
      <span className="red-color" >{passErr && passErr}</span>
      <br /><br />
      <button disabled={passErr || nameErr}>Login</button>
    </div>
  )
}

export default App



// import { useState } from "react"
// import './App.css'

// const App =()=> {
//   const [name, setName] = useState('');
//   const [nameErr, setNameErr]= useState('');

//   const handleName = (event) => {
//     const value = event.target.value;
//     setName(value);
//     console.log(value);
//     if(value.length > 5){
//       setNameErr("Pleasse enter valid username. only 5 characters allowed")
//     }else{
//       setNameErr('')
//     }
//   }
//   return (
//     <div>
//       <input className={nameErr?'error':''} onChange={handleName}type="text" placeholder="enter name" />
//       <span>{nameErr && nameErr}</span>
//       <br /><br />
//       <input type="text" placeholder="enter password" />
//       <br /><br />
//       <button>Login</button>
//     </div>
//   )
// }
// export default App