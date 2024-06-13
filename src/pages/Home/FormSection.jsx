import FormNext from "@/components/Fragment/FormNext";
import React from "react";

const FormSection = () => {
  return (
    <div className="w-full max-w-screen-sm min-h-screen flex flex-col border pt-12 items-center p-12  bg-[#fefefe] relative">
      <div className="flex flex-col space-y-4 ">
        <img
          className="object-cover max-w-50 rounded-md bg-center  "
          src="img/ng.gif"
        ></img>
        <div className="flex w-full bg-zinc-300 p-4 drop-shadow-md rounded-md">
          <p className="text-balance text-zinc-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            excepturi reprehenderit porro maxime qui rerum, ea laboriosam iusto
            sapiente aliquam!
          </p>
        </div>
        <FormNext />
      </div>
    </div>
  );
};

export default FormSection;
