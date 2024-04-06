import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import axios from "axios";

import React from "react";
import { addTopRatedShows, addTvShows } from "../utils/Store/Slices/tvSlice";

const useTVShows = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = () => {
    axios("https://api.themoviedb.org/3/discover/tv", API_OPTIONS).then(
      (res) => {
        // console.log(res);
        dispatch(addTvShows(res.data.results));
      }
    );
    axios("https://api.themoviedb.org/3/tv/top_rated", API_OPTIONS).then(
      (res) => {
        // console.log(res);
        dispatch(addTopRatedShows(res.data.results));
      }
    );
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useTVShows;
