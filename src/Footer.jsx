import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Arrow to scroll to top */}
      <button
        onClick={scrollToTop}
        className="relative top-4 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white p-4 rounded-t-badge  hover:bg-gray-600 z-50"
        style={{ fontSize: '3rem' }}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <footer className="footer bg-gray-800 text-base-content p-10">
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
                placeholder="username@site.com"
                className="input input-bordered join-item"
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
