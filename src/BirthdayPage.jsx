import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const BirthdayPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Doğum Günü Partisi</h2>
            <div className="text-lg text-gray-700 mb-6">
              <p className="mb-4">
                Doğum Günü Kutlamalarınızı Bizim Çatı'nın Eşsiz Atmosferinde Kutlayın
              </p>
              <p className="mb-4">
                Ankara Gölbaşı'nın huzur dolu doğasında yer alan Bizim Çatı Restoran &amp; Otel,
                sevdiklerinizle birlikte unutulmaz doğum günü partilerine ev sahipliği yapıyor.
                Doğanın içinde, sıcak ve samimi bir ortamda özel günlerinizi taçlandırmak için
                mükemmel bir mekân arıyorsanız doğru yerdesiniz.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Neden Doğum Günü Partiniz İçin Bizim Çatı'yı Seçmelisiniz?
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  <strong>Doğayla İç İçe Mekân:</strong> Yeşillikler arasında, ferah ve şık bir
                  ortamda hem çocuklar hem de yetişkinler için ideal bir kutlama alanı sunuyoruz.
                </li>
                <li className="mb-2">
                  <strong>Özel Menü Alternatifleri:</strong> Usta şeflerimizin hazırladığı lezzetli
                  ve çeşitli menülerle misafirlerinize gastronomik bir şölen yaşatıyoruz.
                </li>
                <li className="mb-2">
                  <strong>Kişiye Özel Organizasyon:</strong> İsteklerinize göre şekillenen
                  dekorasyon ve etkinliklerle doğum günü partinizi benzersiz hale getiriyoruz.
                </li>
                <li className="mb-2">
                  <strong>Eğlence Seçenekleri:</strong> Canlı müzik, DJ performansı ve çocuklar
                  için oyun alanları gibi farklı eğlence alternatifleriyle partinizi
                  renklendiriyoruz.
                </li>
                <li className="mb-2">
                  <strong>Konforlu Konaklama:</strong> Otelimizde sunulan konaklama imkânlarıyla
                  şehir dışından gelen misafirlerinizi rahat ettiriyoruz.
                </li>
              </ul>
            </div>
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

export default BirthdayPage;
