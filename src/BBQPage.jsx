import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const BBQPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="md:h-auto">
            <img
              src="/images/10.jpg"
              alt="BBQ ve Mangal"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">BBQ ve Mangal</h2>
            <div className="text-lg text-gray-700 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Barbekünün ve Mangalın Eşsiz Lezzetlerine Hoş Geldiniz!</h2>
              <p className="mb-4">
                Canlı ateşin başında, mis gibi duman kokuları eşliğinde pişen etlerin ve sebzelerin tadına kim hayır diyebilir?
                Dünyanın dört bir yanında farklı isimlerle anılan bu eşsiz pişirme yöntemi, İngiltere ve ABD'de "BBQ",
                Avustralya'da "barbie", Güney Afrika'da "braai" ve bizim kültürümüzde "mangal" olarak bilinir. Her kültürün
                kendine özgü barbekü ve mangal gelenekleri vardır, ancak hepsinin ortak noktası ateşin ve dumanın büyüsüdür.
              </p>

              <h3 className="text-xl font-semibold mb-2">Mangalın Tadını Çıkarın</h3>
              <p className="mb-4">
                Mangal, Türk kültüründe sadece bir pişirme yöntemi değil, aynı zamanda dostlukların pekiştiği,
                keyifli sohbetlerin yapıldığı bir gelenektir. Restoranımızda bu geleneği en lezzetli haliyle yaşatıyoruz.
                Özel marinasyonlarla hazırlanan etlerimiz, kömür ateşinde ustalıkla pişirilerek sizlere sunulur.
                İster klasik kebaplarımızı deneyin, ister ızgara sebzelerimizin tadına bakın; mangalın vazgeçilmez
                lezzetlerini keşfedin.
              </p>

              <h3 className="text-xl font-semibold mb-2">Barbekü ve Mangalın En İyi Adresi</h3>
              <p className="mb-4">
                Restoranımız, barbekü ve mangal konusunda uzmanlaşmış şefleriyle sizlere unutulmaz bir lezzet deneyimi sunuyor.
                Açık havada pişirilen yemeklerimiz, hem göze hem damağa hitap ediyor. Odun ateşinde yavaşça tütsülenmiş
                etlerden, sıcak kömürlerin üzerinde hızla ızgara edilmiş lezzetlere kadar geniş bir menü sizi bekliyor.
              </p>

              <h3 className="text-xl font-semibold mb-2">Neden Bizi Tercih Etmelisiniz?</h3>
              <ul className="list-disc list-inside mb-4">
                <li><strong>Kalite ve Tazelik</strong>: Her zaman en taze ve kaliteli malzemeleri kullanıyoruz.</li>
                <li><strong>Usta Şefler</strong>: Barbekü ve mangal konusunda deneyimli şeflerimizle mükemmel lezzeti yakalayın.</li>
                <li><strong>Sıcak Atmosfer</strong>: Aileniz ve arkadaşlarınızla keyifli vakit geçirebileceğiniz samimi bir ortam sunuyoruz.</li>
                <li><strong>Geniş Menü</strong>: Farklı damak zevklerine hitap eden zengin barbekü ve mangal seçenekleri.</li>
              </ul>

              <p>
                Siz de ateşin ve dumanın büyülü dünyasında eşsiz bir lezzet yolculuğuna çıkmak isterseniz,
                restoranımıza davetlisiniz. Unutulmaz anlar ve damak çatlatan tatlar için doğru adres!
              </p>
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

export default BBQPage;
