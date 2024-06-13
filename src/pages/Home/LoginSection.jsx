import FormLogin from "@/components/Fragment/FormLogin";
import React from "react";

const LoginSection = () => {
  return (
    <>
      <div className="w-full over max-w-screen-sm min-h-screen -z-10 flex flex-col border justify-center items-center bg-gradient-to-t from-[#e1b19e] from-40%  bg-[#fefefe] relative">
        <div className="flex flex-col space-y-4  text-start pb-12  ">
          <div className="flex font-medium flex-col text-4xl text-black dark:text-white text balance">
            <span>Hi</span>
            <span>Astrophile</span>
          </div>
          <h5 className="text-xs text-zinc-500 w-60 ">
            Maukah kau memberitahu nama lengkapmu
          </h5>
          <FormLogin />
        </div>

        <div className="absolute -z-10 -bottom-20 bg-blend-overlay ">
          <img
            className="object-cover max-w-100 bg-center "
            src="img/rb.gif"
          ></img>
        </div>
      </div>
    </>
  );
};

export default LoginSection;
