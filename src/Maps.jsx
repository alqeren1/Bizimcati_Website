"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Intro() {
  const position = { lat: 39.757248, lng: 32.7803389 };
  const [open, setOpen] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_KEY;

  console.log('API Key:', apiKey);
  console.log('All env variables:', import.meta.env);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lokasyon</h2>
          <p className="text-lg text-gray-600">
          Restoranımız, Mogan Gölü'nün kıyısında kolay ulaşılabilir bir lokasyonda servis vermektedir.
          </p>
        </div>
      <APIProvider apiKey={apiKey}>
      <div style={{ height: "70vh", width: "100%" }}>
        <Map defaultZoom={15} defaultCenter={position} >
          {/* Your map components */}
        </Map>
      </div>
    </APIProvider>
    </div>
    
  );
}
