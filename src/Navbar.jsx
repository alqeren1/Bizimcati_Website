import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className={navbarClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo/Home Link */}
        <a
          className={`text-xl font-bold cursor-pointer ${linkClasses}`}
          onClick={() => navigate('/')}
        >
          Bizim Çatı
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a className={linkClasses} onClick={() => navigate('/hakkimizda')}>
            Hakkımızda
          </a>
          <a className={linkClasses} onClick={() => navigate('/galeri')}>
            Galeri
          </a>
          <a className={linkClasses} onClick={() => navigate('/iletisim')}>
            İletişim
          </a>
          {/* Add other links as needed */}
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
          
      
        <button className="border-b border-gray-500 text-black"><a
            className="text-2xl font-bold"
            onClick={() => {
              navigate('/');
              toggleMenu();
            }}
          >
            Anasayfa
          </a></button>
          
          <button className="border-b border-gray-500  text-black">
          <a
            className="text-2xl font-bold"
            onClick={() => {
              navigate('/hakkimizda');
              toggleMenu();
            }}
          >
            Hakkımızda
          </a>
          </button>
          
          <button className="border-b border-gray-500   text-black"><a
            className="text-2xl font-bold"
            onClick={() => {
              navigate('/galeri');
              toggleMenu();
            }}
          >
            Galeri
          </a></button>
          

          <button className="border-b border-gray-500  text-black">
          <a
            className="text-2xl font-bold"
            onClick={() => {
              navigate('/iletisim');
              toggleMenu();
            }}
          >
            İletişim
          </a>
          </button>
         
          {/* Add other links as needed */}
        </div>
      </div>
    </div>
  );
}
