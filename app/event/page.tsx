"use client";
import React, { useEffect, useState } from "react";

const EventPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const count = 4;
    const content = [
        {
            data: [
                {
                    imgSrc: "/assets/bday/4mayBday/Snapchat-1120770251.jpg",
                    type:"image",
                    text: "Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.",
                },
                {
                    type:"image",
                    imgSrc: "/assets/bday/4mayBday/Snapchat-2009677996.jpg",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
            ],
            tag: 'mybday',
            extraGallery: []
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/diwali/12.jpeg",
                    type:"image",
                    text: "Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.",
                },
                {
                    imgSrc: "/assets/bday/diwali/2.jpg",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                {
                    imgSrc: "/assets/bday/diwali/11.mp4",
                    type:"video",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                {
                    imgSrc: "/assets/bday/diwali/13.jpeg",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                
            ],
            tag: 'mybday',
            extraGallery: ['/assets/bday/diwali/1.jpg',
                '/assets/bday/diwali/2.jpg','/assets/bday/diwali/3.jpg','/assets/bday/diwali/4.jpg','/assets/bday/diwali/6.webp','/assets/bday/diwali/7.webp'
            ]
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/christmas/2.JPG",
                    type:"image",
                    text: "Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.",
                },
                {
                    imgSrc: "/assets/bday/christmas/1.JPG",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                {
                    imgSrc: "/assets/bday/christmas/3.JPG",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                
            ],
            tag: 'christmas',
            extraGallery: []
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/durgapuja/2.jpg",
                    type:"image",
                    text: "Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.",
                },
                {
                    imgSrc: "/assets/bday/durgapuja/1.jpg",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                
            ],
            tag: 'durgapuja',
            extraGallery: ["/assets/bday/durgapuja/3.jpg","/assets/bday/durgapuja/4.jpg","/assets/bday/durgapuja/5.jpg"]
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/foodanddrinks/0.jpg",
                    type:"image",
                    text: "Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.",
                },
                {
                    imgSrc: "/assets/bday/foodanddrinks/1.jpg",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                {
                    imgSrc: "/assets/bday/foodanddrinks/3.jpg",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                
            ],
            tag: 'foodanddrinks',
            extraGallery: ["/assets/bday/foodanddrinks/2.jpg","/assets/bday/foodanddrinks/4.jpg","/assets/bday/foodanddrinks/5.jpg"]
        },
        
    ];

    const handlePrevSlide = (length: number) => {
        setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    const handleNextSlide = (length: number) => {
        setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col items-center justify-start bg-gradient-to-b from-pink-200 via-white to-purple-100 p-4 md:p-8">
            <h1 className="text-4xl md:text-5xl font-handwritten text-purple-600 mb-8">
                Welcome to the Event
            </h1>

            <div className="flex flex-col gap-12 w-full max-w-5xl">
                {content[count].data.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center justify-between gap-4 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Image Section */}
                        <div className="w-[75%] mb-4 md:mb-0">
                            {item.type === "image" ? (
                                <img
                                    src={item.imgSrc}
                                    alt={`Event Image ${index + 1}`}
                                    className="w-full aspect-auto rounded-lg shadow-md"
                                />
                            ) : (
                                <video
                                    controls
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                    loop
                                    playsInline
                                >
                                    <source src={item.imgSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>

                        {/* Text Section */}
                        <p
                            className={`w-full md:w-[50%] text-black text-lg md:text-xl px-4 leading-relaxed transition-all duration-1000 ${isVisible ? "fade-in-words" : "opacity-0"}`}
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

                {/* Carousel for extraGallery */}
                {content[count].extraGallery.length > 0 ? 
                <div className="w-full mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">
                        Additional Gallery
                    </h2>
                    <div className="relative w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                        >
                            {content[count].extraGallery.map((imgSrc, index) => (
                                <div key={index} className="min-w-full">
                                    <img
                                        src={imgSrc}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="w-full aspect-square rounded-lg shadow-md"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Navigation */}
                        <button
                            onClick={() => handlePrevSlide(content[count].extraGallery.length)}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-2 shadow-lg"
                        >
                            ◀
                        </button>
                        <button
                            onClick={() => handleNextSlide(content[count].extraGallery.length)}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-2 shadow-lg"
                        >
                            ▶
                        </button>
                    </div>
                    {/* Indicators */}
                    <div className="flex justify-center mt-4 gap-2">
                        {content[count].extraGallery.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-purple-600" : "bg-gray-300"}`}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        ))}
                    </div>
                </div>
                : <></> }
            </div>
        </div>
    );
};

export default EventPage;



