import "../index.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoginSection from "./LoginSection";
import LoadingSection from "./LoadingSection";
import DialogDemo from "@/components/Elements/Dialog/DialogDemo";

function IndexHome() {
  // const [notes, setNotes] = useState([]);

  // const getNotes = async () => {
  //   try {
  //     let response = await axios.get(
  //       "https://666a768c7013419182cf5d89.mockapi.io/notev1/notev1"
  //     );
  //     console.log(response.data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  // useEffect(() => {
  //   getNotes();
  // });

  return (
    <>
      <section className="flex flex-col min-h-screen items-center overflow-hidden">
        <LoginSection />
        <LoadingSection />
      </section>
    </>
  );
}

export default IndexHome;
