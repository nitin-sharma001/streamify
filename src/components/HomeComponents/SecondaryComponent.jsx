import React from "react";
import NowPlaying from "./ListsComponents/NowPlaying";
import { useSelector } from "react-redux";
import OtherMovies from "./ListsComponents/OtherMovies";

const SecondaryComponent = () => {
  const movies = useSelector((state) => state.movies);
  const tvs = useSelector((state) => state.tvs);
  // console.log(tvs.topRated)

  return (
    <div className="w-screen  relative bg-black pb-10">
      <NowPlaying
        type={"movie"}
        title={"Now Playing"}
        movies={movies.nowPlayingMovies}
      />
      <OtherMovies
        type={"movie"}
        title={"Top Rated "}
        movies={movies.topratedMovies}
      />
      <OtherMovies
        type={"movie"}
        title={"UpComing"}
        movies={movies.upComingMovies}
      />

      <OtherMovies type={"tv"} title={"Tv Shows"} movies={tvs.tvShows} />
      <OtherMovies
        type={"tv"}
        title={"Top Rated Shows"}
        movies={tvs.topRated}
      />
    </div>
  );
};

export default SecondaryComponent;
