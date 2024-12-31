"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from "next/link";

const images = [
  {
    src: '/assets/bday/4mayBday/Snapchat-1120770251.jpg',
    alt: 'My B-Day 🎂',
    height: 300, // Custom height
    tag: 'mybday'
  },
  {
    src: '/assets/bday/arcade22JUN/2.jpg',
    alt: 'Arcade',
    height: 350, // Custom height
   tag: 'arcade'
  },
  {
   
    alt: 'Diwali',
    height: 400, // Custom height
    src: '/assets/bday/diwali/12.jpeg',
   tag: 'diwali'
  },
  {
   
    src: '/assets/bday/durgapuja/6.jpeg',
    alt: 'Durga Puja',
    height: 250, // Custom height
   tag: 'durgapuja'
  },
  {
  
    src: '/assets/bday/randomclicks/6.jpg',
    alt: 'Random Clicks',
    height: 450, // Custom height
   tag: 'random'
  },
  {
   
    src: '/assets/bday/sunnyday/4.JPG',
    alt: 'Sunny Day',
    height: 300, // Custom height
   tag: 'sunnyday'
  },
  {
    src: '/assets/bday/christmas/3.JPG',
    alt: 'Christmas',
    height: 250, // Custom height
   tag: 'christmas'
  },
  {
    src: '/assets/bday/foodanddrinks/0.jpg',
    alt: 'Food and Drinks',
    height: 250, // Custom height
   tag: 'foodanddrinks'
  },
 
];

const ImageGrid = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Randomly pick an image to animate
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setActiveIndex(randomIndex);
  }, 1000); // Change image every 2 seconds

    return () => clearInterval(interval);
 
  }, []);

  // Intersection Observer to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const gridElement = document.getElementById("image-grid");
    if (gridElement) {
      observer.observe(gridElement);
    }

    return () => {
      if (gridElement) observer.unobserve(gridElement);
    };
  }, []);

  return (
    <div
      id="image-grid"
      className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 p-6 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {images.map((image, index) => (
        <Link
          href={`/event?tag=${image.tag}`}
          key={index}
          className={`relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-1000 ease-out ${
            activeIndex === index ? "animate-grow-shrink" : ""
          }`}
          style={{ gridRowEnd: `span ${Math.ceil(image.height / 100)}` }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={image.height}
            className="w-full h-full object-cover aspect-square"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 text-white transition-opacity duration-300">
            <h2 className="text-lg font-bold">{image.alt}</h2>
            <p className="text-sm">A floating animation effect!</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageGrid;
