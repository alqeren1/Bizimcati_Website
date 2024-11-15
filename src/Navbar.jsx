import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const isOnHomePage = location.pathname === '/';

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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

  const navbarClasses = `navbar fixed top-0 left-0 w-full z-50 transition-colors duration-300 h-20 ${
    isOnHomePage
      ? scrolled
        ? 'bg-white shadow-md'
        : 'bg-transparent'
      : 'bg-white'
  }`;

  const linkClasses = `text-md btn btn-ghost hover:text-navbar-teal-blue active:text-navbar-red ${
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
        <div className="cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Logo"
            onClick={() => navigate('/')}
            className={`h-14 ${scrolled ? '' : 'hidden'}`}
          />
          <img
            src="/images/logo_white.png"
            alt="Logo"
            onClick={() => navigate('/')}
            className={`h-14 ${scrolled ? 'hidden' : ''}`}
          />
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center">
          <div className="hidden lg:flex space-x-4 mr-8">
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
              className={`py-3 px-5 w-22 text-sm flex items-center font-bold ${
                scrolled
                  ? 'text-gray-800 hover:bg-opacity-35'
                  : isLanguageDropdownOpen
                  ? 'text-gray-800'
                  : 'text-white hover:bg-opacity-15'
              } ${isLanguageDropdownOpen ? 'bg-white text-gray-800 rounded-t-lg border-gray-200' : 'hover:bg-gray-300 rounded-lg border-transparent'}`}
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              {i18n.language.toUpperCase()} <FaChevronDown className={`ml-2 transform transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {isLanguageDropdownOpen && (
        <div
          className="absolute top-full  mt-[-1px] w-full text-black text-sm bg-white border-l border-r border-b  border-gray-200 shadow-lg rounded-b-lg"
        >
          <div className='hover:bg-gray-100 flex items-center cursor-pointer rounded-lg'
          onClick={() => handleLanguageChange('tr')}>
            <img
            src="/images/turkey.png" // Path to the Turkey flag icon
            alt="tr flag"
            className={`w-5 h-5 ml-4 mr-1 ${
              i18n.language === 'tr' ? 'hidden' : ''
            }`}// Adjust size as needed
            
          />
  
          <button
            className={`block ml-1  text-left  py-2 ${
              i18n.language === 'tr' ? 'hidden' : ''
            }`}
            
          >
            TR
          </button>
          </div>
          <div className='hover:bg-gray-100 flex items-center cursor-pointer rounded-lg'
          onClick={() => handleLanguageChange('en')}>
            <img
    src="/images/uk.png" // Path to the Turkey flag icon
    alt="uk flag"
    className={`w-5 h-5 ml-4 mr-1 ${
      i18n.language === 'en' ? 'hidden' : ''
    }`}// Adjust size as needed
  />
  
          <button
            className={`block ml-1  text-left  py-2 ${
              i18n.language === 'en' ? 'hidden' : ''
            }`}
            
          >
            EN
          </button>
          </div>
          <div className='hover:bg-gray-100 flex items-center cursor-pointer rounded-lg'
          onClick={() => handleLanguageChange('de')}>
            <img
    src="/images/de.png" // Path to the Turkey flag icon
    alt="de flag"
    className={`w-5 h-5 ml-4 mr-1 ${
      i18n.language === 'de' ? 'hidden' : ''
    }`}// Adjust size as needed
  />
  
          <button
            className={`block ml-1  text-left  py-2 ${
              i18n.language === 'de' ? 'hidden' : ''
            }`}
            
          >
            DE
          </button>
          </div>
          <div className='hover:bg-gray-100 flex items-center cursor-pointer rounded-lg'
          onClick={() => handleLanguageChange('ru')}>
            <img
    src="/images/ru.png" // Path to the Turkey flag icon
    alt="ru flag"
    className={`w-5 h-5 ml-4 mr-1 ${
      i18n.language === 'ru' ? 'hidden' : ''
    }`}// Adjust size as needed
  />
  
          <button
            className={`block ml-1  text-left  py-2 ${
              i18n.language === 'ru' ? 'hidden' : ''
            }`}
            
          >
            RU
          </button>
          </div>
        </div>
      )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-50" ref={hamburgerRef}>
          <Hamburger color={scrolled ? "#000" : isMenuOpen ? "#000" : "#fff"} size={20} toggled={isMenuOpen} toggle={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full bg-gradient-to-l transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 w-auto min-w-max`}
        style={{
          background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 100%)'
        }}
      >
        <div className="flex flex-col px-10 items-end justify-start h-full space-y-8 mt-36">
          {/* Menu Links */}
          <button className="border-b border-gray-500 text-black">
            <a className="text-2xl font-bold" onClick={() => { navigate('/'); toggleMenu(); }}>{t('navbar.links.3')}</a>
          </button>
          <button className="border-b border-gray-500 text-black">
            <a className="text-2xl font-bold" onClick={() => { navigate('/hakkimizda'); toggleMenu(); }}>{t('navbar.links.0')}</a>
          </button>
          <button className="border-b border-gray-500 text-black">
            <a className="text-2xl font-bold" onClick={() => { navigate('/galeri'); toggleMenu(); }}>{t('navbar.links.1')}</a>
          </button>
          <button className="border-b border-gray-500 text-black">
            <a className="text-2xl font-bold" onClick={() => { navigate('/iletisim'); toggleMenu(); }}>{t('navbar.links.2')}</a>
          </button>
          {/* Language Switcher */}
          <div className="flex lg:hidden relative">
          <button
            className= {`py-3 px-5  w-22 text-sm  flex items-center font-bold text-black 
                
             ${
              isLanguageDropdownOpen
                  ? 'bg-white text-gray-800 rounded-t-lg border-l border-r border-t  border-gray-200'
                  : ' rounded-lg border border-gray-500'
                
            }`} 
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            {i18n.language.toUpperCase()}  <FaChevronDown
          className={`ml-2 transform transition-transform duration-200 ${
            isLanguageDropdownOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
          </button>
          {isLanguageDropdownOpen && (
        <div
          className="absolute top-full  mt-[-1px] w-full text-black text-sm bg-white border-l border-r border-b  border-gray-200 shadow-lg rounded-b-lg"
        >
          <div className='hover:bg-gray-100 flex items-center cursor-pointer rounded-lg'
          onClick={() => handleLanguageChange('tr')}>
            <img
            src="/images/turkey.png" // Path to the Turkey flag icon
            alt="tr flag"
            className={`w-5 h-5 ml-4 mr-1 ${
              i18n.language === 'tr' ? 'hidden' : ''
            }`}// Adjust size as needed
            
          />
  
          <button
            className={`block ml-1  text-left  py-2 ${
              i18n.language === 'tr' ? 'hidden' : ''
            }`}
            
          >
            TR
          </button>
          </div>
          <div className='hover:bg-gray-100 flex items-center cursor-pointer rounded-lg'
          onClick={() => handleLanguageChange('en')}>
            <img
    src="/images/uk.png" // Path to the Turkey flag icon
    alt="uk flag"
    className={`w-5 h-5 ml-4 mr-1 ${
      i18n.language === 'en' ? 'hidden' : ''
    }`}// Adjust size as needed
  />
  
          <button
            className={`block ml-1  text-left  py-2 ${
              i18n.language === 'en' ? 'hidden' : ''
            }`}
            
          >
            EN
          </button>
          </div>
          <div className='hover:bg-gray-100 flex items-center cursor-pointer rounded-lg'
          onClick={() => handleLanguageChange('de')}>
            <img
    src="/images/de.png" // Path to the Turkey flag icon
    alt="de flag"
    className={`w-5 h-5 ml-4 mr-1 ${
      i18n.language === 'de' ? 'hidden' : ''
    }`}// Adjust size as needed
  />
  
          <button
            className={`block ml-1  text-left  py-2 ${
              i18n.language === 'de' ? 'hidden' : ''
            }`}
            
          >
            DE
          </button>
          </div>
          <div className='hover:bg-gray-100 flex items-center cursor-pointer rounded-lg'
          onClick={() => handleLanguageChange('ru')}>
            <img
    src="/images/ru.png" // Path to the Turkey flag icon
    alt="ru flag"
    className={`w-5 h-5 ml-4 mr-1 ${
      i18n.language === 'ru' ? 'hidden' : ''
    }`}// Adjust size as needed
  />
  
          <button
            className={`block ml-1  text-left  py-2 ${
              i18n.language === 'ru' ? 'hidden' : ''
            }`}
            
          >
            RU
          </button>
          </div>
        </div>
      )}
        </div>
        </div>
      </div>
    </div>
  );
}





