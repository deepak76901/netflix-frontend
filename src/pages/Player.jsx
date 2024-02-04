import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import video from "../assets/trailer.mp4";

function Player() {
  const navigate = useNavigate();
  return (
    <div className="h-screen relative">
      <div className="absolute top-1 left-3 hover:cursor-pointer text-white z-10 ">
        <BsArrowLeft onClick={() => navigate(-1)} className="h-10 w-auto mt-14" />
      </div>
      <iframe
        className="h-screen w-screen"
        src="https://www.youtube.com/embed/l5OAxkuq850?si=ER0Vvz8cBsS3Vcil&amp;controls=0"
        frameborder="0"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Player;
