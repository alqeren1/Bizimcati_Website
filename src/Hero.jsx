import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation, Trans } from 'react-i18next';



function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="relative top-0 hero min-h-screen bg-cover bg-center "
      style={{ backgroundImage: `url('/images/background2.JPG')` }}
    >
      {/* Overlay to make text readable over the background image */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>



      <div className="    w-full z-10">
        <div className="flex flex-col items-start container mx-auto justify-center min-h-screen text-white">
          <div className='mb-10 ml-4 xl:ml-0 xs:mb-40 md:mb- w-min '>
          <h1 className="text-xl xs:text-2xl sm:text-5xl 2xl:text-6xl whitespace-nowrap font-black  mb-2 sm:mb-4 ">
          {t('hero_section.header')}
          </h1>
          <p className="text-sm xs:text-lg sm:text-2xl 2xl:text-3xl mb-2 sm:mb-4 text-start 2xl:max-w-3xl max-w-2xl ">
            {t('hero_section.intro_paragraph')}
          </p>
          
        <div className="flex  hidden flex-row gap-4 ">
        <Link to="/iletisim" className="btn w-full text-md xs:text-lg text-white hover:bg-[#0a72bf] bg-[#0D92F4] hover:border-[#0a72bf] border-[#0D92F4] ">
        {t('hero_section.buttons.0')}
          </Link>
         
        </div>
        </div>
          
        </div>
      </div>
      </div>
    
  );
}

export default Hero;
