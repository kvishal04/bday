"use client";
import React, { useEffect, useState, useRef } from "react";
import Particles from "react-tsparticles";

const BirthdayPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [wasManuallyPaused, setWasManuallyPaused] = useState(false); // Track if music was manually paused
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Ensure we are rendering client-side
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Countdown Timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date("2025-01-13");
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

    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // // Autoplay audio when user interacts
  useEffect(() => {
    const enableAudioOnGesture = () => {
      const audio = document.getElementById("birthdayMusic") as HTMLAudioElement;
      if (audio && !hasUserInteracted) {
        audio.muted = true; // Start muted
        audio.play().then(() => {
          audio.muted = false; // Unmute on user gesture
          setHasUserInteracted(true);
          setIsPlaying(true);
        }).catch((err) => console.error("Audio play failed:", err));
      }
    };

    const handleGesture = () => {
      enableAudioOnGesture();
      document.removeEventListener("click", handleGesture);
      document.removeEventListener("scroll", handleGesture);
    };

    document.addEventListener("click", handleGesture);
    document.addEventListener("scroll", handleGesture);

    return () => {
      document.removeEventListener("click", handleGesture);
      document.removeEventListener("scroll", handleGesture);
    };
  }, [hasUserInteracted]);

  // // Handle visibility of the button and the play/pause action based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const audio = document.getElementById("birthdayMusic") as HTMLAudioElement;
      if (!buttonRef.current || !audio || wasManuallyPaused) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the button is visible
      const isButtonVisible = rect.top >= 0 && rect.bottom <= windowHeight;

      if (!isButtonVisible && isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else if (isButtonVisible && !isPlaying) {
        audio.play();
        setIsPlaying(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying, wasManuallyPaused]);

  // Toggle music play/pause with manual control
  const toggleMusic = () => {
    const audio = document.getElementById("birthdayMusic") as HTMLAudioElement;
    if (isPlaying) {
      audio.pause();
      setWasManuallyPaused(true); // Mark as manually paused
    } else {
      audio.play();
      setWasManuallyPaused(false); // Reset manual pause flag
    }
    setIsPlaying(!isPlaying);
  };

  const herPhotoUrl = "/assets/bday/randomclicks/5.jpg";

  return (
    <div className="relative flex flex-col items-center justify-center p-12 bg-animated-gradient text-gray-800 overflow-hidden">
      {/* Render particles */}
      

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
          ref={buttonRef}
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
