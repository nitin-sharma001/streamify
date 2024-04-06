import React, { useEffect } from "react";
import Header from "./Header";
import useMovies from "../hooks/useMovies";
import Hero from "./HomeComponents/Hero";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTVShows from "../hooks/useTVShows";
import useGPT from "../hooks/useGPT";
const Browser = () => {
  useMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();

  // useGPT();

  useTVShows();
  return (
    <div>
      <Header />

      <Hero />
    </div>
  );
};

export default Browser;
