import React,{useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';




export default function Navbar() {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    // Perform your logic
    navigate('/hakkimizda'); // Navigate to the About page
  };

  
  return (
    <div className="navbar bg-white sticky top-0 z-50">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Bizim Çatı</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li onClick={goToAboutPage}><a>Hakkımızda</a></li>
        <li><a>Galeri</a></li>
        <li>
          <details>
            <summary>Organizasyonlarımız</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>BBQ</a></li>
              <li><a>Kır düğünü</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  )
}
