import React, { useState } from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { IMG_URL } from "../../utils/constants";
import "./Style.css";
const BackgroundVideo = ({ id, bgimage }) => {
  useMovieTrailer(id);

  const state = useSelector((state) => state.movies);
  const trailer = state.movieTrailer;
  const image = state.nowPlayingMovies;
  // console.log(trailer);
  // console.log(image[0].backdrop_path);
  const [background, setBackground] = useState(null);

  setTimeout(() => {
    setBackground(bgimage);
    // console.log(background);
  }, 72000);
  return (
    <div className="-z-2 w-screen md:h-screen h-[55vh] overflow-hidden">
      {!background && (
        <iframe
          className="custom-scale w-screen md:h-screen h-[55vh] aspect-video   transform-gpu"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?rel=0?version=3&autoplay=1&mute=1&controls=0&&showinfo=0&loop=1"
          }
          title="YouTube video player"
          allow="autoplay "></iframe>
      )}

      {background && (
        <img
          className="w-[100%] h-[100%] object-cover "
          src={IMG_URL + background}
          alt=""
        />
      )}
    </div>
  );
};

export default BackgroundVideo;
