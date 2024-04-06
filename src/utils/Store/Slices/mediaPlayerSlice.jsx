import { createSlice } from "@reduxjs/toolkit"



const initialState = {
        movie : null,
        cast : null,
        reviews : null
}

const mediaPlayerSlice = createSlice({
        name : "media",
        initialState,
        reducers : {
                addMovie : (state, action) => {
                        state.movie = action.payload
                },
                addCast : (state, action) => {
                        state.cast = action.payload
                },
                addReviews : (state, action) => {
                        state.reviews = action.payload
                },

        }
})

export const {addMovie, addCast, addReviews} = mediaPlayerSlice.actions;
export default mediaPlayerSlice.reducer;