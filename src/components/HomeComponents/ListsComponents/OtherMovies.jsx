import React from "react";
import Card from "./Card";
import "./Style.css";
const OtherMovies = ({ type, title, movies }) => {
  if (!movies) return;
  // console.log(movies)
  return (
    <div>
      <div className="md:w-[95vw] w-full pt-[22vw] md:pt-[3vw] md:pb-[2vw] overflow-x-hidden">
        <p className="py-5 px-10 text-2xl font-semibold md:px-20 md:text-xl text-white">
          {title}
        </p>

        <div className="flex overflow-x-scroll scrollbar">
          <div className="flex gap-5 px-[4vw] ">
            {movies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  poster={movie.backdrop_path}
                  title={movie.title}
                  vote={movie.vote_average}
                  name={movie.name}
                  id={movie.id}
                  imdb={movie.imdb_id}
                  type={type}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherMovies;
