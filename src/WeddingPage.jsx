import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const WeddingPage = () =>{
    return(
        <>
        <Navbar/>
        <section className="bg-white py-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
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
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Kır Düğünü</h2>
        <p className="text-lg text-gray-700 mb-6">
        Bizim Çatı'da Hayallerinizi Süsleyen Kır Düğünleri
<br/><br/>
Ankara'nın incisi Gölbaşı'nda yer alan Bizim Çatı Restoran & Otel, doğanın eşsiz güzellikleriyle çevrili mekânında, hayatınızın en özel gününü unutulmaz kılmak için sizleri bekliyor. Kır düğünü konseptimizin sunduğu romantik ve doğal atmosferde, sevdiklerinizle birlikte masal gibi bir düğün deneyimi yaşayabilirsiniz.
<br/><br/>
<h4 className="text-xl font-semibold">Neden Bizim Çatı Kır Düğünü?
</h4>
<br/>
<ul className="list-none">
  <li>Muhteşem Doğa Manzarası: Gölbaşı'nın eşsiz göl ve doğa manzarası eşliğinde, açık havada ferah bir düğün ortamı sunuyoruz.
  </li>
  <br/>
  <li>Özel Dekorasyon Seçenekleri: Kişisel zevklerinize uygun dekorasyon alternatifleriyle düğününüzü tamamen size özel hale getiriyoruz.
  </li>
  <br/>
  <li>
  Lezzetli Menü Seçenekleri: Usta şeflerimizin hazırladığı zengin menülerle misafirlerinize unutulmaz bir lezzet deneyimi sunuyoruz.
  </li>
  <br/>
  <li>Profesyonel Hizmet Anlayışı: Deneyimli ekibimiz, organizasyonun tüm aşamalarında yanınızda olarak her detayın kusursuz olmasını sağlıyor.
  </li>
  <br/>
  <li>Konaklama İmkanı: Otelimizde sunduğumuz konaklama seçenekleriyle şehir dışından gelen misafirlerinizi rahat ettirebilirsiniz.
  </li>
  <br/>
</ul>

Bizim Çatı olarak, her çiftin hayalini kurduğu düğünü gerçekleştirmek için çalışıyoruz. İster samimi bir tören, ister görkemli bir kutlama planlayın; esnek paket seçeneklerimiz ve kişiselleştirilmiş hizmetlerimizle beklentilerinizi karşılıyoruz.
<br/><br/>
Doğayla İç İçe Bir Kutlama
Kuş cıvıltıları, hafif esen bir rüzgâr ve doğanın tüm renkleriyle bezenmiş bir ortamda "Evet" demeye hazır mısınız? Kır bahçemiz, geniş alanı ve doğal güzelliğiyle fotoğraflarınıza da eşsiz bir fon oluşturacak.
<br/><br/>
Rezervasyon ve Detaylı Bilgi İçin


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

export default WeddingPage;