import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: {
    currentSong: null,
    isPlaying: false,
  },
  reducers: {
    addSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    playAndPause: (state) => {
      if (state.isPlaying) {
        state.isPlaying = false;
        return;
      }
      state.isPlaying = true;
    },
  },
});

export const { addSong, playAndPause } = songSlice.actions;
export default songSlice.reducer;
