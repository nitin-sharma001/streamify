import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItems } = searchSlice.actions;
export default searchSlice.reducer;
