import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import MyList from "./pages/MyList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Netflix />} /> 
        <Route exact path="/player" element={<Player />} /> 
        <Route exact path="/movies" element={<Movies />} /> 
        <Route exact path="/tv" element={<TVShows />} /> 
        <Route exact path="/my-list" element={<MyList />} /> 
      </Routes>
    </BrowserRouter>
  );
}
