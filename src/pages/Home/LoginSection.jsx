// import FormLogin from "@/components/Fragment/FormLogin";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "@/components/Elements/Button/ButtonIndex";
import FormLogin from "@/components/Fragment/FormLogin";

const LoginSection = () => {
  return (
    <>
      <div className="max-w-screen-sm min-h-screen flex flex-col overflow-hidden justify-center items-center bg-[#f8f8f8] relative">
        <motion.div
          initial={{ y: 1000, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 2,
              delay: 2,
            },
          }}
          className="flex flex-col text-start  bg-[#f3f3f3]  border border-zinc-200 shadow-xl py-4 px-4 rounded-2xl "
        >
          <div className="rounded-xl max-w-80 max-h-60 overflow-hidden ">
            <img className=" object-cover bg-center " src="img/l.gif"></img>
          </div>
          {/* <div className="flex flex-col">
            <div className="flex space-x-1 items-center">
              <span className="pt-2">Hello </span>
              <span className="inline-block text-[1rem] transform-origin-[70%_70%] animate-wave">
                👋
              </span>
            </div>
          </div> */}

          <FormLogin />
          {/* <Link to="/end">
            <div className="flex w-full justify-end">
              <Button classname="text-zinc-800 bg-white">play</Button>
            </div>
          </Link> */}
        </motion.div>
      </div>
    </>
  );
};

export default LoginSection;
