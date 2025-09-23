import { useState } from "react"

export const LoginFrom = () => {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");

     const handleFromSubmit =(e)=>{
          e.preventDefault();
          const loginData = {
               // username:username, // es6 rule by not neet to writh 2 time
               // password:password
               username,
               password,
          };
          console.log(loginData)
     }
     return(
          <div className="container">
               <div className="">
                    <h1>Login Form</h1>
                    <form onSubmit={handleFromSubmit}>
                         <label htmlFor="username">UserName</label>
                         <input type="text" name="username" required autoCapitalize="off" value={username} onChange={(e) => setUsername(e.target.value)}/>

                         <label htmlFor="pasword">Password</label>
                         <input type="password" name="password" required autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />

                         <button type="submit">Login</button>
                    </form>
               </div>
          </div>
     )
}