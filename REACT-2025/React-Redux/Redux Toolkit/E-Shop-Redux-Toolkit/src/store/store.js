// store /store.js
import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
  reducer:{
    cart: createReducer,
    product: productsReducer,
  }
})

export default store;