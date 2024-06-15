import FormLogin from "@/components/Fragment/FormLogin";
import React from "react";
import { motion } from "framer-motion";

const LoginSection = () => {
  return (
    <>
      <div className="w-full max-w-screen-sm min-h-screen flex flex-col overflow-hidden justify-center items-center bg-gradient-to-t from-[#e1b19e] from-40%  bg-[#fefefe] relative">
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
            <span>Hello 👋</span>
            <span>Astrophile</span>
          </div>
          <h5 className="text-sm text-zinc-800 w-60 ">
            Maukah kamu memberitahu nama lengkapmu
          </h5>
          <FormLogin />
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
          className="absolute z-10 -bottom-20 bg-blend-overlay "
        >
          <img
            className="object-cover max-w-100 bg-center "
            src="img/rb.gif"
          ></img>
        </motion.div>
      </div>
    </>
  );
};

export default LoginSection;
