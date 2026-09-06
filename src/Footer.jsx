import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiInstagram, FiFacebook, FiArrowUp } from 'react-icons/fi';
export default function Footer() {
  const {
    t
  } = useTranslation();
  return <footer className="site-footer">
    <div className="shell footer-grid">
      <div className="footer-brand">
        <Link to="/">
          <img src="/images/logo_white.png" alt="Bizim Çatı" />
        </Link>
        <p>
          {t('hero_section.intro_paragraph')}
        </p>
        <div className="socials">
          <a href="https://www.instagram.com/clubbizimcati/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="https://www.facebook.com/clubbizimcati/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FiFacebook />
          </a>
        </div>
      </div>
      <div>
        <span className="eyebrow">
          {t('design.explore')}
        </span>
        <Link to="/hakkimizda">
          {t('navbar.links.0')}
        </Link>
        <Link to="/galeri?tab=hotel">
          {t('gallery.header6')}
        </Link>
        <Link to="/galeri">
          {t('gallery.header')}
        </Link>
        <Link to="/kirdugunu">
          {t('wedding_section.header')}
        </Link>
      </div>
      <div>
        <span className="eyebrow">
          {t('contact_section.header')}
        </span>
        <a href="tel:+903124982121">+90 312 498 21 21</a>
        <a href="tel:+905558009261">+90 555 800 92 61</a>
        <a href="mailto:info@bizimcati.com.tr">info@bizimcati.com.tr</a>
        <Link to="/reservasyon">
          {t('hero_section.buttons.0')}
          <FiArrowUpRight />
        </Link>
      </div>
      <div>
        <span className="eyebrow">
          {t('location.header')}
        </span>
        <p>
          {t('contact_section.contact_details.address')}
        </p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Club+Bizim+Cati+Golbasi+Ankara" target="_blank" rel="noreferrer">
          {t('design.directions')}
          <FiArrowUpRight />
        </a>
      </div>
    </div>
    <div className="shell footer-bottom">
      <span>© {new Date().getFullYear()} Bizim Çatı Hotel & Restaurant</span>
      <span>Mogan Gölü · Ankara</span>
      <button onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })} aria-label={t('design.backTop')}>
        <FiArrowUp />
      </button>
    </div>
  </footer>;
}
