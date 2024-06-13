import CardLoading from "@/components/Elements/loading/CardLoading";
import React from "react";
import { motion } from "framer-motion";

const LoadingSection = () => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -1000,
        transition: {
          duration: 2,
          delay: 2,
        },
      }}
      exit={{ y: window.innerWidth }}
      className="min-h-screen flex flex-col justify-center items-center fixed w-screen bg-[#fefefe] "
    >
      <CardLoading thumbUrl="thumbnail/1.webp" delay="0.5" />
      <CardLoading thumbUrl="thumbnail/2.webp" delay="0.8" />
      <CardLoading thumbUrl="thumbnail/3.webp" delay="1.1" />
      <CardLoading thumbUrl="thumbnail/4.webp" delay="1.4" />
      <CardLoading thumbUrl="thumbnail/5.webp" delay="1.7" />
    </motion.section>
  );
};

export default LoadingSection;
