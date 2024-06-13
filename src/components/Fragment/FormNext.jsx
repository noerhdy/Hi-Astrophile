import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InputForm from "../Elements/input";
import Button from "../Elements/Button/ButtonIndex";
import axios from "axios";
import Label from "../Elements/input/LabelIndex";
import { Textarea } from "../ui/textarea";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://666a768c7013419182cf5d89.mockapi.io/notev1/form",
        post
      );
      console.log("Data nama dikirim:", response.data);
    } catch (err) {
      console.error("Error mengirim data:", err);
    }
  };

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <InputForm
        label="nickname"
        type="text"
        placeholder="name as u call?"
        name="nickName"
        value={post.nickName}
        autoComplete="text"
        onChange={handleInput}
      />
      <InputForm
        label="address"
        type="text"
        placeholder="where u go home?"
        name="address"
        value={post.address}
        autoComplete="text"
        onChange={handleInput}
      />
      <InputForm
        label="place & date birth"
        type="text"
        placeholder="here"
        name="born"
        value={post.born}
        autoComplete="text"
        onChange={handleInput}
      />
      <InputForm
        label="favorite"
        type="text"
        placeholder="like, hobbies, foods, or songs that you often listen to. give me some of your like it."
        name="favorite"
        value={post.favorite}
        autoComplete="text"
        onChange={handleInput}
      />
      <Label>
        can you tell me your story
        <Textarea
          name="story"
          value={post.story}
          onChange={handleInput}
          placeholder="secara singkat saja tak perlu sampai menjadi beberapa halaman, karna di halaman selanjutnya semoga bisa mengenalmu secara langsung hehe"
        />
      </Label>

      <Button className="bg-zinc-800 w-full ease-in-out duration-200 hover:bg-black">
        Submit
      </Button>
    </form>
  );
};

export default FormNext;
