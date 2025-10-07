import { 
     // forwardRef,
      useId, useRef } from "react"

export const ForwardRef = () => {
     const username = useRef(null);
     const password = useRef(null);

     const handelFormSubmit = (e) => {
          e.preventDefault();
     };

     return(
          <form onSubmit={handelFormSubmit}> {/**parent */}
               <BeforReact19Input label="username" ref={username} />
               <BeforReact19Input label="password" ref={password} />
               <button>Submit</button>

          </form>
     )
}

// child 
// befor React 19 use forwardRef for passing data  parent to child
// const BeforReact19Input = forwardRef((props, ref) => { 
//      const id = useId();
//      return(
//           <div>
//                <label htmlFor={id}>{props.label}</label>
//                <input type="text" ref={ref} />
//           </div>
//      )
// })

// After React 19

const BeforReact19Input = ({ label, ref }) => { 
     const id = useId();
     return(
          <div>
               <label htmlFor={id}>{label}</label>
               <input type="text" ref={ref} />
          </div>
     )
}