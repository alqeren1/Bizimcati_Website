import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Hero from './Hero';
import HomeCarousel from './HomeCarousel';
import EventTypesSection from './Events';
import Footer from './Footer';
import Intro from './Maps';
import Intro3 from './openMap';
import { Helmet } from "react-helmet-async";




function HomePage(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return(
      <>
    <Helmet>
        <title>Bizim Çatı Otel & Restoran</title>
        <meta
          name="description"
          content="Bizim Çatı Otel & Restoran, Ankara’nın en güzel yerlerinden biri olan Gölbaşı Mogan Gölü kıyısında, her mevsim farklı güzelliklerin yaşandığı, doğa ile iç içe olan, lezzetli yemekleri ve makul fiyatları, güler yüzlü personeli ve kaliteli servisi ile size ve ailenize mükemmel bir haftasonu kaçamağı sunar."
        />
      </Helmet>
      
    <div className='bg-gray-100'>
      <Navbar/>
    <div className="min-h-screen">
       <Hero></Hero>
    </div>
    <EventTypesSection/>
    
    <div  className="my-20">
    <Intro3/>
    </div>
    <HomeCarousel/>
      <Footer/>
    </div></>);
}

export default HomePage