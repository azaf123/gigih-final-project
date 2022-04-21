/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: [],
  playlistId: "",
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    setPlaylistId: (state, action) => {
      state.playlistId = action.payload;
    },
  },
});

export const { setPlaylist, setPlaylistId } = playlistSlice.actions;

export default playlistSlice.reducer;
