import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiMenu, FiX, FiMapPin } from 'react-icons/fi';
export default function Navbar() {
  const {
    t,
    i18n
  } = useTranslation();
  const {
    pathname
  } = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  const links = [['/hakkimizda', t('navbar.links.0')], ['/galeri?tab=hotel', t('gallery.header6')], ['/galeri?tab=restaurant', t('gallery.header5')], ['/#experiences', t('hero_section.buttons.1')], ['/galeri', t('navbar.links.1')], ['/iletisim', t('navbar.links.2')]];
  return <header className="site-header">
    <a className="skip-link" href="#main">
      {t('design.skip')}
    </a>
    <div className="topline">
      <span><FiMapPin /> Mogan Gölü, Gölbaşı · Ankara</span>
      <a href="tel:+903124982121">+90 312 498 21 21</a>
    </div>
    <div className="nav-inner">
      <Link className="brand" to="/" aria-label="Bizim Çatı">
        <img src="/images/logo.png" alt="Bizim Çatı Hotel & Restaurant" />
      </Link>
      <nav aria-label={t('design.navigation')} className="desktop-nav">
        {links.map(([url, label]) => <NavLink key={url} to={url} className={({
          isActive
        }) => isActive && !url.includes('?') && !url.includes('#') ? 'active' : ''}>
          {label}
        </NavLink>)}
      </nav>
      <div className="nav-actions">
        <select aria-label={t('design.language')} value={i18n.resolvedLanguage || 'tr'} onChange={e => {
          i18n.changeLanguage(e.target.value);
          localStorage.setItem('bizimcati-language', e.target.value);
        }}>
          {['tr', 'en', 'de', 'ru'].map(l => <option key={l} value={l}>
            {l.toUpperCase()}
          </option>)}
        </select>
        <Link className="button nav-book" to="/reservasyon">
          {t('hero_section.buttons.0')}
          <FiArrowUpRight />
        </Link>
        <button className="menu-toggle" aria-label={t('design.navigation')} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </div>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label={t('design.navigation')}>
      {links.map(([url, label]) => <Link key={url} to={url} onClick={() => setOpen(false)}>
        {label}
        <FiArrowUpRight />
      </Link>)}
      <Link className="button" to="/reservasyon">
        {t('hero_section.buttons.0')}
      </Link>
    </nav>}
  </header>;
}
