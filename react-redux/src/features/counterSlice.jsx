import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addValue: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});

export const { increment, decrement, addValue } = counterSlice.actions;

export default counterSlice.reducer;
