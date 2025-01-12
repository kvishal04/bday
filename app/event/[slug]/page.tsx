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
                    text: "My Birthday is one of the best day i had in my life, hope i will give you the same today ❤️",
                },
                {
                    type:"image",
                    imgSrc: "/assets/bday/4mayBday/Snapchat-2009677996.jpg",
                    text: "Thankyou for such a lovely room decor, and present that u gave me and most importantly you were there for me . you are such a cutie pie 😘💋",
                },
            ],
            tag: 'mybday',
            name: 'It My Birthday 🎂',
            extraGallery: []
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/arcade22JUN/2.jpg",
                    type:"image",
                    text: "For such a long a long time i wanted to go to Arcade and you took me there , but acted as a kid there totally into me and left you i am sorry , hope next time when we will go together then we will play not me ( hehehe )",
                },
                {
                    type:"image",
                    imgSrc: "/assets/bday/arcade22JUN/Snapchat-74132284.jpg",
                    text: "We look so cute in this 🥰😊 the matching couple 💖",
                },
                {
                    type:"video",
                    imgSrc: "/assets/bday/arcade22JUN/Snapchat-1430343541.mp4",
                    text: "Enkoy the video , My Shamshing Queen ",
                },
               
            ],
            tag: 'arcade',
            name: 'Its Arcade time 🎮',
            extraGallery: []
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/diwali/12.jpeg",
                    type:"image",
                    text: "Happy diwali babe, Under the glow of a thousand diyas, your smiles shone brighter, and the warmth of togetherness made this Diwali unforgettable. 🌟❤️",
                },
                {
                    imgSrc: "/assets/bday/diwali/2.jpg",
                    type:"image",
                    text: "I really loved the way you think about decor , put your efforts in it , i wish when we live together we will make our home beautiful as much as this",
                },
                {
                    imgSrc: "/assets/bday/diwali/cracker.mp4",
                    type:"video",
                    text: "Chamakti raat, sitare saath, aur tumhaara chehra roshan, Phooljhadi ke noor mein laga jaise chand se ujala roshan.Tere hansi ke saath har shola muskuraya,Is Diwali ne phir ek naya khwab sajaya. 🌙✨",
                },
                {
                    imgSrc: "/assets/bday/diwali/13.jpeg",
                    type:"image",
                    text: "Tere ye reshmi baal or upar ye jhumke mujhe har baar tera bna jaate hai ",
                },
                
            ],
            tag: 'diwali',
            name: 'Dill waali Diwali 🪔',
            extraGallery: ['/assets/bday/diwali/1.jpg',
                '/assets/bday/diwali/2.jpg','/assets/bday/diwali/3.jpg','/assets/bday/diwali/4.jpg','/assets/bday/diwali/6.webp','/assets/bday/diwali/7.webp'
            ]
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/christmas/2.JPG",
                    type:"image",
                    text: "On this magical Christmas day, you stole the show with your beauty. Wrapped in that stunning black dress, you looked nothing short of a dream—absolutely radiant, graceful, and irresistibly captivating. Every moment with you felt like a fairy tale, and you, my love, were the glowing star of this perfect celebration. ✨🎄",
                },
                {
                    imgSrc: "/assets/bday/christmas/1.JPG",
                    type:"image",
                    text: "The Christmas tree looked absolutely beautiful, and I truly cherished every moment of that day. It was my first proper Christmas with you, and it made the holiday even more special."
                },
                {
                    imgSrc: "/assets/bday/christmas/3.JPG",
                    type:"image",
                    text: "Love you a lot my dashing queen",
                },
                
            ],
            tag: 'christmas',
            name: 'Merry Christmas Baby 🎄🎅',
            extraGallery: []
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/durgapuja/6.jpeg",
                    type:"image",
                    text: "On this beautiful Durga Puja day, you looked absolutely divine in your elegant gray saree, radiating grace and beauty with every step you took. ✨ Your presence, like the festive spirit, filled the air with warmth and love. 💖 Every glance at you took my breath away. 😍 I feel so lucky to have you in my life, and I love you more than words can express. ❤️",
                },
                {
                    imgSrc: "/assets/bday/durgapuja/2.jpg",
                    type:"image",
                    text: "Thankyou for giving me such a lovely dress. I had a blast during that week , it was so fun with you visiting all pandals , having delisoius food and clicking picture wandering around. It truly a lovely week",
                },
                {
                    imgSrc: "/assets/bday/durgapuja/1.jpg",
                    type:"image",
                    text: "Again The Matching buddies, In your eyes, the stars shine bright,A smile that makes the world feel right.Your grace, a dance of pure delight, my heart beats for you, day and night. ❤️",
                },
                
            ],
            tag: 'durgapuja',
            name: 'Jai Maa Durga 🙏🌺',
            extraGallery: ["/assets/bday/durgapuja/3.jpg","/assets/bday/durgapuja/4.jpg","/assets/bday/durgapuja/5.jpg"]
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/foodanddrinks/0.jpg",
                    type:"image",
                    text: "One of my favorite things in the world is sharing those moments with you, exploring new restaurants and tasting delicious food from our favorite spots. 🍽️ Each bite is better with you by my side, and every meal becomes a memory I cherish. It’s not just about the food, but the joy of being with you, laughing, and enjoying our time together. You make every simple activity feel so special, and I love doing this with you more than anything. ❤️",
                },
                {
                    imgSrc: "/assets/bday/foodanddrinks/1.jpg",
                    type:"image",
                    text: "Those Al jawahr kababs oof 🔥😋 , Mza hi aa gya tha kha ke , or tere sath vo mza hazaar guna bash jaata hai meri jaane man",
                },
                {
                    imgSrc: "/assets/bday/foodanddrinks/3.jpg",
                    type:"image",
                    text: "Yuuuuuuuuuuuuuuuuuuuuuuuum yuuuuuuuuuuuuuuuuuuuum  💖",
                },
                
            ],
            tag: 'foodanddrinks',
            name: 'Our Favourite Hobby 🍕🍔🍻',
            extraGallery: ["/assets/bday/foodanddrinks/2.jpg","/assets/bday/foodanddrinks/4.jpg","/assets/bday/foodanddrinks/5.jpg"]
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/randomclicks/6.jpg",
                    type:"image",
                    text: "Initially, I hated clicking photos, but ever since you came into my life, I want to capture every moment with you. 📸 I know I'm not the best at taking pictures, but I promise I'll improve and make sure I capture the most beautiful photos of you—and us—together. ❤️",
                },
                {
                    imgSrc: "/assets/bday/randomclicks/1.jpg",
                    type:"image",
                    text: "One of ours best photo having fun and chill time together ",
                },
                {
                    imgSrc: "/assets/bday/randomclicks/3.jpg",
                    type:"image",
                    text: "The gaze in your eyes kills my soul, making me want to look at you endlessly, until the dawn of this world. Love you, babe."    
                },
                
            ],
            tag: 'random',
            name: 'Its Photo time 📸',
            extraGallery: ["/assets/bday/randomclicks/4.jpg","/assets/bday/randomclicks/5.jpg"]
        },
        {
            data: [
                {
                    imgSrc: "/assets/bday/sunnyday/2.JPG",
                    type:"image",
                    text: "Idk Why but i love this day , i had recently bought the phone and it the day was so perfect warm lovable and amaizng, we were clicking picture your hair shine and bit red like love at the end and we were looking so good at that day ",
                },
                {
                    imgSrc: "/assets/bday/sunnyday/3.JPG",
                    type:"image",
                    text: "We Love us babe , We love us. Hope i coulb the sun of your life and makes you shine in this world and tells them that you are only mine and mine  ❤️",
                },
                
            ],
            tag: 'sunnyday',
            name: 'Sunny Day in Winters ☀️',
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
                {currentContentIndex !== null && currentContentIndex !== undefined ? content[currentContentIndex].name : ''}
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






