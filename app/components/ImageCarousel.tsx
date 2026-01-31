"use client";

import Image from "next/image";
import { useState } from "react";

type ImageCarouselProps = {
  images: string[];
  name: string;
};

export default function ImageCarousel({ images, name }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      goToNext();
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      goToPrevious();
    }
  };

  return (
    <div className="relative mb-6">
      {/* Main Image Container */}
      <div
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full">
              <Image
                className="rounded-2xl w-full object-cover"
                src={image}
                alt={`${name} - Image ${index + 1}`}
                width={800}
                height={600}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6"
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

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6"
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

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gray-800 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}