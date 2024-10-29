import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const CorporateMeetingPage = () =>{
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
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Şirket Organizasyonları</h2>
        <p className="text-lg text-gray-700 mb-6">
        Bizim Çatı Otel Restoran; göle sıfır, her mevsim farklı güzelliklerin yaşandığı, çim alan üzerine meyve ve diğer ağaçlarla yeşillendirilmiş, yaklaşık bin kişilik kendin pişir kendin ye tarzında hizmet veren barbekü alanı yanı sıra açık ve kapalı restoranları farklı mekânlarda (havuz başı ve kır alanı restoran) yemek, kokteyl, düğün, sünnet düğünü vb. organizasyonlar için emsalsiz fiziki koşulları ile siz değerli misafirlerimizin hizmetindedir.
<br/><br/>
Ayrıca tamamı göl manzaralı odalarımızda konforlu bir gün geçirebilirsiniz. Açık hava spor tesislerinde mini çim sahada futbol, basketbol, voleybol ve tenis gibi aktiviteleri gerçekleştirmenin yanı sıra su sporları, olta balıkçılığı vb. hobiler için kullanılabilecek iskelesi de bulunmaktadır.
<br/><br/>
Tüm ekipmanlarının yanı sıra sinema düzeninde 85 kişi kapasitesiyle toplantı, kurs, seminer, konferans, workshop vb. çalışmalarınız için konferans salonu, çocuklarınızın da hoş vakit geçirebilmesi için hazırlanmış çocuk bahçesi ve çocuk oyun odası ve mini hayvanat bahçesi ile etik ve ilkeli hizmet anlayışıyla Bizim Çatı Otel Restoran hizmetinizdedir.        </p>
        
        <a
          href="/iletisim"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
        <Footer/>
        </>
    );
}

export default CorporateMeetingPage;