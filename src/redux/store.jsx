import { configureStore } from "@reduxjs/toolkit";
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
export default store;
