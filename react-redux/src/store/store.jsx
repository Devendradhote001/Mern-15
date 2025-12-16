import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";

export let store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
