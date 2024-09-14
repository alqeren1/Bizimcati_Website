import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React,{useState, useEffect, useRef} from 'react';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [navigation, setNavigation] = useState([
    { name: 'Hakkımızda', href: '#', current: true },
    { name: 'Organizasyonlar', href: '#', current: false },
    { name: 'Galeri', href: '#', current: false },
    { name: 'İletişim', href: '#', current: false },
  ]);

  const [isScrolled, setIsScrolled] = useState(false);
  const refNav = useRef();

  // Listen to scroll event and update the navbar style based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const updateNavigation = (index) => {
    setNavigation(prevNavigation => 
      prevNavigation.map((item, i) => ({
        ...item,
        current: i === index
      }))
    );
  };

  

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Bizim Çatı</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Hakkımızda</a></li>
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
