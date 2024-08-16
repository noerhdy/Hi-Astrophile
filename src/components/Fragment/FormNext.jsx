import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InputForm from "../Elements/input";
import Button from "../Elements/Button/ButtonIndex";
import Label from "../Elements/input/LabelIndex";
import { Textarea } from "../ui/textarea";
import DialogDemo from "../Elements/Dialog/DialogDemo";

const FormNext = () => {
  const location = useLocation();
  const [post, setPost] = useState({
    fullName: "",
    nickName: "",
    address: "",
    born: "",
    favorite: "",
    story: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fullName = params.get("fullName");
    if (fullName) {
      setPost((prevState) => ({ ...prevState, fullName }));
    }
  }, [location.search]);

  // Menangani perubahan input
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  return (
    <form autoComplete="off">
      <InputForm
        label="name"
        type="text"
        placeholder="hai, bisa aku panggil dengan siapa ini"
        name="nickName"
        value={post.nickName}
        autoComplete="off"
        onChange={handleInput}
      />
      <InputForm
        label="address"
        type="text"
        placeholder=" pakettt"
        name="address"
        value={post.address}
        autoComplete="off"
        onChange={handleInput}
      />
      <InputForm
        label="place & date birth"
        type="text"
        placeholder="tebak bintang, bintangku ada 5...🎵"
        name="born"
        value={post.born}
        autoComplete="off"
        onChange={handleInput}
      />
      <InputForm
        label="favorite"
        type="text"
        placeholder="nyebutin 5 dapet mie ayam hahaha"
        name="favorite"
        value={post.favorite}
        autoComplete="off"
        onChange={handleInput}
      />
      <Label>
        {/* can you tell me about you */}
        <Textarea
          clas
          name="story"
          value={post.story}
          onChange={handleInput}
          placeholder="ceritakan tentang dirimu, kek interview gak tuh wkwkw"
        />
      </Label>
      <div className="w-full flex  justify-end items-end">
        <DialogDemo formData={post} />
      </div>
    </form>
  );
};

export default FormNext;
