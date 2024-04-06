import axios from 'axios'
import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addTopRatedMovies} from '../utils/Store/Slices/moviesSlice'


const useTopRatedMovies = () => {
        const dispatch = useDispatch();

        const getUpComingMovies = () => {
                axios("https://api.themoviedb.org/3/movie/top_rated?&page=1", API_OPTIONS)
                .then((res) => {
                        // console.log(res)
                        dispatch(addTopRatedMovies(res.data.results))
                })
        }
        useEffect(() => {
                getUpComingMovies();
        }, []);
}

export default useTopRatedMovies