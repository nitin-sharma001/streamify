import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import "./Style.css";
const Titile = ({ title, vote_average, overview, genre_ids, homepage }) => {
  const [like, setLike] = useState(true);

  function likeHandler() {
    setLike(!like);
  }

  // console.log(title)
  if (!vote_average) return;

  const clickHandler = () => {
    if (homepage) window.open(homepage);
    else return;
  };
  return (
    <div className="">
      <div className="z-10  md:w-[25vw] w-[50vw] absolute top-[20vh] right-0  md:top-40 md:right-[10vw]">
        <div className="flex flex-col items-start gap-2 md:gap-8">
          <h1 className="md:text-5xl text-2xl font-semibold text-white">
            {title}
          </h1>

          <p className="text-white hidden md:block md:text-sm leading-4 text-[3.2vw] ">
            {overview}
          </p>
        </div>
        <div className=" imdb flex justify-center top-[-25vw] left-[25vw] items-center  rounded-full md:w-[5vw] md:h-[5vw] w-[15vw] h-[15vw] border-2 border-white absolute md:top-0  md:-left-[45vw]">
          <p className="text-white text-xl  md:text-lg font-semibold">
            {vote_average.toString().substring(0, 3)}
          </p>
        </div>

        <div className="btn  pt-5  flex   gap-3  md:w-80">
          <div
            onClick={clickHandler}
            className="h-10   flex gap-2 justify-center rounded-lg items-center bg-white md:w-[10vw] w-[35vw] cursor-pointer">
            <p className="font-semibold text-lg">Watch Now</p>
            <FaPlay />
          </div>
          <div
            onClick={likeHandler}
            className="text-white text-2xl md:text-lg bg-gray-400 w-10 h-10  rounded-lg flex justify-center items-center cursor-pointer">
            {like ? <FcLikePlaceholder /> : <FcLike />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titile;
