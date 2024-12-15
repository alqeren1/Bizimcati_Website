import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation, Trans } from 'react-i18next';


const BirthdayPage = () => {
  const { t, i18n } = useTranslation();


  return (
    <>
      <Navbar />
      <section className="bg-white py-20">
        <div className="container text-justify md:mt-20 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="md:h-auto">
            <img
              src="/images/10.jpg"
              alt="Doğum Günü Partisi"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6"> 
              {t('birthday_section.header')}

            </h2>
            <div className="text-lg text-gray-700 mb-6">
              
              <p className="mb-12">
              {t('birthday_section.intro_paragraphs.1')}
              </p>
              <h3 className="text-2xl text-left text-gray-800 font-semibold mb-8">
              {t('birthday_section.header2')}
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  <strong>{t('birthday_section.li_headers.0')}</strong> {t('birthday_section.li_content.0')}
                </li>
                <li className="mb-2">
                  <strong>{t('birthday_section.li_headers.1')}</strong> {t('birthday_section.li_content.1')}
                </li>
                <li className="mb-2">
                  <strong>{t('birthday_section.li_headers.2')}</strong> {t('birthday_section.li_content.2')}
                </li>
                <li className="mb-2">
                  <strong>{t('birthday_section.li_headers.3')}</strong> {t('birthday_section.li_content.3')}
                </li>
                <li className="mb-2">
                  <strong>{t('birthday_section.li_headers.4')}</strong> {t('birthday_section.li_content.4')}
                </li>
              </ul>
            </div>
            <a
              href="/iletisim"
               className="inline-block mt-4 w-full flex justify-center py-3 hover:bg-[#0a72bf] bg-[#0D92F4] text-white font-semibold rounded-md  transition duration-300"
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

export default BirthdayPage;
