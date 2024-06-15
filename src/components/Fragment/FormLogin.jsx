import React, { useState } from "react";
import Button from "../Elements/Button/ButtonIndex";
import InputForm from "../Elements/input";
import { Navigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

const FormLogin = () => {
  const [fullName, setFullName] = useState("");
  const [navigate, setNavigate] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fullName.length < 10) {
      toast.error("Full name must be at least 10 characters long."); // Tampilkan toast error jika validasi gagal
      return; // Jangan melakukan navigasi jika validasi gagal
    }
    // Validasi berhasil, lanjutkan dengan navigasi
    localStorage.setItem("fullName", fullName);
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to={`/v1?fullName=${encodeURIComponent(fullName)}`} />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputForm
          label=""
          type="text"
          placeholder="here"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
        <div className="w-full flex  justify-end items-end">
          <Button
            type="submit"
            className="bg-zinc-800 w-full ease-in-out duration-200 hover:bg-black"
          >
            next
          </Button>
        </div>
        <Toaster />
      </form>
    </>
  );
};

export default FormLogin;
