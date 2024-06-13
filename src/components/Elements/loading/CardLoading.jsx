import React from "react";
import { motion } from "framer-motion";

const CardLoading = (props) => {
  const { thumbUrl, animateProps, delay } = props;
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={
        animateProps || {
          opacity: 1,
          transition: { delay: delay },
          transitionEnd: { display: "none" },
        }
      }
      className="flex w-1/2 relative items-center justify-center "
    >
      <img
        className="object-cover absolute rounded-md bg-center "
        src={thumbUrl}
      ></img>
    </motion.span>
  );
};

export default CardLoading;
