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
  const navbarClasses = `navbar fixed top-0 left-0 w-full z-50 transition-colors duration-300 h-24 ${
    isOnHomePage
      ? scrolled
        ? 'bg-white shadow-md'
        : 'bg-transparent'
      : 'bg-white'
  }`;

 

  const linkClasses = `text-lg btn btn-ghost hover:text-navbar-teal-blue active:text-navbar-red ${
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
        <a onClick={() => router.push('/')} className="cursor-pointer">
            <img
              src="/images/logo.png" // Replace with the path to your logo
              alt="Logo"
              onClick={() => navigate('/')}
              className="h-16 "
            />
          </a>

        {/* Desktop Menu */}
        <div className='flex items-center'>
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
            className= {`py-3 px-5  w-22   flex items-center font-bold  ${
              scrolled
                  ? 'text-gray-800 hover:bg-opacity-35 '
                  : isLanguageDropdownOpen ?'text-gray-800 ' :'text-white hover:bg-opacity-15'
                
            } ${
              isLanguageDropdownOpen
                  ? 'bg-white text-gray-800 rounded-t-lg border-l border-r border-t  border-gray-200'
                  : 'hover:bg-gray-300 rounded-lg border border-transparent'
                
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
        </div></div>

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