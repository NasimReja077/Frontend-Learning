import { configureStore } from "@reduxjs/toolkit";
import gitUsersReducer from "../features/gitUserSlice";

export const store = configureStore({
     reducer: {
          app: gitUsersReducer
     },

     devTools: true,
});


