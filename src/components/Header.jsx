import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Store/Slices/userSlice";
import { useEffect } from "react";
import icon from "../assets/image.png";
import { IoMdLogOut } from "react-icons/io";
import { PiTelevisionFill } from "react-icons/pi";
import { FaHeartBroken } from "react-icons/fa";
import { GoPerson, GoSearch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import "./HomeComponents/ListsComponents/Style.css";
import { BiCameraMovie } from "react-icons/bi";
import "./Style.css";
import toast from "react-hot-toast";
const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const user = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSub();
  }, []);

  function clickHandler() {
    navigate("/search");
  }

  function tvRouteHandler() {
    navigate("/tv");
  }
  function heartHandler() {
    navigate("/favourite");
  }
  function listRouteHandler() {
    navigate("/lists");
  }

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        toast.success("Log out Successfully...");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Log Out Failed");
      });
  }
  function showHandler() {
    setShow(!show);
    console.log(show);
  }

  return (
    <div className="relative">
      <div className="menu  fixed z-[9999] top-8 left-4 text-2xl text-black">
        <GiHamburgerMenu onClick={showHandler} />
      </div>
      {show && (
        <div className="header  absolute  md:px-8 md:py-2 md:from-black z-10 flex flex-col justify-between">
          {user && (
            <div>
              <nav className="sidebar locked ">
                <div className="menu_container ">
                  <div className="menu_items  text-white gap-5 flex md:text-xl flex-col items-start cursor-pointer">
                    <div className=" ">
                      <img
                        className="w-[100%] h-[100%] object-cover "
                        src={icon}
                        alt="icon"
                      />
                      {/* <p className="text-items">Home</p> */}
                    </div>
                    <div onClick={clickHandler} className="option-container">
                      <GoSearch />
                      <p className="text-items">Search</p>
                    </div>
                    <div
                      onClick={listRouteHandler}
                      className="option-container">
                      <BiCameraMovie />
                      <p className="text-items">Top Movies</p>
                    </div>
                    <div onClick={tvRouteHandler} className="option-container">
                      <PiTelevisionFill />
                      <p className="text-items">Tv Shows</p>
                    </div>
                    <div
                      onClick={heartHandler}
                      className="option-container"
                      id="genre">
                      <FaHeartBroken />
                      <p className="text-items">Genre</p>
                    </div>
                    <div className="option-container">
                      <GoPerson />
                      <p className="text-items">{user.displayName}</p>
                    </div>
                  </div>
                  <div className="sidebar_profile">
                    <span
                      onClick={handleSignOut}
                      className="nav_image  text-white cursor-pointer">
                      <div className="option-container ">
                        <IoMdLogOut size={25} />
                        <p className="text-items">Sign Out</p>
                      </div>
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
