import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { lyricsData } from "@/constants";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

const EndPage = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);
  const lyricsContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.5;

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
    // toast.success("OK");
    const timeout1 = setTimeout(() => {
      toast.success("Terima Kasih 🌻");
    }, 4000);
    const timeout2 = setTimeout(() => {
      toast.success("semoga harimu menyenangkan 🍦");
    }, 6000);
    const timeout3 = setTimeout(() => {
      toast.success("semangat, dah dah 👋");
    }, 8000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
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
    <section className="flex flex-col min-h-screen items-center  justify-center overflow-hidden px-12 bg-[#ebebeb]">
      <div className="w-full max-w-screen-sm min-h-screen flex flex-col-reverse justify-center items-center">
        <audio
          autoPlay
          loop
          ref={audioRef}
          controls
          className="w-full bg-zinc-100 rounded-2xl shadow"
        >
          <source src="/song/rc.mp3" type="audio/mpeg" />
        </audio>
        <div className="flex w-full my-12 rounded-2xl bg-zinc-100 shadow-xl">
          <div className="w-full rounded my-8 max-h-60 overflow-hidden">
            <div
              ref={lyricsContainerRef}
              className="lyrics relative w-auto text-start max-h-60 mx-6 overflow-y-auto no-scrollbar"
            >
              {lyricsData.map((line, index) => (
                <p
                  key={index}
                  className={clsx(
                    "transition-all duration-300 ease-in-out py-2 text-wrap text-lg",
                    index === highlightedLineIndex
                      ? "text-zinc-900 text-xl font-bold "
                      : "text-gray-700"
                  )}
                  style={{
                    opacity: index === highlightedLineIndex ? 1 : 0.5,
                    transform:
                      index === highlightedLineIndex ? "scale(1)" : "scale(1)",
                  }}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default EndPage;
