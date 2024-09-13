import React,{useRef,useState,Suspense} from "react";
import Navbar from "./Navbar.jsx";
import NavbarExt from "./NavbarExt.jsx";
import HomePage from "./Homepage.jsx";
import Footer from "./Footer.jsx";
import { useTranslation } from 'react-i18next';

function App() {
 return(
    <Suspense fallback='loading'>
    <Navbar></Navbar>
    <HomePage></HomePage>
    </Suspense>
 );
}

export default App



 
