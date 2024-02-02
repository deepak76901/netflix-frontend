import React from "react";
import { useDispatch } from "react-redux";
import { fetchDataByGenre } from "../store";

export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();
  return (
    <select
      className="text-white bg-zinc-800 px-4 py-1 rounded-md mt-1 mb-2 ml-9"
      onChange={(e) =>
        dispatch(fetchDataByGenre({ genre: e.target.value, type }))
      }
    >
      {genres.map((genre, index) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </select>
  );
}
