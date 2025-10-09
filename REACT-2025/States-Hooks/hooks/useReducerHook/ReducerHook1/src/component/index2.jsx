import { useReducer } from "react"

export const ReducerComp = () => {
     const reducer = (state, action) => {
          console.log(state, action);
          if(action.type === "Increment"){
               return state + 1;
          }
          if(action.type === "Decrement"){
               return state - 1;
          }
     }; // get 2 element undefined and funtion
     // const [count, setCount] =  useState(0);
     const [count, dispatch] = useReducer(reducer, 0); // useReducer return an array and 2 elent [carent setate, dispatch funtion ]
     console.log(useReducer(reducer, 0));
     return(
          <div className="p-4 h-lvh flex flex-col justify-center items-center">
               <h1>Hook{count}</h1>
               <button onClick={() => dispatch({type:"Increment"})}>Increment</button>
               <button onClick={() => dispatch({type:"Decrement"})}>Decrement</button>
          </div>
     );
};
// in onClick call dispatch in dispatch passing obj {type:key}
// dispatch will send and action to the Reducer function