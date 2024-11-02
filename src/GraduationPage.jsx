import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const GraduationPage = () =>{
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
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Mezuniyet Kutlaması</h2>
        <p className="text-lg text-gray-700 mb-6">
        Ankara Gölbaşı'nın eşsiz doğası içinde yer alan Bizim Çatı Restoran & Otel, mezuniyet kutlamalarınız için ideal bir mekân sunuyor. Doğayla iç içe atmosferimizde lezzetli menüler, canlı müzik ve profesyonel hizmet anlayışımızla, eğitim hayatınızın bu önemli dönüm noktasını sevdiklerinizle birlikte unutulmaz kılabilirsiniz.
        </p>
        
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

export default GraduationPage;