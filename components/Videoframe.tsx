"use client";
import { useState, useEffect } from "react";

const Videoframe = () => {
  return (
    <div className="flex flex-col md:flex-row items-start  bg-gradient-to-r from-rose-300 to-fuchsia-200 text-white">
    {/* Right Side - Content */}
    <div className="w-full flex flex-col justify-center p-8 text-center md:text-left">
      <h1 className="text-2xl font-bold mb-4 animate-pulse">
        Explore the Beauty
      </h1>
      <p className="text-lg leading-relaxed text-gray-600 mb-4">
        Discover breathtaking moments through visual storytelling. Let every
        frame capture the essence of wonder, joy, and creativity.

      </p>
  
      {/* Video and Paragraph mix */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex-shrink-0 mb-4 md:mr-4">
          <video
            className="w-full h-auto rounded-lg shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-lg leading-relaxed text-gray-600">
          Pause, play, and immerse yourself in a world of imagination where
          every second counts.
          Discover breathtaking moments through visual storytelling. Let every
        frame capture the essence of wonder, joy, and creativity.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, perferendis quos omnis obcaecati ullam voluptatum magnam dolorem modi vitae libero eos enim qui soluta aperiam, blanditiis nobis quaerat eveniet nihil?
        At ipsa expedita culpa blanditiis quaerat tenetur atque officia debitis minima accusantium quisquam laborum illo dolore qui eligendi odit numquam, dignissimos natus provident dolorem dolor amet sint dolores repudiandae. Asperiores.
        Reprehenderit architecto aut consequuntur commodi facere ipsa eum nemo, numquam minima ad sint distinctio voluptatum enim. Blanditiis perspiciatis magnam dolor officiis accusamus esse pariatur fugit harum, nulla neque eos at!
        </p>
      </div>
  
      <button className="mt-8 px-6 py-3 bg-white text-gray-900 rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300">
        Learn More
      </button>
    </div>
  </div>
  
  );
};

export default Videoframe;
