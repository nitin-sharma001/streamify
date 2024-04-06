import React from "react";
import { SiHomebridge } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/browse");
  };

  return (
    <div className=" fixed z-[9999999] top-14 -left-4">
      <div className="pl-14 bg-white py-2 pr-2 rounded-full cursor-pointer">
        <SiHomebridge size={25} onClick={clickHandler} />
      </div>
    </div>
  );
};

export default HomeButton;
