import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import video from "../assets/trailer.mp4";

function Player() {
  const navigate = useNavigate();
  return (
    <div className="h-screen relative">
      <div className="absolute top-1 left-3 hover:cursor-pointer text-white z-10 " >
        <BsArrowLeft onClick={() => navigate(-1)} className="h-10 w-auto" />
      </div>
      <video className="h-screen w-screen" src="https://www.youtube.com/watch?v=l5OAxkuq850&t=6s" autoPlay controls loop></video>
    </div>
  );
}

export default Player;
