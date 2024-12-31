"use client";
import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

const BirthdayPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  // Make sure we are on the client-side before rendering dynamic content
  useEffect(() => {
    setIsClient(true); // This will ensure the component only updates in the client
    setIsVisible(true)
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date('2025-01-13');
      const diff = target.getTime() - now.getTime();
    
      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    // Set up timer to update every second
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById("birthdayMusic") as HTMLAudioElement;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const herPhotoUrl = "/assets/bday/randomclicks/5.jpg"; 

  return (
    <div className="relative flex flex-col items-center justify-center p-12 bg-animated-gradient text-gray-800 overflow-hidden">
      {/* Render particles only on the client-side */}
      {isClient && (
        <Particles
          options={{
            particles: {
              number: { value: 40 },
              size: { value: 3 },
              move: { speed: 1 },
              opacity: { value: 0.3 },
              line_linked: { enable: false },
            },
          }}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Fade-in Container */}
      <div
        className={`relative z-10 flex flex-col items-center text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-handwritten text-pink-600 animate-float">
          Happy Birthday 🎂, My Love!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Today is all about you. Thank you for filling my life with love and joy.
        </p>

        {/* Photo Section */}
        <div className="mt-8 relative glass w-64 h-64 md:w-72 md:h-72 rounded-full shadow-lg overflow-hidden border-4 border-purple-300">
          <img
            src={herPhotoUrl}
            alt="Her Beautiful Smile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Countdown Section */}
        <div className="mt-6 text-purple-700">
          <h2 className="text-lg font-semibold">Countdown to Midnight</h2>
          <p className="text-2xl font-bold">
            {timeLeft.days} days, {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </div>

        {/* Music Control Button */}
        <button
          onClick={toggleMusic}
          className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors"
        >
          {isPlaying ? "Pause Music" : "Play Music 🎵"}
        </button>
      </div>

      {/* Audio Element */}
      <audio id="birthdayMusic" src="/assets/happy-birthday-to-you-piano-version-13976.mp3" loop></audio>
    </div>
  );
};

export default BirthdayPage;
