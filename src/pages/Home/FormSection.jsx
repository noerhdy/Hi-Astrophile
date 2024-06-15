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
        <div className="flex w-full flex-col text-balance text-zinc-800 space-y-2  bg-zinc-100 p-6 drop-shadow-md rounded-md">
          <p>Hallo 👋</p>
          <p>
            jangan takut, saya bukan orang jahat dan bukan orang yang ingin
            menculikmu kok, mungkin dengan cara ini saya bisa selangkah
            mengenalmu tanpa bertatap muka atau bertemu dahulu.
          </p>
          <p>
            oh iya sebelumnya apa kabar? bagaimana hari ini? bagaimana mood kamu
            sekarang?, kalo lagi gamod atau capek boleh kamu abaikan kok karna
            saya gak ingin menganggu waktumu.
          </p>
          <p>semangat </p>
        </div>
      </div>
      <div className="flex w-full flex-col text-balance text-zinc-800 mt-4 pt-12  bg-zinc-100 p-6 drop-shadow-md rounded-md">
        <FormNext />
      </div>
    </div>
  );
};

export default FormSection;
