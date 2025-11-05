// store/slices/wishListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: [],
  reducers: {
    addWishListItem(state, action) {
      const { productId } = action.payload;
      if (!state.includes(productId)) {
        state.push(productId);
      }
    },
    removeWishListItem(state, action) {
      const { productId } = action.payload;
      return state.filter((id) => id !== productId);
    },
  },
});

export const { addWishListItem, removeWishListItem } = wishListSlice.actions;
export default wishListSlice.reducer;