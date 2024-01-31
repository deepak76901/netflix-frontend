import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase.config";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

function Navbar({isScrolled}) {
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/my-list" },
  ];

  const handleSignOut = async () => {
    try {
      const data = await signOut(firebaseAuth);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseAuth,(currentUser) =>{
    if(!currentUser) navigate("/login")
  })

  return (
    <>
      <nav className={`flex w-full fixed h-16 py-2 items-center ${isScrolled ? "bg-zinc-900" : "font-semibold"}`}>
        <div>
          <img src={logo} alt="Netflix" className="h-20 w-auto mx-5" />
        </div>
        <ul className="flex gap-5 w-1/4 text-lg justify-center items-center">
          {links.map(({ name, link }) => {
            return (
              <li>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center items-center absolute right-4 gap-4 mx-5">
          {showSearch && (
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-1 text-black outline-none rounded-sm"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setInputHover(false);
                setShowSearch(false);
              }}
            />
          )}
          <button
            onFocus={() => setShowSearch(true)}
            onBlur={() => {
              if (!inputHover) setShowSearch(false);
            }}
          >
            <FaSearch />
          </button>
          <button
            className="bg-red-600 text-white text-xl px-5 py-1 rounded-sm"
            onClick={handleSignOut}
          >
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
