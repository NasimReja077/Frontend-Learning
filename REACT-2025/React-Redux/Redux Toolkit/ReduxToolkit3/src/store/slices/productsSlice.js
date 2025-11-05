// store/slices/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { productsList } from '../productsList';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsList,
  reducers: {},
});

export default productsSlice.reducer;