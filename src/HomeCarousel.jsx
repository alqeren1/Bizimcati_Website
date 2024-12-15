import React, { useState, useEffect } from "react";

const HomeCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dynamically load the images
  useEffect(() => {
    const importImages = async () => {
      const imageFiles = import.meta.glob(
        "/public/carouselPhotos/*.{jpg,jpeg,png}"
      );
      const imageEntries = Object.keys(imageFiles);

      // Sort the entries to ensure consistent order
      const sortedImages = imageEntries
        .sort()
        .slice(0, 6) // Get the first 5 images
        .map((image) => ({
          src: image.replace(/^\/public/, ""), // Remove /public prefix
          alt: `Slide ${image}`,
        }));

      setImages(sortedImages);
    };

    importImages();
  }, []);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

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
    <div className="relative w-full mb-16 overflow-hidden bg-gray-100">
      {images.length > 0 ? (
        <>
          <div className="container mx-auto px-4 xs:px-1 sm:px-0 relative">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={image.src} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`h-96 xl:h-[500px] 2xl:h-[700px] w-full object-cover sm:rounded-3xl rounded-lg transition-transform duration-500 ease-in-out ${
                      index === currentIndex ? "scale-100" : "scale-50"
                    }`}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={goToPreviousSlide}
              aria-label="Previous Slide"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 active:bg-gray-900 active:bg-opacity-100 bg-opacity-50 text-white rounded-full p-3 focus:outline-none z-10 active:scale-90 transition-transform duration-200"
            >
              &#10094;
            </button>

            <button
              onClick={goToNextSlide}
              aria-label="Next Slide"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 active:bg-gray-900 active:bg-opacity-100 bg-opacity-50 text-white rounded-full p-3 focus:outline-none z-10 active:scale-90 transition-transform duration-200"
            >
              &#10095;
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === idx ? "bg-white" : "bg-gray-400"
                  } focus:outline-none active:scale-125 transition-transform duration-200`}
                ></button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default HomeCarousel;
