import { useId } from "react"

// this lets you avoid calling useId for every single element that needs a unique id.

export const UseIdHooks = () =>{
     
     const id = useId();
     
     return (
          <form>
               <div>
                    <label htmlFor={id + "usernameId"}>username</label>
                    <input type="text" name="name" id={id + "usernameId" }/>
               </div>
               <div>
                    <label htmlFor={id + "passwordId"}>Password:</label>
                    <input type="password" name="password" id={id + "passwordId"}/>
               </div>
               <div>
                    <label htmlFor={id + "emailid"}>Email</label>
                    <input type="email" name="email" id={id + "emailid"} />
               </div>
               <button type="submit">Submit</button>
          </form>
     )
}


/**  type - 1
 
export const UseIdHooks = () =>{
     const usernameId = useId();
     const emailid = useId();
     const passwordId = useId();
     
     return (
          <form>
               <div>
                    <label htmlFor={usernameId}>username</label>
                    <input type="text" name="name" id={usernameId}/>
               </div>
               <div>
                    <label htmlFor={passwordId}>Password:</label>
                    <input type="password" name="password" id={passwordId}/>
               </div>
               <div>
                    <label htmlFor={emailid}>Email</label>
                    <input type="email" name="email" id={emailid} />
               </div>
               <button type="submit">Submit</button>
          </form>
     )
}
*/


/**export const UseIdHooks = () =>{
     return (
          <form>
               <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name="name" id="username"/>
               </div>
               <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <button type="submit">Submit</button>
               </div>
          </form>
     )
}*/