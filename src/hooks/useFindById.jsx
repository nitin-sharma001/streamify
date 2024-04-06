import { API_OPTIONS } from "../utils/constants";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addCast,
  addMovie,
  addReviews,
} from "../utils/Store/Slices/mediaPlayerSlice";

const useFindById = (type, id) => {
  const dispatch = useDispatch();

  const fetchMovie = () => {
    axios(`https://api.themoviedb.org/3/${type}/${id}`, API_OPTIONS)
      .then((res) => {
        // console.log(res)
        dispatch(addMovie(res.data));
        axios(
          `
                     https://api.themoviedb.org/3/${type}/${id}/credits`,
          API_OPTIONS
        )
          .then((res) => {
            //     console.log(res)
            dispatch(addCast(res.data.cast));
          })
          .catch((err) => console.log(err));

        axios(
          `
                     https://api.themoviedb.org/3/${type}/${id}/reviews`,
          API_OPTIONS
        )
          .then((res) => {
            // console.log(res.data);
            dispatch(addReviews(res.data.results));
          })
          .catch((err) => console.log(err));
      })
      .catch((Err) => {
        console.log(Err);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};

export default useFindById;
