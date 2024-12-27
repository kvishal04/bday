"use client"
import React, { useEffect, useState } from "react";

const EventPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const content = [
    {
      imgSrc: "/assets/bday/4mayBday/Snapchat-1120770251.jpg",
      text: "Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.",
    },
    {
      imgSrc: "/assets/bday/4mayBday/Snapchat-2009677996.jpg",
      text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
    },
    {
      imgSrc: "/assets/bday/arcade22JUN/Snapchat-865649172.jpg",
      text: "Every moment of Diwali reminds us of the victory of light over darkness, and good over evil.",
    },
  ];

  return (
        <div className="flex flex-col items-center justify-start bg-gradient-to-b from-pink-200 via-white to-purple-100 p-4 md:p-8">
          <h1 className="text-4xl md:text-5xl font-handwritten text-purple-600 mb-8">
            Welcome to the Event
          </h1>
    
          <div className="flex flex-col gap-12 w-full max-w-5xl">
            {content.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between gap-4 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="w-full md:w-[30%] mb-4 md:mb-0">
                  <img
                    src={item.imgSrc}
                    alt={`Event Image ${index + 1}`}
                    className="w-full aspect-auto rounded-lg shadow-md"
                  />
                </div>
    
                {/* Text Section */}
                <p
                  className={`w-full md:w-[50%] text-black text-lg md:text-xl px-4 leading-relaxed transition-all duration-1000 ${
                    isVisible ? "fade-in-words" : "opacity-0"
                  }`}
                >
                  {item.text.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className="inline-block opacity-0 animate-word-fade"
                      style={{
                        animationDelay: `${i * 100}ms`,
                      }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
export default EventPage;

