import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const WeddingPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white py-20">
        <div
          className="
            container mx-auto px-4
            grid grid-cols-1 md:grid-cols-12 gap-8
          "
        >
          {/* Image Section */}
          <div className="md:col-span-5">
            <img
              src="/images/10.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Content Section */}
          <div className="md:col-span-7">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Kır Düğünü</h2>
            <p className="text-lg text-gray-700 mb-6">
              Bizim Çatı'da Hayallerinizi Süsleyen Kır Düğünleri
              <br />
              <br />
              Ankara'nın incisi Gölbaşı'nda yer alan Bizim Çatı Restoran &amp; Otel, doğanın eşsiz
              güzellikleriyle çevrili mekânında, hayatınızın en özel gününü unutulmaz kılmak için
              sizleri bekliyor. Kır düğünü konseptimizin sunduğu romantik ve doğal atmosferde,
              sevdiklerinizle birlikte masal gibi bir düğün deneyimi yaşayabilirsiniz.
            </p>
          </div>
          {/* Exceeding Content */}
          <div className="md:col-span-12">
            <strong className="text-2xl text-black">Neden Bizim Çatı Kır Düğünü?</strong>
            <br />
            <br />
            <ul className="list-none text-lg text-gray-700 mb-6">
              <li className="mb-2">
                <strong>Muhteşem Doğa Manzarası:</strong> Gölbaşı'nın eşsiz göl ve doğa manzarası
                eşliğinde, açık havada ferah bir düğün ortamı sunuyoruz.
              </li>
              <li className="mb-2">
                <strong>Özel Dekorasyon Seçenekleri:</strong> Kişisel zevklerinize uygun dekorasyon
                alternatifleriyle düğününüzü tamamen size özel hale getiriyoruz.
              </li>
              <li className="mb-2">
                <strong>Lezzetli Menü Seçenekleri:</strong> Usta şeflerimizin hazırladığı zengin
                menülerle misafirlerinize unutulmaz bir lezzet deneyimi sunuyoruz.
              </li>
              <li className="mb-2">
                <strong>Profesyonel Hizmet Anlayışı:</strong> Deneyimli ekibimiz, organizasyonun tüm
                aşamalarında yanınızda olarak her detayın kusursuz olmasını sağlıyor.
              </li>
              <li className="mb-2">
                <strong>Konaklama İmkanı:</strong> Otelimizde sunduğumuz konaklama seçenekleriyle
                şehir dışından gelen misafirlerinizi rahat ettirebilirsiniz.
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6">
              Bizim Çatı olarak, her çiftin hayalini kurduğu düğünü gerçekleştirmek için
              çalışıyoruz. İster samimi bir tören, ister görkemli bir kutlama planlayın; esnek
              paket seçeneklerimiz ve kişiselleştirilmiş hizmetlerimizle beklentilerinizi
              karşılıyoruz.
              <br />
              <br />
              <strong>Doğayla İç İçe Bir Kutlama</strong>
              <br />
              Kuş cıvıltıları, hafif esen bir rüzgâr ve doğanın tüm renkleriyle bezenmiş bir
              ortamda "Evet" demeye hazır mısınız? Kır bahçemiz, geniş alanı ve doğal güzelliğiyle
              fotoğraflarınıza da eşsiz bir fon oluşturacak.
              <br />
              <br />
              <strong>Rezervasyon ve Detaylı Bilgi İçin</strong>
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
      <Footer />
    </>
  );
};

export default WeddingPage;
