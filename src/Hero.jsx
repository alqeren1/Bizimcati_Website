import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  return (
    <div
      className="relative top-0 hero min-h-screen bg-cover bg-center "
      style={{ backgroundImage: `url('/images/lake-bg.jpg')` }}
    >
      {/* Overlay to make text readable over the background image */}
      <div className="hero-overlay bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Bizim Çatı Restorant & Hotel
          </h1>
          <p className="text-xl mb-8 text-start max-w-2xl leading-8">
            Bizim Çatı Hotel Restorant, Ankara’nın en güzel yerlerinden biri
            olan Gölbaşı Mogan Gölü kıyısında, her mevsim farklı
            güzelliklerin yaşandığı, doğa ile iç içe olan, lezzetli
            yemekleri ve makul fiyatlarıyla, güler yüzlü personeli ve
            kaliteli servisi ile hoş zaman geçirebileceğiniz bir mekândır.
          </p>

        <div className="flex flex-row gap-4 justify-center items-center">
        <Link to="/iletisim" className="btn btn-primary">
            Reservasyon
          </Link>
          <ScrollLink to="organizasyonlar"  className="btn btn-primary" smooth={true} duration={500}>
            Organizasyonlarımız
          </ScrollLink>
        </div>

          
        </div>
      </div>
    </div>
  );
}

export default Hero;
