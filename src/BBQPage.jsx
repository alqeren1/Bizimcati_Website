import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation, Trans } from 'react-i18next';


const BBQPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="md:h-auto">
            <img
              src="/images/bbq.jpg"
              alt="BBQ ve Mangal"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t('bbq_section.headers.0')}
            </h2>
            <div className="text-lg text-gray-700 mb-6">
              <h2 className="text-2xl font-semibold mb-4">{t('bbq_section.headers.1')}</h2>
              <p className="mb-4 text-base">
              {t('bbq_section.paragraphs.0')}
              </p>

             
          </div>
        </div>
        
            
</div>
<br/>
<div className="container px-4 grid grid-cols-1 mx-auto items-center text-black">
          
        <h3 className="text-xl font-semibold mb-2">
          {t('bbq_section.headers.2')}
          </h3>
              <p className="mb-4">
              {t('bbq_section.paragraphs.1')}
              </p>

              <h3 className="text-xl font-semibold mb-2">{t('bbq_section.headers.3')}</h3>
              <p className="mb-4">
              {t('bbq_section.paragraphs.2')}
              </p>

              <h3 className="text-xl font-semibold mb-2">{t('bbq_section.headers.4')}</h3>
              <ul className="list-disc list-inside mb-4">
                <li><strong> {t('bbq_section.li_headers.0')}</strong>: {t('bbq_section.li_content.0')}</li>
                <li><strong>{t('bbq_section.li_headers.1')}</strong>: {t('bbq_section.li_content.1')}</li>
                <li><strong>{t('bbq_section.li_headers.2')}</strong>: {t('bbq_section.li_content.2')}</li>
                <li><strong>{t('bbq_section.li_headers.3')}</strong>: {t('bbq_section.li_content.3')}</li>
              </ul>

              <p>
              {t('bbq_section.paragraphs.3')}
              </p>

              <div className="container mx-auto text-left">
  <a
    href="/iletisim"
    className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
  >
    {t('contact_section.header')}
  </a>
</div>
            </div>
      </section>
      <Footer />
    </>
  );
};

export default BBQPage;
