/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      const { search } = action.payload;
      state.search = search;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
