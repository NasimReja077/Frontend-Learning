// store / slices / cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({ // createSlice features is - > state it's directly mutating the state object. 
  name: "cart",
  initialState,
  reducers: { // pure function // no sid effact // work when state change
    add(state, action){
      // redux 
      // return [...state, action.payload] -> retun new state create new array

      state.push(action.payload) // state == initialState // state.push minse state direact mutate  // This looks like a mutation, but Immer handles immutability // redx say not Direct modification

    },
    remove(state, action){
      // state = state.filter((item) => item.id !== action.payload);
      return state.filter((item) => item.id !== action.payload);
    },
  },
})

export const { add, remove } = cartSlice.actions; // export actions
//old {type: "add/cart", payload: 1}
export default cartSlice.reducer; // export reducer

