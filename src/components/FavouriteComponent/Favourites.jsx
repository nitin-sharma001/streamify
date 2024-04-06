import React from "react";
import Card from "./Card";
import { data } from "./Data";
import HomeButton from "../HomeButton";
import Header from "../Header";
import Logo from "../Logo";
const Favourites = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <HomeButton />
      <Logo />
      {/* <Header /> */}
      <div className="text-white md:pt-40 pt-[37vw] md:pl-60 pl-7">
        <div className="flex gap-3 flex-wrap overflow-x-auto">
          {data.map((t) => {
            return (
              <Card
                key={t.key}
                title={t.title}
                image={t.image}
                margin={t.margin}
                index={t.key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
