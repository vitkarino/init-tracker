import "./background.scss";
import { useState, useEffect } from "react";

const backgrounds = [
  "src\\assets\\backgrounds\\bg-1.jpg",
  "src\\assets\\backgrounds\\bg-2.jpg",
  "src\\assets\\backgrounds\\bg-3.jpg",
  "src\\assets\\backgrounds\\bg-4.jpg",
  "src\\assets\\backgrounds\\bg-5.jpg",
  "src\\assets\\backgrounds\\bg-6.jpg",
];

export default function Background() {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [fadingState, setFadingState] = useState("fading-in");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadingState("fading-out");

      const changeBackgroundTimeout = setTimeout(() => {
        setCurrentBackground(
          (prevIndex) => (prevIndex + 1) % backgrounds.length
        );
        setFadingState("fading-in"); 
      }, 2000); 

      return () => clearTimeout(changeBackgroundTimeout);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="background-container">
      <img
        src={backgrounds[currentBackground]}
        alt=""
        className={`background-image ${fadingState}`}
      />
    </div>
  );
}
