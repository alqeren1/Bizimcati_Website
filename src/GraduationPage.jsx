import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation, Trans } from 'react-i18next';


const GraduationPage = () =>{
  const { t, i18n } = useTranslation();


    return(

<>
<Navbar />
<section className="bg-white py-20">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Image Section */}
    <div className="md:h-auto">
      <img
        src="/images/38.jpg"
        alt="Doğum Günü Partisi"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
    {/* Content Section */}
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('graduation_section.header')}</h2>
      <div className="text-lg text-gray-700 mb-6">
        <p className="mb-4">
        {t('graduation_section.intro_paragraphs.0')}
                </p>
        <p className="mb-4">
        {t('graduation_section.intro_paragraphs.1')}
        </p>
       
      </div>
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
}

export default GraduationPage;