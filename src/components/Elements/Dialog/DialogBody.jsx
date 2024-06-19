import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Label from "../input/LabelIndex";
import InputForm from "../input";

const DialogBody = ({ selectedOption, onCheckboxChange, formData }) => {
  const [post, setPost] = useState({
    numberWa: "",
  });

  // Handle perubahan checkbox
  const handleCheckboxChange = (option) => {
    if (selectedOption === option) {
      onCheckboxChange(null);
    } else {
      onCheckboxChange(option);
    }
  };

  // Handle perubahan input
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    // Memastikan bahwa nilai numberWa dari formData diteruskan ke state lokal
    formData.numberWa = post.numberWa; // Perubahan 1: Mengubah nilai langsung pada formData
  }, [formData, post.numberWa]);

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-col justify-center w-full shadow-md bg-zinc-100 py-1 px-2 rounded-md items-start">
        <div className="flex flex-col p-2 text-sm w-auto">
          {/* <span>beli coklat ke surabaya, pulangnya beli sapu</span>
          <span>kalo kamu belum ada yg punya,</span>
          <span>boleh minta no wa kamu? 😂</span> */}
        </div>
        <div className="flex p-2 gap-12 w-full mb-4">
          <div className="flex justify-center items-center">
            <Checkbox
              className="border-double"
              checked={selectedOption === "takBoleh"}
              onCheckedChange={() => handleCheckboxChange("takBoleh")}
            />
            <Label
              classname={`mb-0 mx-2 font-normal ${
                selectedOption === "takBoleh"
                  ? "text-zinc-800 font-semibold"
                  : "text-zinc-400"
              }`}
            >
              no
            </Label>
          </div>
          <div className="flex justify-center items-center">
            <Checkbox
              checked={selectedOption === "boleh"}
              onCheckedChange={() => handleCheckboxChange("boleh")}
            />
            <Label
              classname={`mb-0 mx-2 font-normal   ${
                selectedOption === "takBoleh"
                  ? "text-zinc-400"
                  : "text-green-500 font-semibold"
              }`}
            >
              no
            </Label>
          </div>
        </div>
        <div
          className={`transition-all duration-200 ease-in-out delay-100 ${
            selectedOption === "boleh"
              ? "opacity-100 max-h-full w-full"
              : "opacity-0 max-h-0 w-10 overflow-hidden"
          }`}
        >
          <InputForm
            className="ease duration-200"
            autoComplete="off"
            name="numberWa"
            value={post.numberWa}
            type="number" //
            placeholder=". . ."
            onChange={handleInput}
          />
        </div>
      </div>
    </div>
  );
};

export default DialogBody;
