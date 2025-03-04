import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9 h-[100vh]">
      <h1 className="font-extrabold text-[60px] text-center mt-16">
        <span className="bg-gradient-to-r from-[#007bff] to-[#6f42c1] bg-clip-text text-transparent">
          Smart Travel Starts Here: <br />
        </span>
        AI-Driven Itineraries at Your Fingertips!
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>

      <Link to={"/create-trip"}>
        {" "}
        <Button>Get Started, it's Free</Button>
      </Link>
    </div>
  );
}

export default Hero;
