//  Best Practices for Using the useReducer Hook in React 19: Optimize Your State


import { useReducer } from "react"

export const ReducerComp2 = () => {
     const initialState = {
          count: 0,
          inc: 2,
          dec: 2,
     };
     const reducer = (state, action) => {
          console.log(state, action);
          switch(action.type){
               case "Increment":
                    return {
                         ...state,
                         count: state.count + 1}
               case "Decrement":
                    return {
                         ...state,
                         count: state.count - 1}
               case "Reset":
                    return{
                         ...state,
                         count: 0}
               default:
                    return state;
          }
     }; 
     const [state, dispatch] = useReducer(reducer, initialState); 
     console.log(useReducer(reducer, 0));
     return(
          <div className="p-4 h-lvh flex flex-col justify-center items-center">
               <h1>Hook{state.count}</h1>
               <button onClick={() => dispatch({type:"Increment"})}>Increment</button>
               <button onClick={() => dispatch({type:"Decrement"})}>Decrement</button>
               <button onClick={() => dispatch({type:"Reset"})}>All-Reset</button>
          </div>
     );
};
