import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const WeddingPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar />
      <section className="bg-white py-20 flex text-justify justify-center">
        <div className='w-full md:w-[800px] px-8 md:px-0'>
        <div className='mt-8' >
            <h2 className="text-4xl font-bold  text-gray-800 mb-6"> {t('wedding_section.header')} </h2>
            <p className="text-lg text-gray-700 mb-6">
            {t('wedding_section.intro_paragraph')}
              
            </p>
          
            
          </div>
       
          {/* Image Section */}
          <div className='w-full items-center justify-center flex mt-8 mb-16'>
          <div className="md:h-auto">
            <img
              src="/images/36.jpg"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Content Section */}
          
          </div>
          
       
       
        <div className="
           w-full
          ">
            <br />
          <strong className="text-2xl  text-gray-800"> {t('wedding_section.why_choose_us_header')}</strong>
            <br />
            
            <ul className="list-none text-lg text-gray-700 mt-12 mb-16">
  {t('wedding_section.features', { returnObjects: true }).map((feature, index) => (
    <li key={index} className="mb-6">
      <strong>{feature.bold}</strong>: {feature.text}
    </li>
  ))}
</ul>

            <strong className="text-2xl  text-gray-800"> {t('wedding_section.header3')}</strong>

            <p className="text-lg text-gray-700 mt-8 mb-16">
            {t('wedding_section.additional_paragraphs.0')}
             

            
            </p>
            <strong className="text-2xl  text-gray-800"> {t('wedding_section.header4')}</strong>
            <p className="text-lg text-gray-700 mt-8 ">

            {t('wedding_section.additional_paragraphs2.0')}
            

            <p className='mt-16 font-semibold'>{t('wedding_section.additional_paragraphs2.1')}</p>

            </p>
            <div className="container mx-auto text-left mt-4">
  <a
    href="/iletisim"
    className="inline-block mt-4 w-full flex justify-center py-3 hover:bg-[#0a72bf] bg-[#0D92F4] text-white font-semibold rounded-md  transition duration-300"
  >
   {t('wedding_section.contact_button')}
  </a>
</div>


          </div>
          </div>
      </section>
      <Footer />
    </>

    
  );
};

export default WeddingPage;
