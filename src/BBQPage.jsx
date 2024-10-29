import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const BBQPage = () =>{
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
        <h2 className="text-4xl font-bold text-gray-800 mb-6">BBQ</h2>
        <p className="text-lg text-gray-700 mb-6">
        Barbekü veya barbekü (İngiltere ve ABD’de gayri resmi olarak BBQ, Avustralya’da barbie ve Güney Afrika’da braai), yiyecekleri pişirmek için canlı ateş ve duman kullanan çeşitli pişirme yöntemlerini tanımlamak için önemli bölgesel ve ulusal varyasyonlarla kullanılan bir terimdir. Terim genellikle bu yöntemlerle ilişkili cihazlara, bu yöntemlerin ürettiği daha geniş mutfaklara ve bu tarz yemeklerin pişirildiği ve servis edildiği yemekler veya toplantılara da uygulanır. Barbekü ile ilgili pişirme yöntemleri önemli ölçüde farklılık gösterir, ancak çoğu açık havada pişirmeyi içerir.
<br/><br/>
Barbekünün çeşitli bölgesel varyasyonları, genel olarak doğrudan veya dolaylı ısıtma kullanan yöntemler olarak kategorize edilebilir. Dolaylı barbeküler, etin odun veya odun kömürü üzerinde kavrularak veya tütsülenerek ısıtıldığı Kuzey Amerika mutfağı ile ilişkilidir. Bu barbekü yöntemleri, düşük sıcaklıklarda ve uzun pişirme sürelerinde (birkaç saat) duman kullanarak pişirmeyi içerir. Başka yerlerde, barbekü daha yaygın olarak ısının daha doğrudan uygulanması, sıcak kömürler veya gaz üzerinde yiyeceklerin ızgara edilmesi anlamına gelir. Bu teknik genellikle birkaç dakika boyunca doğrudan, kuru ısı veya sıcak ateşte yapılır. Bu daha geniş kategoriler içinde başka ulusal ve bölgesel farklılıklar da vardır.
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
        <Footer/>
        </>
    );
}

export default BBQPage;