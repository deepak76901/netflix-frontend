import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import video from "../assets/trailer.mp4";

function Player() {
  const navigate = useNavigate();
  return (
    <div className="h-screen relative">
      <div className="absolute top-1 left-3 hover:cursor-pointer text-white z-10 ">
        <BsArrowLeft onClick={() => navigate(-1)} className="h-10 w-auto" />
      </div>
      <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/l5OAxkuq850?si=IFG0XRG_6mwulJge"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
    </div>
  );
}

export default Player;
