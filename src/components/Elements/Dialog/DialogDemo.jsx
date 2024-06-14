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
import axios from "axios";

const DialogDemo = ({ formData }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://666a768c7013419182cf5d89.mockapi.io/notev1/v1",
        formData
      );
      console.log("Data yang dikirim:", response.data);
      // Tambahkan logika lainnya setelah berhasil mengirim ke API
    } catch (err) {
      console.error("Error mengirim data:", err);
      // Tambahkan logika penanganan error jika diperlukan
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
          formData={formData} // Kirim formData ke DialogBody
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
