/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// typescript
type SearchSlice = {
  search: string,
};
const initialState : SearchSlice = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action:PayloadAction<SearchSlice>) => {
      const { search } = action.payload;
      state.search = search;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
