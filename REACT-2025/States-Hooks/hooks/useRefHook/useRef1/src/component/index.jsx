// uncontrol -> using useRef

import { useRef } from "react";


export const UseRefHok = () =>{

     // in js but react not recoment this type
     // console.log(document.getElementById("username"));
     // console.log(document.getElementById("password"));

     // using reference
     // const username = document.getElementById("username");
     // const password = document.getElementById("password");
     // console.log(username, password);

     // ----------
     const username = useRef(null);
     const password = useRef(null);
     // console.log(username);

     const handleFormSubmit = (e) => {
          e.preventDefault();
          // console.log(username.value, password.value);
          console.log(username.current.value, password.current.value );
     };
     return (
          <form onSubmit={handleFormSubmit}>
               <input type="text" id="username" ref={username}/>
               <br />
               <input type="text" id="password" ref={password}/>
               <br />
               <button>Submit</button>
          </form>
     )
}