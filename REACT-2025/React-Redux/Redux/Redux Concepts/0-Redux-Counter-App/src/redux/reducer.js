// Reducers - A Reducer is a pure function that takes the current state and an action, then returns a new state.
// Reducers -Update state -switch(action.type
// Reducers = pure functions that compute new state.  

// Reducer — “How should state change?” => Redux passes that action to the reducer function.

// Reducer receives:
// Current state, Dispatched action
// Then it returns a new state (not modify the old one).

import { combineReducers } from "redux";


// Initial state
// Counter reducer (old)
const counterInitialState = {
      count: 0 
};

// Reducer function
export const counterReducer = (state = counterInitialState, action) =>{
     switch (action.type){
          case "INCREMENT":
               return {...state, count: state.count + 1};
          case "DECREMENT":
               return {...state, count: state.count - 1};
          case "RESET":
               return { ...state, count: 0 };
          default:
               return state; // Always return current state for unknown actions
     }
}

// User reducer (new for API)
const userInitialState = {
  loading: false,
  users: [],
  error: null
};

export const userReducer = (state = userInitialState, action) => {
     switch (action.type){
          case "FETCH_USERS_REQUEST":
               return { ...state, loading: true };
          case "FETCH_USERS_SUCCESS":
               return { loading: false, users: action.payload, error: null };
          case "FETCH_USERS_FAILURE":
               return { loading: false, users: [], error: action.payload };
          default:
               return state;
     }
}

// Combine reducers
export const rootReducer = combineReducers({
  counter: counterReducer,
  userData: userReducer
});

/**
 * combineReducers() merges multiple reducers into one main reducer function.
 * Each key (counter, userData) becomes a separate state slice in your Redux store.

 * So your global Redux state tree will look like this 👇
{
  counter: {
    count: 0
  },
  userData: {
    loading: false,
    users: [],
    error: null
  }
}
 */