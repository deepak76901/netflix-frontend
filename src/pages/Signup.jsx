import React, { useEffect, useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase.config.js";
import {useNavigate} from "react-router-dom"

export default function Signup() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [disableSignupButton, setDisableSignupButton] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleSignupButton = () =>{
    setDisableSignupButton(true)
  }
  const handleSignup = async () => {
    try {
      handleSignupButton()
      const { email, password } = formValues;
      const userCredentials = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(userCredentials.user);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/")
  })

  return (
    <div className="relative  ">
      <BackgroundImage />

      <div className="absolute top-1 left-0 text-white flex flex-col w-full items-center justify-center">
        <div className="w-full">
          <Header login />
        </div>
        <div className="grid ">
          <div className="flex flex-col items-center  justify-center mt-6">
            <h1 className="text-5xl font-bold italic">
              Unlimited Movies,TV shows and more
            </h1>
            <h4 className="text-3xl my-4 font-medium italic">
              Watch anywhere. Cancel anytime.
            </h4>
            <h6 className="text-2xl mb-4 font-medium">
              Ready to watch? Enter your email to create or restart your
              membership
            </h6>
          </div>
          <div className="flex flex-col ">
            <div className="text-xl m-5 grid grid-cols-4">
              <input
                className={
                  !showPassword
                    ? "px-3 py-2 rounded-sm text-black focus:outline-none col-span-3 "
                    : "px-3 py-2 rounded-sm text-black focus:outline-none col-span-2 "
                }
                type="email"
                placeholder="Email address"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              {showPassword ? (
                <input
                  className={
                    showPassword &&
                    "px-3 py-2 border-black border-l-2 rounded-sm text-black focus:outline-none col-span-2"
                  }
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              ) : (
                <button
                  onClick={() => setShowPassword(true)}
                  className=" rounded-sm   px-3 py-1 bg-red-600 text-white col-span-1 "
                >
                  Get Started
                </button>
              )}
            </div>
            <div className="flex justify-center">
              {!disableSignupButton && (
                <button
                  onClick={handleSignup}
                  className="bg-red-600 text-white px-6 py-2 rounded-sm text-xl mt-2 "
                >
                  Sign up
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
