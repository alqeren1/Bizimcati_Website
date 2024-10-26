// HomeCarousel.jsx
import React, { useState, useEffect } from 'react';

const HomeCarousel = () => {
  // Define the images for the carousel
  const images = [];
  for (let i = 5; i <= 10; i++) {
    images.push({ src: `/images/${i}.jpg`, alt: `Slide ${i}` });
  }

  // State to keep track of the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Functions to handle navigation
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={image.src} className="w-full flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className={`h-96 mx-auto transition-transform duration-500 ease-in-out ${
                index === currentIndex ? 'scale-100' : 'scale-50'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPreviousSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={goToNextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? 'bg-white' : 'bg-gray-400'
            } focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
