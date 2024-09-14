function Hero() {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            src="https://www.bizimcati.com.tr/wp-content/uploads/2021/07/bizimcatislider2.png"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div className="flex flex-col space-y-6">
            <h1 className="text-5xl font-bold">Bizim Çatı Restorant & Hotel</h1>
            <p className="py-6">
              Bizim Çatı Hotel Restorant, Ankara’nın en güzel yerlerinden biri olan Gölbaşı Mogan Gölü kıyısında, her
              mevsim farklı güzelliklerin yaşandığı, doğa ile iç içe olan, lezzetli yemekleri ve makul fiyatlarıyla, güler
              yüzlü personeli ve kaliteli servisi ile hoş zaman geçirebileceğiniz bir mekândır.
            </p>
  
            <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
              <li className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
                <h2 className="text-2xl font-semibold mb-4">BBQ</h2>
                <p className="text-gray-600">
                  Enjoy an outdoor BBQ with exquisite culinary delights.
                </p>
              </li>
  
              <li className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
                <h2 className="text-2xl font-semibold mb-4">Kır Düğünü</h2>
                <p className="text-gray-600">
                  Celebrate your special day with a charming countryside wedding.
                </p>
              </li>
  
              <li className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
                <h2 className="text-2xl font-semibold mb-4">Hotel</h2>
                <p className="text-gray-600">
                  Experience luxury and comfort in our elegant hotel rooms.
                </p>
              </li>
            </ul>
  
            <button className="btn btn-primary mt-8">Reservasyon</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  