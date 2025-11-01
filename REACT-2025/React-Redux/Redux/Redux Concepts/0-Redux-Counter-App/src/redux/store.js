// Store - The Store is the single source of truth in Redux.
// It holds the entire state tree of your application.
// You can access state using store.getState()
// Update it using store.dispatch(action)
// Listen for changes using store.subscribe(listener)
// Holds app state

// Redux Logger is a middleware that logs every action and the state changes in your console — useful for debugging.

// Redux Thunk is middleware that lets you write async actions (like API calls).Without it, Redux actions must be synchronous.

import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { counterReducer } from "./reducer";
import { rootReducer } from "./reducer";
import logger from "redux-logger"; // middleware for debugging
import { thunk } from "redux-thunk";
// Create store with reducer and middleware
export const store = createStore(
     // counterReducer, 
     rootReducer,
     applyMiddleware(thunk,logger)
);

/**
 * What happens here:
createStore() creates a Redux store.
applyMiddleware(logger) adds the logger middleware.
The logger automatically logs every action and state change in your console.
 */