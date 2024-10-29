import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const BirthdayPage = () =>{
    return(
        <>
        <Navbar/>
        <section className="bg-white py-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src='/images/10.jpg'
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* Content Section */}
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Doğum Günü Partisi</h2>
        <p className="text-lg text-gray-700 mb-6">
        Doğum Günü Kutlamalarınızı Bizim Çatı'nın Eşsiz Atmosferinde Kutlayın
<br/>
Ankara Gölbaşı'nın huzur dolu doğasında yer alan Bizim Çatı Restoran & Otel, sevdiklerinizle birlikte unutulmaz doğum günü partilerine ev sahipliği yapıyor. Doğanın içinde, sıcak ve samimi bir ortamda özel günlerinizi taçlandırmak için mükemmel bir mekân arıyorsanız doğru yerdesiniz.
<br/>

<h4 className="text-xl font-semibold">Neden Doğum Günü Partiniz İçin Bizim Çatı'yı Seçmelisiniz?
</h4>
<br/>
Doğayla İç İçe Mekân: Yeşillikler arasında, ferah ve şık bir ortamda hem çocuklar hem de yetişkinler için ideal bir kutlama alanı sunuyoruz.
<br/>
Özel Menü Alternatifleri: Usta şeflerimizin hazırladığı lezzetli ve çeşitli menülerle misafirlerinize gastronomik bir şölen yaşatıyoruz.
<br/>
Kişiye Özel Organizasyon: İsteklerinize göre şekillenen dekorasyon ve etkinliklerle doğum günü partinizi benzersiz hale getiriyoruz.
<br/>
Eğlence Seçenekleri: Canlı müzik, DJ performansı ve çocuklar için oyun alanları gibi farklı eğlence alternatifleriyle partinizi renklendiriyoruz.

Kon<br/>forlu Konaklama: Otelimizde sunulan konaklama imkânlarıyla şehir dışından gelen misafirlerinizi rahat ettiriyoruz.
        </p>
        
        <a
          href="/iletisim"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          İletişim
        </a>
      </div>
    </div>
  </section>
        <Footer/>
        </>
    );
}

export default BirthdayPage;