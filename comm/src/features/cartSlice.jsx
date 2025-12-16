import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartsItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartsItem.push(action.payload);
    },
    removeFromCart: (state) => {
      state.cartsItem = [];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
