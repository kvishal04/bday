"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Breakfast',
    height: 300, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Forest',
    height: 350, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Beach',
    height: 400, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Road',
    height: 250, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Cat',
    height: 450, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Mountain',
    height: 300, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Camping',
    height: 250, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Desert',
    height: 450, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Camping',
    height: 250, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Mountain Peak',
    height: 300, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Pathway',
    height: 400, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Trees',
    height: 250, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Mountain Peak',
    height: 300, // Custom height
  },
  {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Mountain Peak',
    height: 300, // Custom height
  },
];

const ImageGrid = () => {

  const [activeIndex, setActiveIndex] = useState<number|null>(null);

    // Randomly pick an image to animate
    useEffect(() => {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setActiveIndex(randomIndex);
      }, 1000); // Change image every 2 seconds
  
      return () => clearInterval(interval);
    }, []);


  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
      {images.map((image, index) => (
        <div
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
        </div>
      ))}
    </div>
  );
};


export default ImageGrid;
