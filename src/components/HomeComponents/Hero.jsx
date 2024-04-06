import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import { useSelector } from "react-redux";
import Titile from "./Titile";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import SecondaryComponent from "./SecondaryComponent";
const Hero = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  // console.log(mainMovie);
  const {
    original_title,
    id,
    vote_average,
    overview,
    genre_ids,
    backdrop_path,
  } = mainMovie;

  // const scrolldiv = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrolldiv.current,
  //     smooth: true,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <div className="relative overflow-x-hidden ">
      <Titile
        title={original_title}
        genre_ids={genre_ids}
        vote_average={vote_average}
        overview={overview}
      />
      <BackgroundVideo id={id} bgimage={backdrop_path} />

      <SecondaryComponent />
    </div>
  );
};

export default Hero;
