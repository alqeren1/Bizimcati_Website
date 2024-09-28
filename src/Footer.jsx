import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

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

      <footer className="footer bg-white text-base-200 p-10">
        {/* Existing content */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        
        <nav>
          <h6 className="footer-title">Social Media</h6>
          <div className="flex space-x-2">
            <a href="https://www.facebook.com/yourpage" className="text-gray-700 hover:text-blue-600 transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com/yourprofile" className="text-gray-700 hover:text-blue-400 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/yourprofile" className="text-gray-700 hover:text-pink-600 transition duration-300">
              <FaInstagram size={24} />
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder=".."
                className="input input-bordered join-item bg-gray-200"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </>
  );
}

export default Footer;
