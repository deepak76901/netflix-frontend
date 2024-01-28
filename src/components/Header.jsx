import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  return (
    <div className="text-xl flex ">
      <div>
        <img className="h-36 w-auto" src={logo} alt="Netflix Logo" />
      </div>
      <div className="flex items-center justify-center ">
        <button
          onClick={() => navigate(props.login ? "/login" : "/signup")}
          className="bg-red-600 text-white px-5 py-2  my-2 rounded-md"
        >
          {props.login ? "Log in" : "Sign in"}
        </button>
      </div>
    </div>
  );
}

export default Header;
