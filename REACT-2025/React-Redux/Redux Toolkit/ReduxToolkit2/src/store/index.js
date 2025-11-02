//Redux Store — The Heart of Redux
//The Store is a central place where all your application’s state lives.
//👉 It holds the global state and provides methods to read, update, and subscribe to state changes.
//The main Redux store is configured and created.Redux Toolkit to set up the central state container.

import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/UserSlice";

// Create Store
const store = configureStore({
     // Root reducers // combine reducers
     reducer: {
          users: userSlice, // The 'users' key holds the state managed by UserSlice.js 
          // [ /* array of user objects from initialState */ ]
     },
});

export default store;

// click -> store -> ckack slice part -> go slice reducers -> go action creator
// configureStore accepts a single configuration object parameter,
// reducer, middleware
/**
 * Core Concepts
configureStore: RTK's wrapper around the standard Redux createStore. It enforces best practices by automatically combining reducers, adding middleware, and setting up the Redux DevTools Extension.

Root Reducer: The reducer object you pass to configureStore acts as the root reducer for the entire application. It maps a key (like users) to the reducer function responsible for managing that part of the state (the userSlice reducer).

In short, this code is the master blueprint for your application's global state management.
 */
