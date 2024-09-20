// GalleryPage.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';


const images = [];

for (let i = 1; i <= 49; i++) {
  images.push({ src: `/images/${i}.jpg`, alt: `Description ${i}` });
}

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);


  return (<>
  <Navbar/>
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
        {images.map((image) => (
          <div key={image.src} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              loading='lazy'
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
  <Footer/>
  </>
    
  );
};

export default GalleryPage;
