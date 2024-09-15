import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';


function HomePage(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return(<div>
      <Navbar/>
    <div className="min-h-screen container mx-auto">
       <Hero></Hero>
    </div>
      <Footer/>
    </div>);
}

export default HomePage