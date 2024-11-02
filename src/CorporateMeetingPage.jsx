import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const CorporateMeetingPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white py-20 min-h-screen">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Image Section */}
          <div className="md:col-span-5">
            <img
              src='/images/10.jpg'
              alt="Şirket Organizasyonları"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Content Section */}
          <div className="md:col-span-7">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Şirket Organizasyonları</h2>
            <p className="text-lg text-gray-700 mb-6">
              Tüm ekipmanlarının yanı sıra sinema düzeninde 85 kişi kapasitesiyle toplantı, kurs, seminer, konferans, workshop vb. çalışmalarınız için konferans salonu, çocuklarınızın da hoş vakit geçirebilmesi için hazırlanmış çocuk bahçesi ve çocuk oyun odası ve mini hayvanat bahçesi ile etik ve ilkeli hizmet anlayışıyla Bizim Çatı Otel Restoran hizmetinizdedir.
            </p>
            <a
              href="/iletisim"
              className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              İletişim
            </a>
          </div>
          {/* Additional Content (if any) */}
          {/* If you have more content that exceeds the initial text, you can add another div here that spans the full width */}
          {/* Example:
          <div className="md:col-span-12">
            // Additional content goes here
          </div>
          */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CorporateMeetingPage;
