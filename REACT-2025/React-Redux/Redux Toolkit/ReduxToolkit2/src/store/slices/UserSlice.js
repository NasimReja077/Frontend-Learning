/* eslint-disable no-unused-vars */
//The basic structure of a Redux Toolkit (RTK) slice created using the createSlice function. 
//It defines the logic for managing a part of application's global state related to users.

import { createSlice } from "@reduxjs/toolkit"; // used to define the slice.

const UserSlices = createSlice({
     name: "user",
     initialState: [],                   //array
     reducers: {                        //big reduce
          //action creator
          addUser(state, acton){ 
               //micro reducer
               state.push(acton.payload); // in stata data update
               // console.log(acton.payload); 
          },
          removeUser(state, acton){
               // console.log("hi" + acton.payload)
               // state.pop(acton.payload)
               // let userIndexNum = state.indexOf(acton.payload)
               // state.splice(userIndexNum, 1)
               state.splice(acton.payload, 1)
          },
          clearAllUser(state, acton){
               // return state = [] // assign empty array // but all clear
               return []
          },
     },
})

// console.log(UserSlices.actions); // give action creator 

export default UserSlices.reducer;
export const {addUser, removeUser, clearAllUser} = UserSlices.actions; // get

/**
 * UserSlices: This is the variable that holds the return value of createSlice(). It contains the generated reducer function and the action creators.
 
 * name: "user": This is a unique string that names the slice. RTK uses this name to automatically generate action types (e.g., "user/addUser", "user/removeUser").

initialState: []: This sets the initial state for this slice of the Redux store. In this case, it starts as an empty array (presumably to hold user objects).

reducers: { ... }: This is an object where you define your "micro-reducers"—functions that update the state.

addUser(state, action), removeUser(state, action), deleteUsers(state, action): These functions are automatically converted into action creators by createSlice. When these actions are dispatched, the corresponding function will be called.

Crucial RTK Feature: Inside these reducers, you can write "mutating" logic (e.g., state.push(action.payload)). RTK uses the Immer library internally, which detects these "mutations" and automatically translates them into the immutable updates required by Redux. You don't have to manually return a new state object ({...state, ...}).
 */
/**
 *createSlice is the core API of Redux Toolkit (RTK) that automatically generates:Action creators, Action types, A reducer function. all from a single object with minimal boilerplate.createSlice() is a helper function provided by Redux Toolkit
 */

// Reducers - A Reducer is a pure function that takes the current state and an action, then returns a new state.
// Reducers -Update state -switch(action.type
// Reducers = pure functions that compute new state.  

// Reducer — “How should state change?” => Redux passes that action to the reducer function.

// Reducer receives:
// Current state, Dispatched action
// Then it returns a new state (not modify the old one).


// The indexOf() method in JavaScript is used to find the first occurrence of a specified value within a string or an array. It returns the index (position) of the first match, or -1 if the value is not found. 
// For Strings:
// The String.prototype.indexOf() method searches for a substring within a string.
// JavaScript

// const str = "Hello World";
// const index = str.indexOf("World"); // Returns 6
// const notFoundIndex = str.indexOf("JavaScript"); // Returns -1