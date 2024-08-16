import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { lyricsData } from "@/constants";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

const EndPage2 = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 1;

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateCurrentTime);

    const playTimeout = setTimeout(() => {
      audio.play().catch((error) => {
        console.log("Failed to autoplay audio:", error);
      });
    }, 3000);

    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      clearTimeout(playTimeout);
    };
  }, []);

  useEffect(() => {
    toast.success("it's no longer important!");
    const timeout1 = setTimeout(() => {
      toast.success("am done!");
    }, 5000);
    // const timeout2 = setTimeout(() => {
    //   toast.success("semoga harimu menyenangkan 🍦");
    // }, 6000);
    // const timeout3 = setTimeout(() => {
    //   toast.success("dah dah 👋");
    // }, 8000);
    // const timeout4 = setTimeout(() => {
    //   toast.success("masih disini? 😂 ");
    // }, 64000);
    // const timeout5 = setTimeout(() => {
    //   toast.success(
    //     "btw foto awan diawal tadi aku ngambil dari sorotan ig kamu"
    //   );
    // }, 68000);
    // const timeout6 = setTimeout(() => {
    //   toast.success("maaf aku pake dan belum ijin 🙏");
    // }, 72000);
    // const timeout7 = setTimeout(() => {
    //   toast.success("udah gitu aja");
    // }, 76000);
    // const timeout8 = setTimeout(() => {
    //   toast.success("dah dah lagi 👋🤣");
    // }, 78000);

    return () => {
      clearTimeout(timeout1);
      // clearTimeout(timeout2);
      // clearTimeout(timeout3);
      // clearTimeout(timeout4);
      // clearTimeout(timeout5);
      // clearTimeout(timeout6);
      // clearTimeout(timeout7);
      // clearTimeout(timeout8);
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      navigate("/", { replace: true });
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden px-12 bg-zinc-950">
      <div className="w-full max-w-screen-sm min-h-screen flex flex-col-reverse justify-center items-center">
        <audio
          autoPlay
          loop
          ref={audioRef}
          controls
          className="w-full bg-zinc-100 rounded shadow"
        >
          <source src="/song/SENYA.mp3" type="audio/mpeg" />
        </audio>
        <div className="flex  my-12  shadow-md">
          <img
            className="object-cover max-w-full bg-center rounded-md "
            src="img/haelah.gif"
          ></img>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default EndPage2;
