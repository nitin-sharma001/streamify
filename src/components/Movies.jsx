import React from "react";
import { useSelector } from "react-redux";
import OtherMovies from "./HomeComponents/ListsComponents/OtherMovies";
import HomeButton from "./HomeButton";
import Logo from "./Logo";
const Movies = () => {
  const state = useSelector((state) => state.movies);
  console.log(state);

  const topRated = state.topratedMovies;
  const popular = state.popularMovies;
  const nowPlaying = state.nowPlayingMovies;
  const upComing = state.upComingMovies;

  return (
    <div className="md:pl-20 md:pt-20 pl-4 pt-4 pb-20 w-screen h-screen overflow-auto bg-black overflow-x-hidden">
      <HomeButton />
      <Logo />
      <OtherMovies type={"movie"} title={"Top Rated"} movies={topRated} />
      <OtherMovies type={"movie"} title={"Now Playing"} movies={nowPlaying} />
      <OtherMovies type={"movie"} title={"Up Coming"} movies={upComing} />
      <OtherMovies type={"movie"} title={"Popular"} movies={popular} />
    </div>
  );
};

export default Movies;
