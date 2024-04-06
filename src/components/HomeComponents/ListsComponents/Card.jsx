import React from "react";
import { IMG_URL } from "../../../utils/constants";
import "./Card.css";
import { FaPlay } from "react-icons/fa";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { SiImdb } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const Card = ({ type, poster, title, vote, name, id, imdb }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    // console.log(type);
    navigate(`/player/${type}/${id}`);
  };

  return (
    <div
      onClick={clickHandler}
      className="relative card w-60  rounded-2xl overflow-hidden">
      {poster ? (
        <img className="object-cover" src={IMG_URL + poster} alt="img" />
      ) : (
        <img
          className="object-cover w-100 h-100"
          src="https://cdn.vectorstock.com/i/500p/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
          alt="image"
        />
      )}

      <div className="box-bottom">
        <p className="text-white pt-3 px-4">
          {title} {name}
        </p>

        <div className=" px-4 flex gap-4 absolute bottom-6 ">
          <div className="cursor-pointer flex w-8 h-8 text-sm items-center justify-center bg-white rounded-full">
            <FaPlay onClick={clickHandler} />
          </div>
          <div className="cursor-pointer flex w-8 h-8 text-sm items-center justify-center bg-white rounded-full">
            <AiFillLike />
          </div>
          <div className="cursor-pointer flex w-8 h-8 text-sm items-center justify-center bg-white rounded-full">
            <AiFillDislike />
          </div>
          <div className="flex gap-1 text-white text-xl   w-11 h-6">
            <SiImdb />{" "}
            <p className=" text-white text-sm">
              {" "}
              {vote && vote.toString().substring(0, 3)}
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Card;
