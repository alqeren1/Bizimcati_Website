import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

function Footer() {
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      if (window.scrollY > pageHeight) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Arrow to scroll to top */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={28} />
        </button>
      )}

      <footer className="footer bg-white text-neutral-content p-4 flex flex-col items-start">
        <aside className="flex items-center">
         
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
        <nav className="flex items-center">
          <div className="flex space-x-2">
            <a
              href="https://www.facebook.com/yourpage"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              className="text-gray-700 hover:text-blue-400 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              className="text-gray-700 hover:text-pink-600 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
