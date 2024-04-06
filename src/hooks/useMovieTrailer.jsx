import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addTrailerVideo } from "../utils/Store/Slices/moviesSlice";
import { addMovie } from "../utils/Store/Slices/mediaPlayerSlice";
import { useParams } from "react-router-dom";
const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const param = useParams();

  const type = param.type === undefined ? "movie" : param.type;

  const getMovieTrailer = () => {
    axios(
      "https://api.themoviedb.org/3/" + type + "/" + id + "/videos",
      API_OPTIONS
    ).then((res) => {
      // console.log(res);
      const filterData = res.data.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData[0];
      dispatch(addTrailerVideo(trailer));
    });
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
