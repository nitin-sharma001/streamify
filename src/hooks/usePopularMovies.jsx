

import axios from 'axios'
import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addPopularMovies} from '../utils/Store/Slices/moviesSlice'
const usePopularMovies = () => {
        const dispatch = useDispatch();

        const getPopularMovies = () => {
                axios("https://api.themoviedb.org/3/movie/popular?&page=1", API_OPTIONS)
                .then((res) => {
                        // console.log(res)
                        dispatch(addPopularMovies(res.data.results))
                })
        }
        useEffect(() => {
                getPopularMovies();
        }, []);
}

export default usePopularMovies