import React,{useRef,useState,Suspense} from "react";
import Navbar from "./Navbar.jsx";
import NavbarExt from "./NavbarExt.jsx";
import HomePage from "./Homepage.jsx";
import AboutPage from "./AboutPage.jsx";
import ReservationPage from "./ReservationPage.jsx";
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
      </Routes>
    </Router>
    </Suspense>
    
 );
}

export default App



 
