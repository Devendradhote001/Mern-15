import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import cartSlice from "../features/cartSlice";
import toggleSlice from "../features/toggleSlice";

export let store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    toggle: toggleSlice,
  },
});
