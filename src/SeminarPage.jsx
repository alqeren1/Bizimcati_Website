import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const SeminarPage = () =>{
    return(
        <>
        <Navbar/>
        <section className="bg-white py-16 h-screen">
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
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Seminar & Workshop</h2>
        <p className="text-lg text-gray-700 mb-6">
        Ankara Gölbaşı'nın huzur veren doğası içinde bulunan Bizim Çatı Restoran & Otel, seminer ve workshop etkinlikleriniz için mükemmel bir mekân sunuyor. Modern ve tam donanımlı toplantı salonlarımız, profesyonel hizmet anlayışımız ve doğayla iç içe atmosferimizle, iş etkinliklerinizi verimli ve unutulmaz kılıyoruz.        </p>
       
        <a
          href="/iletisim"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          İletişim
        </a>
      </div>
    </div>
  </section>
        <Footer/>
        </>
    );
}

export default SeminarPage;