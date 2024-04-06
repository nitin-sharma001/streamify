import React from "react";
import { useParams } from "react-router-dom";
import useFindById from "../../hooks/useFindById";
import { useDispatch, useSelector } from "react-redux";
import BackgroundVideo from "../HomeComponents/BackgroundVideo";
import Titile from "../HomeComponents/Titile";
import HomeButton from "../HomeButton";
import { IMG_URL } from "../../utils/constants";
import "../HomeComponents/ListsComponents/Style.css";
const MoviePlayer = () => {
  const param = useParams();
  // console.log(param);
  useFindById(param.type, param.id);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.media);
  const movie = state.movie;
  const cast = state.cast;
  const reviews = state.reviews;
  // console.log(reviews);
  if (movie === null) return;
  // console.log(movie);

  const {
    title,
    name,
    vote_average,
    overview,
    poster_path,
    backdrop_path,
    tagline,
    genres,
    budget,
    revenue,
    seasons,
    production_companies,
    homepage,
  } = movie;

  return (
    <div className="">
      <Titile
        title={title || name}
        vote_average={vote_average}
        overview={overview}
        homepage={homepage}
      />

      <BackgroundVideo id={param.id} bgimage={backdrop_path} />
      <HomeButton />
      <div className="relative w-screen bg-black  ">
        <div className="absolute w-[30vw] left-4 top-[-30vw] md:w-[13vw] md:-top-40 md:left-20 rounded-lg  overflow-hidden flex items-center justify-center">
          <img
            className="w-100 h-100 object-cover"
            src={IMG_URL + poster_path}
            alt=""
          />
        </div>

        <div className=" md:pl-20 md:pt-40 pl-4 pt-20">
          <p className="md:text-2xl text-xl font-semibold text-white">
            {title || name} - {tagline}
          </p>
          <br />
          <p className="text-lg text-white md:w-[40vw] w-full">
            Description : {overview}
          </p>
        </div>
        <br />
        <br />
        <div className="md:pl-20 pl-4 flex gap-3 text-white w-full">
          <span className="text-lg">Genres : </span>
          {genres.map((gen) => {
            return (
              <span
                key={gen.id}
                className="p-1 h-7 rounded-md bg-gray-600 flex items-center justify-center ">
                <p className="text-sm">{gen.name}</p>
              </span>
            );
          })}
        </div>
        {seasons && (
          <p className="md:pl-20 pl-4 pt-6 md:text-lg text-xl text-white">
            Seasons :
          </p>
        )}

        <div className="pt-4 md:pl-20 pl-4  w-[95vw] flex  overflow-x-scroll scrollbar">
          <div className="flex gap-5">
            {seasons &&
              seasons.map((season) => {
                return (
                  <div
                    key={season.id}
                    className="relative card  w-40   rounded-2xl overflow-hidden bg-black">
                    {season.poster_path ? (
                      <img
                        className="object-cover w-[100%] h-[100%]"
                        src={IMG_URL + season.poster_path}
                        alt="img"
                      />
                    ) : (
                      <img
                        className="object-cover w-[100%] "
                        src="https://www.shutterstock.com/image-illustration/3d-illustration-error-404-concept-260nw-2148668995.jpg"
                        alt=""
                      />
                    )}

                    <div className="box-bottom">
                      <p className="absolute text-white top-1 left-3">
                        {season.name}
                      </p>

                      <p className="absolute text-white bottom-[3vw]  left-1 text-sm">
                        {season.overview.substring(0, 80)}...
                      </p>
                      <p className="absolute text-[#d6dcde] text-sm bottom-4 left-1">
                        Total Episode : {season.episode_count}
                      </p>

                      <div className=" px-4 flex gap-4 absolute bottom-6 "></div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {cast && (
          <p className="md:pl-20 pl-4 pt-6 md:text-lg text-xl text-white">
            Cast :
          </p>
        )}

        <div className="pt-4 md:pl-20 pl-4 w-[95vw] flex  overflow-x-scroll scrollbar">
          <div className="flex gap-5">
            {cast &&
              cast.map((person) => {
                return (
                  <div
                    key={person.id}
                    className="relative card  w-40   rounded-2xl overflow-hidden">
                    {person.profile_path ? (
                      <img
                        className="object-cover w-[100%] h-[100%]"
                        src={IMG_URL + person.profile_path}
                        alt="img"
                      />
                    ) : (
                      <img
                        className="object-cover w-[100%] h-[100%]"
                        src="https://i.pinimg.com/236x/1e/d3/d3/1ed3d3ede778506de6edade417cce3e0.jpg"
                        alt=""
                      />
                    )}

                    <div className="box-bottom">
                      <p className="absolute text-white bottom-5 left-3">
                        {person.name}
                      </p>

                      <div className=" px-4 flex gap-4 absolute bottom-6 "></div>

                      <div></div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {budget && (
          <div className="text-white pl-4 md:pl-20 pt-10 ">
            <p className="md:text-lg text-xl">
              Budget :{" "}
              {Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(budget)}
            </p>
            <p className="md:text-lg text-xl">
              Revenue :{" "}
              {Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(revenue)}
            </p>
          </div>
        )}
        {production_companies && (
          <p className="text-white md:text-lg text-xl md:pl-20 pl-4 pt-10">
            Production Companies :{" "}
          </p>
        )}
        <div className="md:pl-20 pl-4  pt-4  flex flex-col items-start gap-2">
          {production_companies.map((pro) => {
            return (
              <div key={pro.id} className="pl-10 ">
                <p className="text-white md:text-lg text-xl">{pro.name}</p>
              </div>
            );
          })}
        </div>
        {reviews && (
          <div className="text-white md:pl-20 pl-4 pb-10 pt-10 md:w-[65vw] w-[97vw]">
            <p className="text-xl font-semibold">Reviews : </p>

            {reviews ? (
              reviews.map((review) => {
                return (
                  <div
                    key={review.id}
                    className="mt-10  bg-[#0f0e0f] p-4 rounded-lg">
                    <p className="md:pl-10 pl-4 font-semibold text-lg">
                      {review.author.toUpperCase()} :
                    </p>
                    <p className="md:pl-20 pl-10 pt-1 text-md">
                      {review.content}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="pl-10 text-white text-xl">No Reviews Found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviePlayer;
