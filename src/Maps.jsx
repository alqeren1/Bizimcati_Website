"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useTranslation } from 'react-i18next';


export default function Intro() {
  const position = { lat: 39.75723059753641, lng: 32.78333838512227 };
  const [open, setOpen] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_KEY;
  const { t, i18n } = useTranslation();


  console.log('API Key:', apiKey);
  console.log('All env variables:', import.meta.env);

  return (
    <div className="container mx-auto px-4">
      <div className="text-left mt-[-70px] mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('location.header')}</h2>
          <p className="text-lg text-gray-600">
          {t('location.intro')}          </p>
        </div>
      <APIProvider apiKey={apiKey}>
      <div style={{ height: "70vh", width: "100%" }}>
        <Map defaultZoom={17} defaultCenter={position} >
          {/* Your map components */}
        </Map>
      </div>
    </APIProvider>
    </div>
    
  );
}
