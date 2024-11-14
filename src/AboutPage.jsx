import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';


const AboutPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <> 
    <Navbar></Navbar>
    <section className="bg-white py-28">
    <div className="container text-justify md:mt-10 mx-auto px-4
            grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="md:h-auto">
        <img
          src='/images/10.jpg'
          alt="About Us"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      {/* Content Section */}
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6"> 
          {t('about_page.header')}
        </h2>
        <p className="text-lg text-gray-700 mb-6">
        {t('about_page.paragraphs.0')}

        </p>
        <p className="text-lg text-gray-700">
        {t('about_page.paragraphs.1')}
        <br/><br/>
        {t('about_page.paragraphs.2')}<br/><br/>
        {t('about_page.paragraphs.3')}<br/><br/>
        {t('about_page.paragraphs.4')}        </p>
        <a
          href="/iletisim"
          className="inline-block mt-4 w-full flex justify-center py-3 hover:bg-[#0a72bf] bg-[#0D92F4] text-white font-semibold rounded-md  transition duration-300"
        >
            {t('contact_section.header')}
        </a>
      </div>
    </div>
  </section>
  <Footer></Footer>
  </>
   
  );
};

export default AboutPage;