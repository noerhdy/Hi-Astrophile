import React from "react";

const DialogHead = ({ selectedOption }) => {
  const getImageSrc = () => {
    if (selectedOption === "takBoleh") {
      return "img/nope.gif";
    } else if (selectedOption === "boleh") {
      return "img/success.gif";
    } else {
      return "img/home.gif";
    }
  };

  const getImageClassName = () => {
    if (selectedOption === "takBoleh" || selectedOption === "boleh") {
      return "object-cover max-w-40 ease-in-out duration-200 rounded-md bg-center";
    } else {
      return "object-cover max-w-50 aspect-video ease-in-out duration-200 aspect-h-9 rounded-md bg-center";
    }
  };

  return (
    <div className="flex flex-col items-center aspe m-2 ">
      <div className="flex flex-col">
        <img className={getImageClassName()} src={getImageSrc()} alt="Dialog" />
      </div>
    </div>
  );
};

export default DialogHead;
