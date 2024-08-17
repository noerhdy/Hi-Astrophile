import FormNext from "@/components/Fragment/FormNext";
import React from "react";
import { useLocation } from "react-router-dom";

const FormSection = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const fullName = params.get("fullName");

  return (
    <section className="w-full flex flex-col min-h-screen items-center bg-[#f8f8f8] overflow-hidden">
      <div className="max-w-screen-sm min-h-screen flex flex-col items-center py-12 px-4 bg-[#f8f8f8] relative">
        <div className="flex flex-col text-start bg-[#f3f3f3] mb-6 border border-zinc-200 shadow-sm py-4 px-4 rounded-2xl">
          <p className="text-[1.2rem] py-2 font-bold">Hello, {fullName}.</p>

          <div className="grid grid-cols-5 gap-2">
            <div className="text-[0.725rem] col-span-3 text-balance text-zinc-700">
              <p>
                jangan takut, saya bukan orang jahat dan bukan orang yang ingin
                menculikmu hahaha
              </p>
              <p>
                oh iya sebelumnya apa kabar? bagaimana hari ini? bagaimana mood
                kamu sekarang?, kalo lagi gamod atau capek boleh kamu abaikan
                kok hahaha
              </p>
              <p>semangat.</p>
            </div>
            <div className="col-span-2 rounded-xl items-center justify-center flex overflow-hidden">
              <img
                className="object-cover bg-center w-40"
                src="img/pt.gif"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col text-balance text-zinc-800 mt-4 pt-12 bg-[#f3f3f3] p-6 shadow-xl border border-zinc-200 rounded-2xl">
          <FormNext />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
