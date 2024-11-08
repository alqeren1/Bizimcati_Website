import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const isOnHomePage = location.pathname === '/';

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll event listener
  useEffect(() => {
    if (isOnHomePage) {
      const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setScrolled(true);
    }
  }, [isOnHomePage]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  // Conditional classes
  const navbarClasses = `navbar fixed top-0 left-0 w-full z-50 transition-colors duration-300 h-16 ${
    isOnHomePage
      ? scrolled
        ? 'bg-white shadow-md'
        : 'bg-transparent'
      : 'bg-white'
  }`;

  const linkClasses = `btn btn-ghost hover:text-navbar-teal-blue active:text-navbar-red ${
    isOnHomePage
      ? scrolled
        ? 'text-gray-800'
        : 'text-white'
      : 'text-gray-800'
  }`;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div className={navbarClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo/Home Link */}
        <a
          className={`text-xl font-bold cursor-pointer  ${
            isOnHomePage
              ? scrolled
                ? 'text-gray-800'
                : 'text-white'
              : 'text-gray-800'
          }`}
          onClick={() => navigate('/')}
        >
          Bizim Çatı
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a className={linkClasses} onClick={() => navigate('/hakkimizda')}>
            {t('navbar.links.0')}
          </a>
          <a className={linkClasses} onClick={() => navigate('/galeri')}>
            {t('navbar.links.1')}
          </a>
          <a className={linkClasses} onClick={() => navigate('/iletisim')}>
            {t('navbar.links.2')}
          </a>
        </div>

        {/* Language Switcher Dropdown */}
        <div className="hidden lg:flex relative">
          <button
            className="btn btn-ghost flex items-center"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            {i18n.language.toUpperCase()} <FaChevronDown className="ml-2" />
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 shadow-lg rounded-lg">
              <button
                className={`block w-full text-left px-4 py-2 ${i18n.language === 'tr' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('tr')}
              >
                TR
              </button>
              <button
                className={`block w-full text-left px-4 py-2 ${i18n.language === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                EN
              </button>
              <button
                className={`block w-full text-left px-4 py-2 ${i18n.language === 'de' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('de')}
              >
                DE
              </button>
              <button
                className={`block w-full text-left px-4 py-2 ${i18n.language === 'ru' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('ru')}
              >
                RU
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-50">
          <button
            className="relative w-8 h-8 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaXmark className='text-black' />
            ) : (
              <RxHamburgerMenu/>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white transform ${
          isMenuOpen ? 'translate-x-40' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col p-48 items-end justify-start h-full space-y-8 w-full bg-slate-200">
          <button className="border-b border-gray-500 text-black">
            <a
              className="text-2xl font-bold"
              onClick={() => {
                navigate('/');
                toggleMenu();
              }}
            >
              {t('navbar.links.3')}
            </a>
          </button>
          <button className="border-b border-gray-500 text-black">
            <a
              className="text-2xl font-bold"
              onClick={() => {
                navigate('/hakkimizda');
                toggleMenu();
              }}
            >
              {t('navbar.links.0')}
            </a>
          </button>
          <button className="border-b border-gray-500 text-black">
            <a
              className="text-2xl font-bold"
              onClick={() => {
                navigate('/galeri');
                toggleMenu();
              }}
            >
              {t('navbar.links.1')}
            </a>
          </button>
          <button className="border-b border-gray-500 text-black">
            <a
              className="text-2xl font-bold"
              onClick={() => {
                navigate('/iletisim');
                toggleMenu();
              }}
            >
              {t('navbar.links.2')}
            </a>
          </button>
          <div className=" lg:flex relative">
          <button
            className="btn btn-ghost flex items-center"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            {i18n.language.toUpperCase()} <FaChevronDown className="ml-2" />
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 shadow-lg rounded-lg">
              <button
                className={`block w-full text-left px-4 py-2 ${i18n.language === 'tr' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('tr')}
              >
                TR
              </button>
              <button
                className={`block w-full text-left px-4 py-2 ${i18n.language === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                EN
              </button>
              <button
                className={`block w-full text-left px-4 py-2 ${i18n.language === 'de' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('de')}
              >
                DE
              </button>
              <button
                className={`block w-full text-left px-4 py-2 ${i18n.language === 'ru' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('ru')}
              >
                RU
              </button>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}