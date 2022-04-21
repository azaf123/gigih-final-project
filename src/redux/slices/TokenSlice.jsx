/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accesstoken: localStorage.getItem("token") ?? "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const { token } = action.payload;
      state.accesstoken = token;
      localStorage.setItem("token", token);
    },
    setRemoveToken: (state) => {
      state.accesstoken = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, setRemoveToken } = tokenSlice.actions;
export default tokenSlice.reducer;
