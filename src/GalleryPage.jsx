// GalleryPage.jsx
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  { src: './assets/images/1.jpg', alt: 'Description 1' },
  { src: './assets/images/2.jpg', alt: 'Description 1' },
  // Add more images
];

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600">
            Explore photos of our beautiful restaurant and delicious dishes.
          </p>
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
              />
            </div>
          ))}
        </div>
        {/* Lightbox */}
        {open && (
          <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={images}
          />
        )}
      </div>
    </section>
  );
};

export default GalleryPage;
