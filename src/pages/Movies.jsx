import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store/index.js";
import Slider from "../components/Slider.jsx";
import Navbar from '../components/Navbar.jsx';
import NotAvailable from '../components/NotAvailable.jsx';
import SelectGenre from '../components/SelectGenre.jsx';

export default function Movies() {

    const [isScrolled, setIsScrolled] = useState(false);
    const dispatch = useDispatch();
  
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
  
    useEffect(() => {
      dispatch(getGenres());
    }, []);
  
    useEffect(() => {
      if (genresLoaded) dispatch(fetchMovies({ type: "movie" }));
    }, [genresLoaded]);
  
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };

  return (
    <div className='flex'>
      <Navbar isScrolled={isScrolled} />
      <div className='mt-16' >
      <SelectGenre genres={genres} type="movie" />
      { movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </div>
  )
}
