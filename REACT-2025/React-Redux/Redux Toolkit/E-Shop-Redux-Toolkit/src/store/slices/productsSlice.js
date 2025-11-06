// store / slices / productsSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSE = Object.freeze({ // read only // immer obj
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
})

const productSlice = createSlice({ 
  name: 'product',
    initialState: {
        data: [],
        status: STATUSE.IDLE,
    },
    reducers: {
        // setProducts(state, action) {
        //   // do not do this never
        //   const res = await fetch('https://fakestoreapi.com/products'); // sideeffact
        //   // any asynchronous calls not call in reducers , reducers call synchronous way , all are pure funtion mines no side effact // use tuncks
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },

    extraReducers: (builder) => {
      builder
      .addCase(fetchProducts.pending, (state) => {
      state.status = STATUSE.LOADING;
    })
      .addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSE.IDLE;
    })
      .addCase(fetchProducts.rejected, (state) => {
      state.status = STATUSE.ERROR;
    });
}
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer; 


export const fetchProducts = createAsyncThunk("products/fetch", async()=>{
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
});


// THUNKS
// export function fetchProducts(){ // thanks is funtion , In this funtion call anoter funtion this con
//   return async function fetchProductThunk(dispatch, getState) { // params
//     // getState is get carrent state
//     dispatch(setStatus(STATUSE.LOADING));
//     try {
//       const res = await fetch('https://fakestoreapi.com/products');
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUSE.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSE.ERROR));
//     }
//   }
// }

// Thunk  -> 2 type 
// The Worlsd "thunk" is a programing term that means "a piece of code that does some delayed work."
// Rather than execute some logic now, we can write a function body or code that can used to perform the work later