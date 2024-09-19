import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Hero from './Hero';
import HomeCarousel from './HomeCarousel';
import EventTypesSection from './Events';
import Footer from './Footer';
import LocationContactSection from './Location';


function HomePage(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return(<div className='bg-white'>
      <Navbar/>
    <div className="min-h-screen container mx-auto">
       <Hero></Hero>
    </div>
    <HomeCarousel/>
    <EventTypesSection/>
      <Footer/>
    </div>);
}

export default HomePage