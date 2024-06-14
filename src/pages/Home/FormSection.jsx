import FormNext from "@/components/Fragment/FormNext";
import React from "react";

const FormSection = () => {
  return (
    <div className="w-full max-w-screen-sm min-h-screen flex flex-col  pt-12 items-center p-12  bg-[#fefefe] relative">
      <div className="flex flex-col space-y-4 ">
        <img
          className="object-cover max-w-50 rounded-md bg-center  "
          src="img/ng.gif"
        ></img>
        <div className="flex w-full bg-zinc-300 p-4 drop-shadow-md rounded-md">
          <p className="text-balance text-zinc-600">
            pokoke isine epilog rek tapi sek dorong kober gae mumet sekan, teros
            opo kok nak ndokor iki poto awan? yo sak karepku apene potomu
            nambahi mumet lek nyawang, wes isien nak nisor iki rausah wedi tak
            gae pinjol. wong mek pgn eroh koe kok 🗿🗿🗿
          </p>
        </div>
        <FormNext />
      </div>
    </div>
  );
};

export default FormSection;
