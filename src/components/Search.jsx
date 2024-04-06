import React, { useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addItems } from "../utils/Store/Slices/searchSlice";
import SearchResults from "./SearchResults";
import HomeButton from "./HomeButton";
import Logo from "./Logo";
const Search = () => {
  const search = useRef(null);
  const dispatch = useDispatch();
  const clickHandler = () => {
    axios(
      "https://api.themoviedb.org/3/search/multi?query=" + search.current.value,
      API_OPTIONS
    )
      .then((res) => {
        dispatch(addItems(res.data.results));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-screen  bg-black h-screen overflow-auto overflow-x-hidden">
      <Logo />
      <HomeButton />
      <div className="flex gap-3 pt-[16vh] md:pt-[7vw] pl-2 md:pl-40">
        <input
          ref={search}
          className="text-white border-3 bg-[#2a232a] p-3 pl-8 rounded-lg w-[65vw] "
          placeholder="Search..."
          type="text"
        />

        <button
          onClick={clickHandler}
          className="py-3 px-8 text-white bg-red-700 rounded-xl">
          Search
        </button>
      </div>

      <SearchResults />
    </div>
  );
};

export default Search;
