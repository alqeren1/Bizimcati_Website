import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiArrowDown, FiMapPin, FiSun, FiCoffee, FiHeart, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { PageLayout, Experiences, Invitation } from './Design';
export default function HomePage() {
  const {
    t
  } = useTranslation();
  const [slide, setSlide] = useState(0);
  const photos = ['/images/background2.JPG', '/carouselPhotos/DSC_0144.png', '/carouselPhotos/0E5A5843.png'];
  return <PageLayout title={t('hero_section.header')}>
    <section className="hotel-hero">
      <img className="hero-photo" src={photos[slide]} alt={t('hero_section.header')} />
      <div className="hero-shade" />
      <div className="shell hotel-hero-content">
        <span className="eyebrow">
          <span className="little-line" />
          {t('design.lakeside')}
        </span>
        <h1>
          {t('design.heroLine1')}
          <br />
          <em>
            {t('design.heroLine2')}
          </em>
        </h1>
        <p>
          {t('hero_section.intro_paragraph')}
        </p>
        <div className="hero-actions">
          <Link className="button" to="/reservasyon">
            {t('design.planVisit')}
            <FiArrowUpRight />
          </Link>
          <a className="hero-discover" href="#experiences">
            {t('design.explore')}
            <FiArrowDown />
          </a>
        </div>
      </div>
      <div className="shell hero-bottom">
        <span><FiMapPin /> Gölbaşı, Ankara</span>
        <div className="slide-controls">
          <span>0{slide + 1}<span className="slide-divider" />03</span>
          <button onClick={() => setSlide((slide + 2) % 3)} aria-label={t('design.previous')}>
            <FiArrowLeft />
          </button>
          <button onClick={() => setSlide((slide + 1) % 3)} aria-label={t('design.next')}>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
    <div className="welcome-strip">
      <div className="shell">
        <span>
          <FiSun />
          {t('design.lakeside')}
        </span>
        <span>
          <FiCoffee />
          {t('design.freshFlavours')}
        </span>
        <span>
          <FiHeart />
          {t('design.memorableMoments')}
        </span>
        <a href="tel:+903124982121">
          {t('design.directBooking')}
          <FiArrowUpRight />
        </a>
      </div>
    </div>
    <section className="shell section welcome-section">
      <div>
        <span className="eyebrow">
          {t('design.welcome')}
        </span>
        <h2>
          {t('design.welcomeTitle')}
          <br />
          <em>
            {t('design.welcomeItalic')}
          </em>
        </h2>
      </div>
      <div>
        <p>
          {t('design.welcomeText')}
        </p>
        <Link className="text-link" to="/hakkimizda">
          {t('design.ourStory')}
          <FiArrowUpRight />
        </Link>
      </div>
    </section>
    <Experiences />
    <section className="lakeside-feature">
      <img src="/carouselPhotos/DSC_0144.png" alt={t('location.header')} loading="lazy" />
      <div className="feature-panel">
        <span className="eyebrow">MOGAN GÖLÜ · ANKARA</span>
        <h2>
          {t('design.slowDown')}
        </h2>
        <p>
          {t('location.intro')}
        </p>
        <Link className="text-link" to="/iletisim">
          {t('design.findUs')}
          <FiArrowUpRight />
        </Link>
      </div>
    </section>
    <Invitation />
  </PageLayout>;
}
