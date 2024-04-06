import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvShows: null,
  topRated: null,
  arivingToday: null,
  popular: null,
  ontheAir: null,
};

const tvSlice = createSlice({
  name: "tvs",
  initialState,
  reducers: {
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
    addTopRatedShows: (state, action) => {
      state.topRated = action.payload;
    },
    addArivingToday: (state, action) => {
      state.arivingToday = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.ontheAir = action.payload;
    },
  },
});

export const {
  addTvShows,
  addTopRatedShows,
  addArivingToday,
  addOnTheAir,
  addPopular,
} = tvSlice.actions;
export default tvSlice.reducer;
