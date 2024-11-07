import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation, Trans } from 'react-i18next';



function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="relative top-0 hero min-h-screen bg-cover bg-center "
      style={{ backgroundImage: `url('/images/lake-bg.jpg')` }}
    >
      {/* Overlay to make text readable over the background image */}
      <div className="hero-overlay bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start justify-center min-h-screen text-white">
          <h1 className="text-5xl font-bold mb-6 text-center">
          {t('hero_section.header')}
          </h1>
          <p className="text-xl mb-8 text-start max-w-2xl leading-8">
            {t('hero_section.intro_paragraph')}
          </p>
          
        <div className="flex flex-row gap-4 ">
        <Link to="/iletisim" className="btn btn-primary">
        {t('hero_section.buttons.0')}
          </Link>
          <ScrollLink to="organizasyonlar"  className="btn btn-primary" smooth={true} duration={500}>
          {t('hero_section.buttons.1')}
          </ScrollLink>
        </div>

          
        </div>
      </div>
    </div>
  );
}

export default Hero;
