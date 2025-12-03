import { useActionState } from "react"

const App =()=> {
  const handleLogin = (prevState, formData)=>{
    let name = formData.get('name');
    let password = formData.get('password');
    // console.log(name,password);
    let regex = /^[A-Z0-9]+$/i;

    if( !name || name.length > 5){
      return { 
        error: "Name can not be empty or Name shoild not contain more than 5 charactes", 
        name, password
      }
    }else if(!regex.test(password)){
      return { error: "Password can container only numbers and alphabets", name, password}
    }else{
      return {
        message: "Login Done", name, password
      }
    }
    // console.log(name, password)
  }
  const [data, action] = useActionState(handleLogin);
  // console.log(data);
  return (
    <div>
      <h1>Validation with useActionState</h1>
      {data?.message && <samp style={{color:'green'}}>{data?.message}</samp>}
      {data?.error && <span style={{color:'red'}}>{data?.error}</span>}
      <form action={action}>
        <input type="text" defaultValue={data?.name} name="name" placeholder="enter name" />
      <br /><br />
      <input type="text" defaultValue={data?.password} name="password" placeholder="enter password" />
      <br /><br />
      <button disabled={data?.error}>Login</button>
      </form>
    </div>
  )
}

export default App