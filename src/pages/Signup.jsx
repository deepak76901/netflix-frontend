import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

export default function Signup() {
  return (
    <div className="relative  ">
      <BackgroundImage />

      <div className="absolute top-1 left-0 text-white flex flex-col w-full items-center justify-center">
        <Header login />
        <div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold italic">
              Unlimited Movies,TV shows and more
            </h1>
            <h4 className="text-2xl my-3 font-medium">
              Watch anywhere. Cancel anytime.
            </h4>
            <h6 className="text-xl  font-medium">
              Ready to watch? Enter your email to create or restart your
              membership
            </h6>
          </div>
          <div className="text-xl ">
            <input
              className="px-3 rounded-sm"
              type="email"
              placeholder="Email address"
              name="email"
            />

            <input
              className="px-3 mx-2 rounded-sm"
              type="password"
              placeholder="Password"
              name="password"
            />
            <button className="bg-white rounded-sm text-black text-xl mt-2 px-3">
              Get Started
            </button>
          </div>
          <div className="flex justify-center">
            <button className="bg-white rounded-sm text-black text-xl mt-2 px-3">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
