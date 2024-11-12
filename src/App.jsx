import React,{useRef,useState,Suspense} from "react";
import Navbar from "./Navbar.jsx";
import NavbarExt from "./NavbarExt.jsx";
import HomePage from "./Homepage.jsx";
import AboutPage from "./AboutPage.jsx";
import ReservationPage from "./ReservationPage.jsx";
import ContactPage from "./ContactPage.jsx";
import GalleryPage from "./GalleryPage.jsx";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 return(
    <Suspense fallback='loading'>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/reservasyon" element={<ReservationPage/>} />
        <Route path="/iletisim" element={<ContactPage/>} />
        <Route path="/galeri" element={<GalleryPage/>} />
      </Routes>
    </Router>
    </Suspense>
    
 );
}

export default App



 
