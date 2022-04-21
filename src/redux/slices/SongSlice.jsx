/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  data: [],
  isLoading: false,
  isError: false,
  selected: [],
  uri: "",

};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setData: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
    setLoading: (state, action) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
    setError: (state, action) => {
      const { isError } = action.payload;
      state.isError = isError;
    },
    setSelected: (state, action) => {
      const { selected } = action.payload;
      state.selected = selected;
    },
    handleSongSelected: (state, action) => {
      const { uri } = action.payload;
      state.selected = [...state.selected, uri];
    },
    handleSongDeselected: (state, action) => {
      const { uri } = action.payload;
      state.selected = state.selected.filter((item) => { return item !== uri; });
    },

  },
});

export const {
  setData, setLoading, setError, setSelected, handleSongSelected, handleSongDeselected,
} = songSlice.actions;
export default songSlice.reducer;
