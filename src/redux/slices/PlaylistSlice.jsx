/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: [],
  playlistId: "",
  playlistName: "",
  playlistDescription: "",
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      const { playlist } = action.payload;
      state.playlist = playlist;
    },
    setPlaylistId: (state, action) => {
      const { playlistId } = action.payload;
      state.playlistId = playlistId;
    },
    setPlaylistName: (state, action) => {
      const { playlistName } = action.payload;
      state.playlistName = playlistName;
    },
    setPlaylistDescription: (state, action) => {
      const { playlistDescription } = action.payload;
      state.playlistDescription = playlistDescription;
    },

  },
});

export const {
  setPlaylist, setPlaylistId, setPlaylistName, setPlaylistDescription,
} = playlistSlice.actions;

export default playlistSlice.reducer;
