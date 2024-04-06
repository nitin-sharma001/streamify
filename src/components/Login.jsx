import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Logo from "./Logo";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Store/Slices/userSlice";
import toast from "react-hot-toast";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/g/r/v/large-newposter9037-breaking-bad-wall-poster-large-print-on-original-imaf5thxvkkpgjuf.jpeg?q=90&crop=false",
    "https://images-cdn.ubuy.co.in/6351347fdfec8169b11cbb57-peaky-blinders-poster-season-1-key-art.jpg",
    "https://images.ctfassets.net/4cd45et68cgf/3BJQrujAXLeXXsWXnolmvB/28845a87ecb25a0609c2e9faec57736c/EN_SQdGame_Main_PlayGround_Horizontal_RGB_PRE.jpg",
    "https://rukminim2.flixcart.com/image/850/1000/kesv0y80-0/poster/q/y/s/large-rio-mh-0017-money-heist-wall-posters-for-bedroom-living-original-imafve8bjvnaxdfg.jpeg?q=90&crop=false",
    "https://3.bp.blogspot.com/-z7hTy8-HvzU/Xnj8uEcFoAI/AAAAAAAAPRw/W6QP1zTyl5YUx5y3YDbOqvzRm1vLE9N0gCLcBGAsYHQ/w1200-h630-p-k-no-nu/elite1.jpg",
    "https://mehkashi.files.wordpress.com/2021/06/elite-poster.jpeg",
    "https://rukminim2.flixcart.com/image/850/1000/k8q8nm80/poster/5/r/7/medium-series-poster-vikings-series-poster-poster-for-room-original-imafqzdchhzkwczy.jpeg?q=90&crop=false",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((res) => {
          const user = res.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              toast.success("Account Created Successfully");
            })
            .catch((err) => {
              console.log("error while updating profile", err);
              toast.error("Try Again !");
            });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Account already exixts");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((res) => {
          const user = res.user;
          console.log(user);
          toast.success("Login Successfully...");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Credientials Not Matched !");
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative flex gap-10 w-screen h-screen bg-zinc-800">
      <div className="absolute">
        <Header />
      </div>
      <div className="relative h-[100vh] w-[100vw] rounded-3xl  md:ml-20 md:w-[65vw] md:h-[85vh] bg-black overflow-hidden md:rounded-3xl">
        <img
          className="w-[100%] h-[100%] object-cover bg-no-repeat "
          src={images[currentImage]}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute md:top-40 top-[40vw] right-14 md:right-12 text-white flex flex-col items-start  rounded-lg bg-opacity-80">
        <h1 className="font-bold text-4xl md:text-3xl py-4">
          {isSignInForm ? "Sign In" : "Get Started"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-[80vw] md:w-[23vw] bg-zinc-800 border-2 rounded-[999px]"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-[80vw] md:w-[23vw] bg-zinc-800 border-2 rounded-[999px]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-[80vw] md:w-[23vw] bg-zinc-800 border-2 rounded-[999px]"
        />
        <button
          className="p-4 my-6 bg-zinc-900 w-[80vw] md:w-[23vw] rounded-[999px]"
          onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer text-xl md:text-[1.1vw] "
          onClick={toggleSignInForm}>
          {isSignInForm ? (
            <p>New to Streamify? Sign Up Now</p>
          ) : (
            <p>Already registered? Sign In Now.</p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
