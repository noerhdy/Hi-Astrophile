import React, { useState } from "react";
import DialogBody from "./DialogBody";
import DialogHead from "./DialogHead";

const DialogContainer = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <DialogHead selectedOption={selectedOption} />
      <DialogBody
        selectedOption={selectedOption}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default DialogContainer;
