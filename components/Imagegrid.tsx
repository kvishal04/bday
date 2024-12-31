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
    src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Forest',
    height: 350, // Custom height
   tag: 'arcade'
  },
  {
    src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Beach',
    height: 400, // Custom height
   tag: 'diwali'
  },
  {
    src: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Road',
    height: 250, // Custom height
   tag: 'durgapuja'
  },
  {
    src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Cat',
    height: 450, // Custom height
   tag: 'random'
  },
  {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Mountain',
    height: 300, // Custom height
   tag: 'sunnyday'
  },
  {
    src: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Camping',
    height: 250, // Custom height
   tag: 'christmas'
  },
  {
    src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Desert',
    height: 450, // Custom height
   tag: 'holi'
  },
  {
    src: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Camping',
    height: 250, // Custom height
   tag: 'aniversary'
  },
  {
    src: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Camping',
    height: 250, // Custom height
   tag: 'yourselfies'
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
