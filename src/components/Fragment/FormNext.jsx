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
        label="nickname"
        type="text"
        placeholder="name as u call?"
        name="nickName"
        value={post.nickName}
        autoComplete="off"
        onChange={handleInput}
      />
      <InputForm
        label="address"
        type="text"
        placeholder="where u go home?"
        name="address"
        value={post.address}
        autoComplete="off"
        onChange={handleInput}
      />
      <InputForm
        label="place & date birth"
        type="text"
        placeholder="here"
        name="born"
        value={post.born}
        autoComplete="off"
        onChange={handleInput}
      />
      <InputForm
        label="favorite"
        type="text"
        placeholder="like, hobbies, foods, or songs that you often listen to. give me some of your like it."
        name="favorite"
        value={post.favorite}
        autoComplete="off"
        onChange={handleInput}
      />
      <Label>
        can you tell me your story
        <Textarea
          name="story"
          value={post.story}
          onChange={handleInput}
          placeholder="hehehehehehhe 🗿"
          // placeholder="secara singkat saja tak perlu sampai menjadi beberapa halaman, karna di halaman selanjutnya semoga bisa mengenalmu secara langsung hehe"
        />
      </Label>
      <DialogDemo formData={post} /> {/* Mengirim formData ke DialogDemo */}
    </form>
  );
};

export default FormNext;
