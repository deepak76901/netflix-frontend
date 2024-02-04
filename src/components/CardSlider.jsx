import React, { useRef, useState } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CardSlider({ title, data }) {
  // const [showControls, setShowControls] = useState(false);
  // const [move, setMove] = useState("");
  return (
    <>
      <h3 className="w-full text-3xl px-10 py-3 font-medium text-white bg-zinc-900/90">
        {title}
      </h3>
      <div
        className="flex overflow-x-auto h-72 relative overflow-hidden"
        // onMouseEnter={() => setShowControls(true)}
        // onMouseLeave={() => setShowControls(false)}
      >
        {/* <div className="flex absolute justify-between w-full top-28 z-20">
          {showControls && (
            <span
              className="flex items-center bg-red-500 text-black rounded-md "
              onClick={() => setMove("translate-x-48")}
            >
              <FaChevronLeft className="h-10 w-auto p-3" />
            </span>
          )}
          {showControls && (
            <span
              className="flex items-center bg-red-500 text-black rounded-md "
              onClick={() => setMove("-translate-x-48")}
            >
              <FaChevronRight className="h-10 w-auto p-3" />
            </span>
          )}
        </div> */}

        <div className={`gap-6 flex pl-4 py-4 justify-center items-center duration-300 relative `}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default CardSlider;
