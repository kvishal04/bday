"use client";
import { useState, useEffect } from "react";

const Videoframe = () => {
  return (
    <div className="flex items-start h-screen bg-gradient-to-r from-rose-300 to-fuchsia-200 text-white">
      {/* Left Side - Video */}
      <div className="w-1/2 flex items-center justify-center p-4">
        <video
          className="w-full h-auto rounded-lg shadow-2xl"
          autoPlay
          loop
          muted
          playsInline
        >
        <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4" type="video/mp4" />

          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Side - Content */}
      <div className="w-1/2 flex flex-col justify-center p-8 text-center md:text-left">
        <h1 className="text-2xl font-bold mb-4  animate-pulse">
          Explore the Beauty
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          Discover breathtaking moments through visual storytelling. Let every
          frame capture the essence of wonder, joy, and creativity. Pause, play,
          and immerse yourself in a world of imagination where every second
          counts.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-gray-900 rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Videoframe;
