import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Hero from './Hero';
import HomeCarousel from './HomeCarousel';
import EventTypesSection from './Events';
import Footer from './Footer';
import Intro from './Maps';
import LocationContactSection from './Location';


function HomePage(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return(<div className='bg-gray-100'>
      <Navbar/>
    <div className="min-h-screen">
       <Hero></Hero>
    </div>
    <EventTypesSection/>
    
    <div  className="my-20">
    <Intro/>
    </div>
    <HomeCarousel/>
      <Footer/>
    </div>);
}

export default HomePage