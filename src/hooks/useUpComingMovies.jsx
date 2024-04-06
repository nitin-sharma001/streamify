

import axios from 'axios'
import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addupcomingMovies} from '../utils/Store/Slices/moviesSlice'
const useUpComingMovies = () => {
        const dispatch = useDispatch();

        const getUpcomingMovies = () => {
                axios("https://api.themoviedb.org/3/movie/upcoming?&page=1", API_OPTIONS)
                .then((res) => {
                        // console.log(res)
                        dispatch(addupcomingMovies(res.data.results))
                })
        }
        useEffect(() => {
                getUpcomingMovies();
        }, []);
}

export default useUpComingMovies