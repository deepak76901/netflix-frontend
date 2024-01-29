import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase.config.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formValues;
      const userCredentials = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(userCredentials.user);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className="relative  ">
      <BackgroundImage />

      <div className="absolute top-1 left-0 text-white flex flex-col w-full items-center justify-center">
        <div className="w-full">
          <Header login />
        </div>
        <form className="flex flex-col w-1/3 mt-20 ">
          <div className="flex justify-center items-center my-3">
            <div className="text-3xl font-medium">Login Page</div>
          </div>
          <input
            className="focus:outline-none text-black  text-xl my-1 px-2 py-1 rounded-sm"
            type="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, [e.target.name]: e.target.value })
            }
          />
          <input
            className="focus:outline-none text-black text-xl my-1 px-2 py-1 rounded-sm"
            type="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, [e.target.name]: e.target.value })
            }
          />
          <div className="flex justify-center items-center text-xl">
            <button
              onClick={handleLogIn}
              className="bg-red-600 text-white px-6 py-2 rounded-sm mt-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
