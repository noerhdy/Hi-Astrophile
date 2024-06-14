import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import DialogBody from "./DialogBody";
import DialogHead from "./DialogHead";

const DialogDemo = ({ formData, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Jika onSubmit disediakan, kirim formData ke callback onSubmit
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profil</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogHead selectedOption={selectedOption} />
        </DialogHeader>
        <DialogBody
          selectedOption={selectedOption}
          onCheckboxChange={handleCheckboxChange}
        />
        <DialogFooter>
          <Button onClick={handleSubmit} type="button">
            Konfirmasi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDemo;
