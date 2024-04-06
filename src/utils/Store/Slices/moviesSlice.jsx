import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
        name : "movies",
        initialState : {
                nowPlayingMovies : null,
                movieTrailer : null,
                popularMovies : null,
                topratedMovies : null,
                upComingMovies : null,
        },
        reducers : {
                addNowPlayingMovies : (state, action) => {
                        state.nowPlayingMovies = action.payload
                },
                addTrailerVideo : (state, action) => {
                        state.movieTrailer = action.payload;
                },
                addPopularMovies : (state, action) => {
                        state.popularMovies = action.payload;
                },
                addTopRatedMovies : (state, action) => {
                        state.topratedMovies = action.payload;
                },
                addupcomingMovies : (state, action) => {
                        state.upComingMovies = action.payload;
                }
        }
})



export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addupcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;