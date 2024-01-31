import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import movieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store/index.js";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies)

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  
  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div>
      <div className="relative ">
        <img src={backgroundImage} alt="Background" className="opacity-60" />
        <div className=" absolute top-0 left-0 w-full">
          <Navbar isScrolled={isScrolled} />
        </div>
        <div className="absolute bottom-40 left-5 flex flex-col mx-4  ">
          <img src={movieLogo} alt="Logo" />
          <div className="flex items-center mx-1 my-7 gap-6 text-lg">
            <button
              className="flex items-center gap-2 font-medium bg-white rounded-sm  text-black px-2 py-1"
              onClick={() => navigate("/player")}
            >
              <FaPlay />
              Play
            </button>
            <button className="flex items-center gap-2 font-medium bg-white rounded-sm px-2 py-1 text-black">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
