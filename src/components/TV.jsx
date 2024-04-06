import axios from "axios";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import Logo from "./Logo";
import {
  addArivingToday,
  addOnTheAir,
  addPopular,
} from "../utils/Store/Slices/tvSlice";
import ShowTV from "./ShowTV";
const TV = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    axios(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    )
      .then((res) => {
        dispatch(addArivingToday(res.data.results));
      })
      .catch((err) => console.log(err));

    axios("https://api.themoviedb.org/3/tv/on_the_air", API_OPTIONS)
      .then((res) => {
        dispatch(addOnTheAir(res.data.results));
      })
      .catch((err) => console.log(err));

    axios(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    )
      .then((res) => {
        dispatch(addPopular(res.data.results));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen bg-black h-screen overflow-auto overflow-x-hidden">
      <Logo />
      <div className=" md:pt-20 md:pl-20 pl-4 pb-20">
        <ShowTV />
      </div>
    </div>
  );
};

export default TV;
