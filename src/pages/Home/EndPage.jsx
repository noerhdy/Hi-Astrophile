import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { lyricsData } from "@/constants";
import { toast, Toaster } from "sonner";

const EndPage = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);
  const lyricsContainerRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.5;
    const updateCurrentTime = () => setCurrentTime(audio.currentTime);

    const playTimeout = setTimeout(() => {
      audio.play().catch((error) => {
        console.log("Failed to autoplay audio:", error);
      });
    }, 5000);

    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      clearTimeout(playTimeout);
    };
  }, []);

  const getHighlightedLine = () => {
    return lyricsData.findIndex(
      (line, index) =>
        currentTime >= line.time &&
        (index === lyricsData.length - 1 ||
          currentTime < lyricsData[index + 1].time)
    );
  };

  const highlightedLineIndex = getHighlightedLine();

  useEffect(() => {
    const container = lyricsContainerRef.current;
    const highlightedElement = container.children[highlightedLineIndex];
    if (highlightedElement) {
      container.scrollTo({
        top:
          highlightedElement.offsetTop -
          container.clientHeight / 2 +
          highlightedElement.clientHeight / 2,
        behavior: "smooth",
      });
    }
  }, [highlightedLineIndex]);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      toast.success("Terimakasih cantik!"); // Pesan toaster kedua setelah 5 detik
    }, 3000);
    const timeout2 = setTimeout(() => {
      toast.success("nek koe lanang"); // Pesan toaster kedua setelah 5 detik
    }, 5000);
    const timeout3 = setTimeout(() => {
      toast.success("sepurane lek sepurane 🗿"); // Pesan toaster kedua setelah 5 detik
    }, 8000);
    const timeout4 = setTimeout(() => {
      toast.success("SUWON SISAN LEK 🗿"); // Pesan toaster kedua setelah 5 detik
    }, 8000);

    return () => {
      clearTimeout(timeout1);
    };
  }, []);

  return (
    <section className="flex flex-col min-h-screen  items-center justify-center overflow-hidden px-12 bg-[#ebebeb] ">
      <div className="w-full max-w-screen-sm min-h-screen flex flex-col-reverse  justify-center items-center ">
        <audio
          autoPlay
          loop
          ref={audioRef}
          controls
          className="w-full bg-zinc-100 rounded shadow"
        >
          <source src="/song/rc.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="flex w-full my-12  rounded-md bg-zinc-100 shadow">
          <div className="w-full rounded my-8  max-h-60 overflow-hidden first-line:">
            <div
              ref={lyricsContainerRef}
              className="lyrics relative  w-full text-center max-h-60 overflow-y-auto overflow-x-auto no-scrollbar"
            >
              {lyricsData.map((line, index) => (
                <p
                  key={index}
                  className={clsx(
                    "transition-all duration-300 ease-in-out py-1 text-wrap text-lg ",
                    index === highlightedLineIndex
                      ? "text-zinc-950 text-xl font-bold"
                      : "text-gray-700 "
                  )}
                  style={{
                    opacity: index === highlightedLineIndex ? 1 : 0.5,
                    transform:
                      index === highlightedLineIndex
                        ? "scale(1)"
                        : "scale(0.9)",
                  }}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </section>
  );
};

export default EndPage;
