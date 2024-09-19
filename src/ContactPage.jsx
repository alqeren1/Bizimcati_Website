// ContactPage.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            For your reservations and inquiries, reach out to us through any of the following methods.
          </p>
        </div>
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Contact Details */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* Reservations */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaPhoneAlt className="text-blue-600 mr-2" /> For Your Reservations
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Phone 1:</strong> <a href="tel:+903124982121" className="hover:underline">+90 312 498 21 21</a>
              </p>
              <p className="text-gray-700">
                <strong>Phone 2:</strong> <a href="tel:+905558009261" className="hover:underline">+90 555 800 92 61</a>
              </p>
            </div>
            {/* Email Address */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaEnvelope className="text-blue-600 mr-2" /> Our Email Address
              </h3>
              <p className="text-gray-700">
                <a href="mailto:info@bizimcati.com.tr" className="hover:underline">info@bizimcati.com.tr</a>
              </p>
            </div>
            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">We're on Social Media</h3>
              <div className="flex space-x-6">
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
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src= '/images/1.jpg'
              alt="Contact Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
    
  );
};

export default ContactPage;
