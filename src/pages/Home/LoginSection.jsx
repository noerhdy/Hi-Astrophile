// import FormLogin from "@/components/Fragment/FormLogin";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "@/components/Elements/Button/ButtonIndex";
import FormLogin from "@/components/Fragment/FormLogin";

const LoginSection = () => {
  return (
    <>
      <div className="w-full max-w-screen-sm min-h-screen flex flex-col overflow-hidden justify-center items-center bg-[#fefefe] relative">
        <motion.div
          initial={{ y: -1000, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 3,
              delay: 2,
            },
          }}
          className="flex flex-col space-y-4 text-start pb-12  "
        >
          <div className="flex font-medium flex-col text-4xl text-black dark:text-white text balance">
            <span>Nothing</span>
          </div>
          {/* <h5 className="text-sm text-zinc-800 w-60 ">
            Maukah kamu memberitahu nama lengkapmu
          </h5> */}
          <FormLogin />
          {/* <Link to="/end">
            <div className="flex w-full justify-end">
              <Button classname="text-zinc-800 bg-white">play</Button>
            </div>
          </Link> */}
        </motion.div>

        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 2,
              delay: 5,
            },
          }}
          className="absolute z-10 bottom-10 bg-blend-overlay "
        >
          <img
            className="object-cover max-w-60 bg-center "
            src="img/m.gif"
          ></img>
        </motion.div>
      </div>
    </>
  );
};

export default LoginSection;
