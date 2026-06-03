"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface CarouselProps {
  items?: {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    cta?: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
}

const defaultItems = [
  {
    id: 1,
    title: "Summer Collection 2026",
    subtitle: "New Season",
    description: "Discover the hottest trends and latest arrivals for this summer",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1600&q=80",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Premium Fashion",
    subtitle: "Exclusive",
    description: "Elevate your style with our curated collection of luxury pieces",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
    cta: "Explore Collection",
  },
  {
    id: 3,
    title: "Special Offers",
    subtitle: "Up to 50% Off",
    description: "Limited time deals on selected premium items",
    image: "https://images.unsplash.com/photo-1736322969168-7105551d1798?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cta: "View Deals",
  },
];

export const Carousel: React.FC<CarouselProps> = ({
  items = defaultItems,
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={1600}
            height={700}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="container mx-auto px-6 sm:px-12 lg:px-16">
              <div className="max-w-xl">
                {item.subtitle && (
                  <div className="inline-block mb-2 px-3 py-1 bg-[#ff6200] text-white text-xs font-semibold rounded-full shadow-lg">
                    {item.subtitle}
                  </div>
                )}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-2xl">
                  {item.title}
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed drop-shadow-lg">
                  {item.description}
                </p>
                {item.cta && (
                  <button className="group relative bg-white text-black px-6 py-3 rounded-lg font-bold text-base hover:bg-[#ff6200] hover:text-white transition-all duration-300 shadow-2xl hover:shadow-[#ff6200]/50 hover:scale-105">
                    {item.cta}
                    <svg
                      className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white p-2.5 sm:p-3 transition-all hover:scale-110 hover:bg-black/80 backdrop-blur-sm rounded-full z-20"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white p-2.5 sm:p-3 transition-all hover:scale-110 hover:bg-black/80 backdrop-blur-sm rounded-full z-20"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 shadow-lg ${
              index === currentIndex
                ? "bg-white w-10 h-3"
                : "bg-white/50 hover:bg-white/75 w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
