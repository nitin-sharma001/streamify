import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/Store/Slices/moviesSlice";
import axios from "axios";

const useMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = () => {
    axios(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    ).then((res) => {
      // console.log(res.data.results);
      dispatch(addNowPlayingMovies(res.data.results));
    });
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useMovies;
