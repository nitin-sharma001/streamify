import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import moviesSlice from "./Slices/moviesSlice";
import tvSlice from "./Slices/tvSlice";
import mediaPlayerSlice from "./Slices/mediaPlayerSlice";
import searchSlice from "./Slices/searchSlice";

const Store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    tvs: tvSlice,
    media: mediaPlayerSlice,
    search: searchSlice,
  },
});

export default Store;
