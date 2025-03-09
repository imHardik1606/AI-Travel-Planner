import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  const features = [
    {
      title: "Perfect Itinerary for Any Budget",
      description: "Plan your dream trip with a personalized itinerary tailored to your budget.",
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&q=80",
    },
    {
      title: "Day-by-Day Travel Plan",
      description: "Get a detailed, time-optimized itinerary for each day of your trip.",
      image: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=800&q=80",
    },
    {
      title: "Powered by Gemini AI",
      description: "Experience AI-driven recommendations that enhance your travel experience.",
      image: "https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&q=80",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center text-white text-center px-6 h-[100vh] md:px-10 py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1600&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-[#ffcc33] via-[#ff6b6b] to-[#007bff] bg-clip-text text-transparent">
              Smart Travel Starts Here:
            </span>
            <br className="hidden md:block" />
            AI-Driven Itineraries at Your Fingertips!
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Your personal AI-powered trip planner, crafting tailor-made itineraries  
            to match your interests, budget, and travel dreams.
          </p>

          <Link to={"/create-trip"}>
            <Button className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#007bff] text-white hover:opacity-90 transition-all shadow-lg">
              Get Started – It’s Free!
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose <span className="text-[#007bff]">TripMate?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 group bg-white text-gray-900"
            >
              {/* Feature Image */}
              <div className="relative w-full h-48 bg-gray-200">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-80"
                />
              </div>

              {/* Feature Content */}
              <div className="p-6 text-center bg-white group-hover:bg-gradient-to-r group-hover:from-[#007bff] group-hover:to-[#ff6b6b] transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-white transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200 mt-2 transition-all duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
