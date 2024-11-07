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
    <div className="container mx-auto px-4
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
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Hakkımızda</h2>
        <p className="text-lg text-gray-700 mb-6">
        Bizim Çatı Hotel Restorant, Ankara’nın en güzel yerlerinden biri olan Gölbaşı Mogan Gölü kıyısında, her mevsim farklı güzelliklerin yaşandığı, doğa ile iç içe olan, lezzetli yemekleri ve makul fiyatlarıyla, güler yüzlü personeli ve kaliteli servisi ile hoş zaman geçirebileceğiniz bir mekândır.


        </p>
        <p className="text-lg text-gray-700">
        Ayrıca dönemsel olarak yapılan ve oldukça beğeni toplayan çoban ateşi etrafında sucuk ızgara sıcak şarap partileri, hamsi barbekü partileri, yılbaşı eğlenceleri vb. etkinlikler işletme ile özdeşleşmiş keyifli ve unutulmaz etkinliklerinden bazılarıdır.
<br/><br/>
Bizim Çatı Hotel Restoran, ailenizle birlikte huzur ve güvenle konaklayabileceğiniz odaları, toplantılarınız ve iş çalışmalarınız için kullanabileceğiniz toplantı salonu, farklı lezzetlerin sunulduğu gölün kıyısında ki restoranıyla,  düğün, nişan, sünnet düğünü, toplu yemek, şirket piknikleri vb. etkinlikleri düzenleyebileceğiniz salkım söğüt ve diğer ağaçlarla bezeli bin kişilik kır alanı ve gölün kıyısında yer alan dört yüz kişilik havuz başı alanı ile özel günlerinizin unutulmaz anılara dönüşmesi yönünde ki tecrübesi ve servis kalitesi ile sizlerin hizmetindedir.
<br/><br/>
Bizim Çatı Hotel Restoran, açık ve kapalı oyun alanları ve mini hayvanat bahçesi ile çocuklarınızın da keyifli zaman geçirebilmesi için gerekli donanıma sahiptir.
<br/><br/>
Evinizin sıcaklığını ve rahatlığını aratmayacak güzel bir gün için sizleri de Bizim Çatı Hotel Restorana bekliyoruz.
        </p>
        <a
          href="/iletisim"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
  <Footer></Footer>
  </>
   
  );
};

export default AboutPage;