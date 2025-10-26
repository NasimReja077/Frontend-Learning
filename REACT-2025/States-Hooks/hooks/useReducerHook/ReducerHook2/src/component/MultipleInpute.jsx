import React from 'react'
import { useReducer } from 'react'

const emptyData={
     name: "",
     password: "",
     email: "",
     city: "",
     address:""
}

/**
 * Reducer function to manage multiple input state changes
 * @param {Object} data - Current state object containing input values
 * @param {Object} action - Action object containing type and payload
 * @returns {Object} New state object after applying the action
 */
const reducer = (data, action) => {
     // console.log(action);
     return {
          ...data, [action.type]:action.val
     }
}
export const MultipleInpute =()=> {
     const [state,dispatch]=useReducer(reducer, emptyData)
     console.log(state)
  return (
    <div>
      <h1>Use Reducer</h1>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:"name"})} placeholder="enter name" />
      <br /><br />
      <input type="password" onChange={(event)=>dispatch({val:event.target.value, type:"password"})} placeholder="enter password" />
      <br /><br />
      <input type="email" onChange={(event)=>dispatch({val:event.target.value, type:"email"})} placeholder="enter email" />
      <br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:"city"})} placeholder="enter city" />
      <br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:"address"})} placeholder="enter address" />
      <br /><br />

      <ul>
          <li>Name:{state.name}</li>
          <li>Password:{state.password}</li>
          <li>Email:{state.email}</li>
          <li>Address:{state.address}</li>
      </ul>
      <button onClick={()=>console.log(state)}>Add Details</button>
    </div>
  )
} 