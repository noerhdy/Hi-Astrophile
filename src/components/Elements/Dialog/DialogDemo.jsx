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

import { Navigate, useNavigate } from "react-router-dom"; // Menggunakan useNavigate
import { useState } from "react";

const DialogDemo = ({ formData }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = async () => {
    try {
      formData.time = new Date().toLocaleString();
      const response = await axios.post(
        "https://666a768c7013419182cf5d89.mockapi.io/notev1/v1",
        formData
      );
      console.log("Data yang dikirim:", response.data);
      // Navigasi ke halaman '/end' setelah berhasil mengirim ke API
      navigate("/end"); // Menggunakan navigate untuk navigasi
    } catch (err) {
      console.error("Error mengirim data:", err);
      // Tambahkan logika penanganan error jika diperlukan
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-zinc-950 rounded-full w-1/2 text-zinc-100 ">
            next
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] w-[90vw] rounded-md shadow">
          <DialogHeader>
            <DialogHead selectedOption={selectedOption} />
          </DialogHeader>
          <DialogBody
            selectedOption={selectedOption}
            onCheckboxChange={handleCheckboxChange}
            formData={formData}
          />
          <DialogFooter>
            <Button
              className="rounded-full"
              onClick={handleSubmit}
              type="button"
            >
              Konfirmasi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogDemo;
