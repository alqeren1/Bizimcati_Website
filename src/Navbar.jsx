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
    <div className="navbar bg-white sticky top-0 z-50">
    <div className="hidden lg:flex">
      <a className="btn btn-ghost text-xl" onClick={goToHomePage}>Bizim Çatı</a>
    </div>
    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li onClick={goToAboutPage}><a>Hakkımızda</a></li>
        <li onClick={goToGalleryPage}><a>Galeri</a></li>
        <li>
          <details>
            <summary>Organizasyonlarımız</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>BBQ</a></li>
              <li><a>Kır düğünü</a></li>
            </ul>
          </details>
        </li>
        <li onClick={goToContactPage}><a>İletişim</a></li>
      </ul>
    </div>
    
    <details className=" navbar-start dropdown lg:hidden" onToggle={handleToggle}>
  <summary className="btn m-1">{isOpen ? <FaXmark /> : <FaBars />}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

  </div>
  )
}
