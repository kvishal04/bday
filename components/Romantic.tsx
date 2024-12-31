"use client";
import React, { useEffect, useState, useRef } from "react";
import Particles from "react-tsparticles";

const BirthdayPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
    setIsVisible(true);
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

    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Toggle Music
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Automatically play/pause music based on visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          audioRef.current?.play();
          setIsPlaying(true);
        } else {
          audioRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 } // Play music when at least 50% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const herPhotoUrl = "/assets/bday/randomclicks/5.jpg";

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center p-12 bg-animated-gradient text-gray-800 overflow-hidden"
    >
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

        <div className="mt-8 relative glass w-64 h-64 md:w-72 md:h-72 rounded-full shadow-lg overflow-hidden border-4 border-purple-300">
          <img
            src={herPhotoUrl}
            alt="Her Beautiful Smile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-6 text-purple-700">
          <h2 className="text-lg font-semibold">Countdown to Midnight</h2>
          <p className="text-2xl font-bold">
            {timeLeft.days} days, {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </div>

        <button
          onClick={toggleMusic}
          className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors"
        >
          {isPlaying ? "Pause Music" : "Play Music 🎵"}
        </button>
      </div>

      <audio
        ref={audioRef}
        id="birthdayMusic"
        src="/assets/happy-birthday-to-you-piano-version-13976.mp3"
        loop
      ></audio>
    </div>
  );
};

export default BirthdayPage;
