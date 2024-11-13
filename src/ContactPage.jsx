// ContactPage.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


const ContactPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="bg-white py-28">
        <div className="container mx-auto px-4">
          {/* Bölüm Başlığı */}
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('contact_section.header')}
            </h2>
            <p className="text-lg text-gray-600">
            {t('contact_section.intro_paragraph')}            </p>
          </div>
          {/* İletişim Bilgileri */}
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* İletişim Detayları */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              {/* Rezervasyonlar */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaPhoneAlt className="text-[#0D92F4]  mr-2" /> {t('contact_section.contact_details.reservation_header')}
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Telefon 1:</strong>{' '}
                  <a href="tel:+903124982121" className="hover:underline">
                  {t('contact_section.contact_details.phone_numbers.0')}
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Telefon 2:</strong>{' '}
                  <a href="tel:+905558009261" className="hover:underline">
                  {t('contact_section.contact_details.phone_numbers.1')}
                  </a>
                </p>
              </div>
              {/* E-posta Adresi */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaEnvelope className="text-[#0D92F4] mr-2" /> {t('contact_section.contact_details.email_header')}
                </h3>
                <p className="text-gray-700">
                  <a href="mailto:info@bizimcati.com.tr" className="hover:underline">
                  {t('contact_section.contact_details.email')}
                  </a>
                </p>
              </div>
              {/* Adres */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-[#0D92F4] mr-2" />  {t('contact_section.contact_details.address_header')}
                </h3>
                <p className="text-gray-700">
                {t('contact_section.contact_details.address')}
                </p>
              </div>
              {/* Sosyal Medya */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4"> 
                  {t('contact_section.contact_details.social_media_header')}

                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://www.facebook.com/yourpage"
                    className="text-gray-700 hover:text-blue-600 transition duration-300"
                  >
                    <FaFacebookF size={24} />
                  </a>
                  <a
                    href="https://twitter.com/yourprofile"
                    className="text-gray-700 hover:text-blue-400 transition duration-300"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/yourprofile"
                    className="text-gray-700 hover:text-pink-600 transition duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
                  {/* Gerekirse daha fazla sosyal medya ikonu ekleyin */}
                </div>
              </div>
            </div>
            {/* Resim */}
            <div className="md:w-1/2">
              <img
                src="/images/25.jpg"
                alt="Bize Ulaşın"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
