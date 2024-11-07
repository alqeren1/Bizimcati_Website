import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const WeddingPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />
      <section className="bg-white py-20">
        <div
          className="
            container mx-auto px-4
            grid grid-cols-1 md:grid-cols-2 gap-8
          "
        >
          {/* Image Section */}
          <div className="md:h-auto">
            <img
              src="/images/36.jpg"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Content Section */}
          <div >
            <h2 className="text-4xl font-bold text-gray-800 mb-6"> {t('wedding_section.header')} </h2>
            <p className="text-lg text-gray-700 mb-6">
            {t('wedding_section.intro_paragraph')}
              
            </p>
          
            
          </div>

          
        </div>
        <div className="
            container mx-auto px-4
            grid grid-cols-1  gap-2
          ">
            <br />
          <strong className="text-2xl text-black"> {t('wedding_section.why_choose_us_header')}</strong>
            <br />
            
            <ul className="list-none text-lg text-gray-700 mb-6">
              <li className="mb-2">
              {t('wedding_section.features.0')}
              </li>
              <li className="mb-2">
              {t('wedding_section.features.1')}
              </li>
              <li className="mb-2">
              {t('wedding_section.features.2')}
              </li>
              <li className="mb-2">
              {t('wedding_section.features.3')}
              </li>
              <li className="mb-2">
              {t('wedding_section.features.4')}
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6">
            {t('wedding_section.additional_paragraphs.0')}
              <br />
              <br />
              
              {t('wedding_section.additional_paragraphs.1')}
              <br />
              <br />
              {t('wedding_section.additional_paragraphs.2')}
              <br />
              <br />
              <br />
              <strong>{t('wedding_section.additional_paragraphs.3')}</strong>
            </p>
            <div className="container mx-auto text-left">
  <a
    href="/iletisim"
    className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
  >
   {t('wedding_section.contact_button')}
  </a>
</div>


          </div>
        
      </section>
      <Footer />
    </>

    
  );
};

export default WeddingPage;
