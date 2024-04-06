import React from "react";
import { useSelector } from "react-redux";
import OtherMovies from "./HomeComponents/ListsComponents/OtherMovies";
const SearchResults = () => {
  const items = useSelector((state) => state.search.items);
  // console.log(items);

  if (!items) return;

  const movieData = items.filter((item) => item.media_type === "movie");
  const tvData = items.filter((item) => item.media_type === "tv");
  const personData = items.filter((item) => item.media_type === "person");

  // console.log(personData);

  return (
    <div className="md:pt-10 md:pl-20 pl-2 pb-20">
      {movieData.length !== 0 ? (
        <OtherMovies type={"movie"} title={"Movies"} movies={movieData} />
      ) : (
        ""
      )}
      {tvData.length !== 0 ? (
        <OtherMovies type={"tv"} title={"Tvs"} movies={tvData} />
      ) : (
        ""
      )}
      {personData.length !== 0 ? (
        <OtherMovies type={"person"} title={"Persons"} movies={personData} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchResults;
