import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation, Trans } from 'react-i18next';



function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="relative top-0 hero min-h-screen bg-cover bg-center "
      style={{ backgroundImage: `url('/images/background.jpg')` }}
    >
      {/* Overlay to make text readable over the background image */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>



      <div className="container mx-auto     relative z-10">
        <div className="flex flex-col items-start justify-end min-h-screen text-white">
          <div className='md:mb-10 bg-white  backdrop-blur-3xl bg-opacity-5 rounded-xl p-4'>
          <h1 className="text-5xl 2xl:text-6xl outlined-text font-black  mb-8  ">
          {t('hero_section.header')}
          </h1>
          <p className="text-2xl 2xl:text-3xl mb-8 text-start 2xl:max-w-3xl max-w-2xl leading-8">
            {t('hero_section.intro_paragraph')}
          </p>
          
        <div className="flex flex-row gap-4 ">
        <Link to="/iletisim" className="btn w-full text-lg text-white hover:bg-[#0a72bf] bg-[#0D92F4] hover:border-[#0a72bf] border-[#0D92F4] ">
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
