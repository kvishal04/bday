"use client";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";

const EventPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentContentIndex, setCurrentContextIndex] = useState<number | null>(null);
    const tag = useParams()?.slug as string;
    const startX = useRef(0);
    const endX = useRef(0);

    const  content = [
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
                    imgSrc: "/assets/bday/arcade22JUN/2.jpg",
                    type:"image",
                    text: "Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.",
                },
                {
                    type:"image",
                    imgSrc: "/assets/bday/arcade22JUN/Snapchat-74132284.jpg",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                {
                    type:"video",
                    imgSrc: "/assets/bday/arcade22JUN/Snapchat-1430343541.mp4",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                {
                    type:"image",
                    imgSrc: "/assets/bday/arcade22JUN/Snapchat-865649172.jpg",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
            ],
            tag: 'arcade',
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
            tag: 'diwali',
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
                    imgSrc: "/assets/bday/durgapuja/6.jpeg",
                    type:"image",
                    text: "Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.",
                },
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
        {
            data: [
                {
                    imgSrc: "/assets/bday/randomclicks/6.jpg",
                    type:"image",
                    text: "Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity. Diwali is the festival of lights, joy, and togetherness. It brings families closer and fills the atmosphere with happiness and prosperity.",
                },
                {
                    imgSrc: "/assets/bday/randomclicks/1.jpg",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                {
                    imgSrc: "/assets/bday/randomclicks/3.jpg",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                
            ],
            tag: 'random',
            extraGallery: ["/assets/bday/randomclicks/4.jpg","/assets/bday/randomclicks/5.jpg"]
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/sunnyday/2.JPG",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                {
                    imgSrc: "/assets/bday/sunnyday/3.JPG",
                    type:"image",
                    text: "The vibrant decorations, sparkling lights, and mouth-watering sweets are what make Diwali truly magical.",
                },
                
            ],
            tag: 'sunnyday',
            extraGallery: ["/assets/bday/sunnyday/4.JPG","/assets/bday/sunnyday/5.JPG"]
        },
        
    ];
    


    useEffect(() => {
        if (tag) {
            setCurrentContextIndex([...content].map((x) => x.tag).indexOf(tag));
        }
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, [tag]);

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        endX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (length: number) => {
        const deltaX = endX.current - startX.current;
        if (deltaX > 50) {
            // Swipe right
            setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
        } else if (deltaX < -50) {
            // Swipe left
            setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
        }
        startX.current = 0;
        endX.current = 0;
    };

    return (

            <div className="flex flex-col items-center justify-start bg-gradient-to-b from-pink-200 via-white to-purple-100 p-4 md:p-8">
                <h1 className="text-4xl md:text-5xl font-handwritten text-purple-600 mb-8">
                    Welcome to the Event
                </h1>
                {currentContentIndex !== null && currentContentIndex !== undefined ? (
                    <div className="flex flex-col gap-12 w-full max-w-5xl">
                        {content[currentContentIndex].data.map((item, index) => (
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

                        {/* Swipeable Carousel for extraGallery */}
                        {content[currentContentIndex].extraGallery.length > 0 ? (
                            <div className="w-full mt-8">
                                <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">
                                    Additional Gallery
                                </h2>
                                <div
                                    className="relative w-full overflow-hidden"
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={() => handleTouchEnd(content[currentContentIndex].extraGallery.length)}
                                >
                                    <div
                                        className="flex transition-transform duration-500"
                                        style={{
                                            transform: `translateX(-${currentSlide * 100}%)`,
                                        }}
                                    >
                                        {content[6].extraGallery.map((imgSrc, index) => (
                                            <div key={index} className="min-w-full">
                                                <img
                                                    src={imgSrc}
                                                    alt={`Gallery Image ${index + 1}`}
                                                    className="w-full aspect-square rounded-lg shadow-md"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Indicators */}
                                <div className="flex justify-center mt-4 gap-2">
                                    {content[currentContentIndex].extraGallery.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-purple-600" : "bg-gray-300"}`}
                                            onClick={() => setCurrentSlide(index)}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>

    );
};

export default EventPage;






