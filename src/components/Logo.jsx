import React from "react";

import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="absolute w-[35vw] h-[15vw] top-[-10vw] left-[35vw] md:w-[17vw] md:h-[5vw] md:top-[-5vw] md:left-[40vw]">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
