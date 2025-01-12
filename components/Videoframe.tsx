"use client";
import { useState, useEffect } from "react";

const Videoframe = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-rose-300 to-fuchsia-200 text-white">
      {/* Content */}
      <div className="w-full max-w-screen-lg flex flex-col justify-center p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 animate-pulse">My True Beauty</h1>
        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          The way your eyes shines in this video hope the shine will remain same , Luv u babe 
        </p>

        {/* Video Section */}
        <div className="w-full h-auto rounded-lg shadow-2xl">
        <div
        dangerouslySetInnerHTML={{
          __html: `<video class="app__backgroundVideo" autoplay loop muted playsinline>
            <source src='/assets/bday/k.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>`,
        }}
        
        />
          {/* <video
            className="w-full h-auto rounded-lg shadow-2xl"
            src="/assets/bday/eyes.mp4"
            autoPlay
            muted
            controls
          >
          </video> */}
        </div>

        
      </div>
    </div>
  );
};

export default Videoframe;
