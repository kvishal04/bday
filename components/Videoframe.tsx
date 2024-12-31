"use client";
import { useState, useEffect } from "react";

const Videoframe = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-rose-300 to-fuchsia-200 text-white">
      {/* Content */}
      <div className="w-full max-w-screen-lg flex flex-col justify-center p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 animate-pulse">Explore the Beauty</h1>
        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          Discover breathtaking moments through visual storytelling. Let every
          frame capture the essence of wonder, joy, and creativity.
        </p>

        {/* Video Section */}
        <div className="w-full">
          <video
            className="w-full h-auto rounded-lg shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/assets/bday/arcade22JUN/Snapchat-1430343541.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Pause, play, and immerse yourself in a world of imagination where every second counts.
        </p>
      </div>
    </div>
  );
};

export default Videoframe;
