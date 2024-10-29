import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const BBQPage = () =>{
    return(
        <>
        <Navbar/>
        <section className="bg-white py-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src='/images/10.jpg'
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* Content Section */}
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">BBQ</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <strong>Bizim Çatı Restorant</strong>, where we specialize in providing top-notch services to meet your needs. Our dedicated team ensures customer satisfaction through exceptional service and attention to detail.
        </p>
        <p className="text-lg text-gray-700">
          With years of experience, we pride ourselves on our commitment to excellence and our ability to deliver outstanding results. Join us on this journey, and let's achieve great things together.
        </p>
        <a
          href="/iletisim"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
        <Footer/>
        </>
    );
}

export default BBQPage;