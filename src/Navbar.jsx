import React,{useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaXmark, FaBars } from "react-icons/fa6";





export default function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (event) => {
    setIsOpen(event.target.open);
  };

  const goToHomePage = () => {
    // Perform your logic
    navigate('/'); // Navigate to the About page
  };

  const goToAboutPage = () => {
    // Perform your logic
    navigate('/hakkimizda'); // Navigate to the About page
  };

  const goToContactPage = () => {
    // Perform your logic
    navigate('/iletisim'); // Navigate to the About page
  };

  const goToGalleryPage = () => {
    // Perform your logic
    navigate('/galeri'); // Navigate to the About page
  };
  
  return (
    <div className="navbar bg-white text-gray-800 sticky top-0 z-50">
    {/* Logo/Home Link */}
    <div className="hidden lg:flex">
      <a
        className="btn btn-ghost text-xl text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red"
        onClick={goToHomePage}
      >
        Bizim Çatı
      </a>
    </div>

    {/* Menu Items */}
    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a
            className=" text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red"
            onClick={goToAboutPage}
          >
            Hakkımızda
          </a>
        </li>
        <li>
          <a
            className=" text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red"
            onClick={goToGalleryPage}
          >
            Galeri
          </a>
        </li>
      
        <li>
          <a
            className=" text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red"
            onClick={goToContactPage}
          >
            İletişim
          </a>
        </li>
        <li>
          <details>
            <summary className=" text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red cursor-pointer">
              Organizasyonlarımız
            </summary>
            <ul className="bg-navbar-background rounded-t-none p-2">
              <li>
                <a className="text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red">
                  BBQ
                </a>
              </li>
              <li>
                <a className="text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red">
                  Kır düğünü
                </a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>

    {/* Mobile Menu */}
    <details className="navbar-start dropdown lg:hidden" onToggle={handleToggle}>
      <summary className="btn m-1 bg-navbar-background">
        {isOpen ? <FaXmark className="text-navbar-dark-blue" /> : <FaBars className="text-navbar-dark-blue" />}
      </summary>
      <ul className="menu dropdown-content bg-navbar-background rounded-box z-[1] w-52 p-2 shadow">
        <li>
          <a className="text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red">Hakkımızda</a>
        </li>
        <li>
          <a className="text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red">Galeri</a>
        </li>
        <li>
          <a className="text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red">BBQ</a>
        </li>
        <li>
          <a className="text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red">Kır düğünü</a>
        </li>
        <li>
          <a className="text-navbar-dark-blue hover:text-navbar-teal-blue active:text-navbar-red">İletişim</a>
        </li>
      </ul>
    </details>
  </div>
  )
}
