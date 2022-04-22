/* eslint-disable import/extensions */
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import Tokenreducer from "./slices/TokenSlice";
import Searchreducer from "./slices/SearchSlice";
import Songreducer from "./slices/SongSlice";

const store = configureStore({
  reducer: {
    token: Tokenreducer,
    search: Searchreducer,
    song: Songreducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => { return useDispatch<AppDispatch>(); };
export default store;
