import React from "react";
import { motion } from "framer-motion";
import "./Style.css";
const Card = ({ title, image, margin, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "50vh" }}
      exit={{ opacity: 0, height: 0 }}
      style={{ marginTop: margin }}
      transition={{ duration: 0.5, delay: index * 0.7 }}
      className={`favourite-card relative md:h-[50vh] md:w-[8vw]   overflow-hidden`}>
      <img className="w-[100%] h-[100%] object-cover" src={image} alt="iamge" />
      <p className="absolute md:text-md text-xl font-semibold top-40 left-5">
        {title}
      </p>
    </motion.div>
  );
};
export default Card;
