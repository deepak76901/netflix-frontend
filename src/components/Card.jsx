import React, { useState } from "react";
import video from "../assets/trailer.mp4";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { removeFromLikedMovies } from "../store";

function Card({ movieData, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/");
  });

  const addToList = async () => {
    try {
      await axios.post("http://localhost:8080/api/user/add", {
        email,
        data: movieData,
      });
      console.log(movieData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-28 w-44 cursor-pointer relative bg-black ">
      <img
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        src={`https://image.tmdb.org/t/p/w400${movieData.image}`}
        alt="Image"
        className="h-32 rounded-lg w-auto hover:translate-x-10"
      />
      {isHovered && (
        <div
          className="w-48 z-10 max-w-64 flex flex-col hover:transition hover:scale-110 hover:ease-in-out  hover:duration-400  rounded-lg absolute -top-10 -left-2 bg-zinc-800 p-2 "
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/l5OAxkuq850?si=IFG0XRG_6mwulJge"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            onClick={() => navigate("/player")}
          ></iframe>
          <div className="h-24 max-h-24 w-auto mx-2 static z-10 bg-zinc-800 flex  flex-col overflow-hidden">
            <h3 onClick={() => navigate("/player")} className="my-1 text-sm">
              {movieData.name}
            </h3>
            <div>
              <div className="flex gap-4 mb-2 px-3 ">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                  className="h-6 w-auto hover:text-red-400"
                />
                <BiSolidLike
                  title="Like"
                  className="h-6 w-auto hover:text-red-400"
                />
                <BiSolidDislike
                  title="Dislike"
                  className="h-6 w-auto hover:text-red-400"
                />
                {isLiked ? (
                  <ImCross
                    title="Remove from Playlist"
                    className="h-5 w-auto hover:text-red-400"
                    onClick={() =>
                      dispatch(
                        removeFromLikedMovies({ movieId: movieData.id, email })
                      )
                    }
                  />
                ) : (
                  <AiOutlinePlus
                    title="Add to My List"
                    className="h-6 w-auto hover:text-red-400 "
                    onClick={addToList}
                  />
                )}
                <BiChevronDown
                  title="More Info"
                  className="h-6 w-auto hover:text-red-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <ul className="flex gap-2 text-sm">
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
