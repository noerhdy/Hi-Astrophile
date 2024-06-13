import React, { useState } from "react";
import Button from "../Elements/Button/ButtonIndex";
import InputForm from "../Elements/input";
import axios from "axios";

const FormLogin = () => {
  const [post, setPost] = useState({
    fullName: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Data yang akan dikirim:", post); // Verifikasi nilai sebelum pengiriman
      const response = await axios.post(
        "https://666a768c7013419182cf5d89.mockapi.io/notev1/form",
        post
      );
      console.log("Data nama dikirim:", response.data);
      // Tambahkan logika tambahan di sini jika diperlukan (misalnya reset form atau mengarahkan ke halaman lain)
    } catch (err) {
      console.error("Error mengirim data:", err);
      // Tambahkan logika penanganan kesalahan di sini jika diperlukan
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label=""
        type="text"
        placeholder="in here"
        name="fullName"
        value={post.fullName}
        autoComplete="text"
        onChange={handleInput}
      />

      <Button className="bg-zinc-800 w-full ease-in-out duration-200 hover:bg-black">
        Submit
      </Button>
    </form>
  );
};

export default FormLogin;
