import { Link } from 'react-router-dom';


function Hero() {
  return (
    <div className="hero bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            src= '/images/36.jpg'
            className="w-full max-w-lg rounded-lg shadow-2xl"
          />
          <div className="flex flex-col space-y-6">
            <h1 className="text-5xl font-bold">
              Bizim Çatı Restorant & Hotel
            </h1>
            <p className="py-6">
              Bizim Çatı Hotel Restorant, Ankara’nın en güzel yerlerinden biri
              olan Gölbaşı Mogan Gölü kıyısında, her mevsim farklı
              güzelliklerin yaşandığı, doğa ile iç içe olan, lezzetli
              yemekleri ve makul fiyatlarıyla, güler yüzlü personeli ve
              kaliteli servisi ile hoş zaman geçirebileceğiniz bir mekândır.
            </p>
            
            <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
              <li className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
                <h2 className="text-2xl font-semibold mb-4">BBQ</h2>
                <p className="text-gray-600">
                  Açık havada Barbekü ve Mangal
                </p>
              </li>

              <li className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
                <h2 className="text-2xl font-semibold mb-4">Kır Düğünü</h2>
                <p className="text-gray-600">
                  Özel gününüzü özel bir yerde yapın
                </p>
              </li>

              <li className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
                <h2 className="text-2xl font-semibold mb-4">Hotel</h2>
                <p className="text-gray-600">
                  Lüks odalarımızda konaklayın
                </p>
              </li>

              
            </ul>

            <Link to="/reservasyon"className="btn btn-primary mt-8">
              Reservasyon
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
