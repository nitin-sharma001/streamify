import React from "react";
import { useSelector } from "react-redux";
import OtherMovies from "./HomeComponents/ListsComponents/OtherMovies";
import HomeButton from "../components/HomeButton";
const ShowTV = () => {
  const state = useSelector((state) => state.tvs);
  //   console.log(state);

  const popular = state.popular;
  const today = state.arivingToday;
  const air = state.ontheAir;
  const rated = state.topRated;
  const tvShows = state.tvShows;

  return (
    <div>
      <HomeButton />
      <h1 className="hidden md:block text-white text-2xl pt-4">
        All Tv Shows :{" "}
      </h1>

      <OtherMovies type={"tv"} title={"Ariving Today"} movies={today} />
      <OtherMovies type={"tv"} title={"Popular Shows"} movies={popular} />
      <OtherMovies type={"tv"} title={"Top Rated"} movies={rated} />
      <OtherMovies type={"tv"} title={"Tv Shows"} movies={tvShows} />
      <OtherMovies type={"tv"} title={"On the Air"} movies={air} />
    </div>
  );
};

export default ShowTV;
