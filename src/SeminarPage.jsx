import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


const SeminarPage = () =>{
  const { t, i18n } = useTranslation();
  
    return(
        <>
        <Navbar/>
        <section className="bg-white py-16 h-screen">
    <div className="container mx-auto text-justify md:mt-20 px-4 flex flex-col md:flex-row ">
      {/* Image Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src='/images/seminar.jpg'
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* Content Section */}
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('seminar_section.header')}</h2>
        <p className="text-lg text-gray-700 mb-6">
        {t('seminar_section.intro_paragraph')}
         </p>
       
        <a
          href="/iletisim"
         className="inline-block mt-4 w-full flex justify-center py-3 hover:bg-[#0a72bf] bg-[#0D92F4] text-white font-semibold rounded-md  transition duration-300"
        >
        {t('seminar_section.contact_button')}
        </a>
      </div>
    </div>

   
  </section>
        <Footer/>
        </>
    );
}

export default SeminarPage;