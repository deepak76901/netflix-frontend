import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikedMovies, fetchMovies, getGenres } from "../store/index.js";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase.config.js";
import { useNavigate } from "react-router-dom";

export default function MyList() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movies = useSelector((state) => state.netflix.movies);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/");
  });

  useEffect(() => {
    if (email) {
      dispatch(fetchLikedMovies(email));
    }
  }, [email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className="flex">
      <Navbar isScrolled={isScrolled} />
      <div>
        <h1 className="text-3xl font-semibold text-white mt-20 ml-10">
          My List
        </h1>
        <div className="ml-6 mt-8 h-screen w-screen  grid grid-cols-6 ">
          {movies ? (
            movies.map((movie, index) => {
              return (
                <Card
                  movieData={movie}
                  index={index}
                  key={movie.id}
                  isLiked={true}
                />
              );
            })
          ) : (
            <h1>Your List is Empty</h1>
          )}
        </div>
      </div>
    </div>
  );
}
