import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation, Trans } from 'react-i18next';


const BBQPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="bg-white py-20 text-justify justify-center flex">
        <div className='w-full md:w-[800px] px-8 md:px-0'>
          {/* Image Section */}
         
          {/* Content Section */}
          <div className='mt-8'>
            <h2 className="text-4xl font-bold text-gray-800 mb-12">
              {t('bbq_section.headers.0')}
            </h2>
            <div className="text-lg text-gray-700 mb-6">
              <h2 className="text-2xl font-semibold mb-4">{t('bbq_section.headers.1')}</h2>
              <p className="mb-4 text-lg">
              {t('bbq_section.paragraphs.0')}
              </p>

             
          </div>
        <div className="md:h-auto">
            <img
              src="/images/bbq.jpg"
              alt="BBQ ve Mangal"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        
            
</div>
<br/>
<div className="container  mt-12 grid grid-cols-1 mx-auto items-center text-gray-700">
          
        <h3 className="text-2xl font-semibold ">
          {t('bbq_section.headers.2')}
          </h3>
          <div className='mt-4 text-lg'>
              <p className="mb-12">
              {t('bbq_section.paragraphs.1')}
              </p>

              <h3 className="text-2xl font-semibold mb-4">{t('bbq_section.headers.3')}</h3>
              <p className="mb-12">
              {t('bbq_section.paragraphs.2')}
              </p>

              <h3 className="text-2xl font-semibold mb-4">{t('bbq_section.headers.4')}</h3>
              <ul className="list-disc list-inside mb-12">
                <li><strong> {t('bbq_section.li_headers.0')}</strong>: {t('bbq_section.li_content.0')}</li>
                <li><strong>{t('bbq_section.li_headers.1')}</strong>: {t('bbq_section.li_content.1')}</li>
                <li><strong>{t('bbq_section.li_headers.2')}</strong>: {t('bbq_section.li_content.2')}</li>
                <li><strong>{t('bbq_section.li_headers.3')}</strong>: {t('bbq_section.li_content.3')}</li>
              </ul>

              <p>
              {t('bbq_section.paragraphs.3')}
              </p>
              </div>

              <div className="container mx-auto text-left">
  <a
    href="/iletisim"
    className="inline-block mt-4 w-full flex justify-center py-3 hover:bg-[#0a72bf] bg-[#0D92F4] text-white font-semibold rounded-md  transition duration-300"
  >
    {t('contact_section.header')}
  </a>
</div>
            </div>
            </div>
      </section>
      <Footer />
    </>
  );
};

export default BBQPage;
