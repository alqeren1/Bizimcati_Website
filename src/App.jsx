import React,{useRef,useState,Suspense} from "react";
import Navbar from "./Navbar.jsx";
import NavbarExt from "./NavbarExt.jsx";
import HomePage from "./Homepage.jsx";
import AboutPage from "./AboutPage.jsx";
import ReservationPage from "./ReservationPage.jsx";
import ContactPage from "./ContactPage.jsx";
import GalleryPage from "./GalleryPage.jsx";
import WeddingPage from "./WeddingPage.jsx"
import BirthdayPage from "./BirthdayPage.jsx"
import BBQPage from "./BBQPage.jsx"
import CorporateMeetingPage from "./CorporateMeetingPage.jsx"
import GraduationPage from "./GraduationPage.jsx"
import SeminarPage from "./SeminarPage.jsx"
import { useTranslation } from 'react-i18next';
import ScrollTop from "./ScrollTop.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 return(
    <Suspense fallback='loading'>
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/reservasyon" element={<ReservationPage/>} />
        <Route path="/iletisim" element={<ContactPage/>} />
        <Route path="/galeri" element={<GalleryPage/>} />
        <Route path="/kirdugunu" element={<WeddingPage/>} />
        <Route path="/dogumgunu" element={<BirthdayPage/>} />
        <Route path="/bbq" element={<BBQPage/>} />
        <Route path="/sirkettoplantisi" element={<CorporateMeetingPage/>} />
        <Route path="/mezuniyet" element={<GraduationPage/>} />
        <Route path="/seminer" element={<SeminarPage/>} />
      </Routes>
    </Router>
    </Suspense>
    
 );
}

export default App



 
