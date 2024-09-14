import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from './Carousel';
import Hero from './Hero';

function HomePage(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return(<div>
    <div className="min-h-screen container mx-auto">
       <Hero></Hero>
    </div>
    </div>);
}

export default HomePage