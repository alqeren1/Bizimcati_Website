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
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "70vh", width: "100%" }}>
        <Map defaultZoom={15} defaultCenter={position} >
          {/* Your map components */}
        
 

        </Map>
      </div>
    </APIProvider>
  );
}
