"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';


// Path to your custom icon image
const customIconUrl = '/images/pin.png';  // Adjust this path as necessary
const createCustomMarkerIcon = () => {
    return L.divIcon({
        html: `<div style="position: relative; display: flex; align-items: center;">
        <img src="/images/pin.png" style="height: 41px;"/>
        <span style="position: absolute; left: 100%; margin-left: 8px; white-space: nowrap; font-size: 13px; color: red;">
          Club Bizim Çatı<br>Hotel &amp; Restaurant
        </span>
       </div>`,
      iconSize: [25, 41], // Original icon size
      iconAnchor: [12, 41], // Original anchor position
      className: '', // This removes extra styling to make your custom style work
      popupAnchor: [1, -34],
    });
  };
// Creating a custom Leaflet icon
const customIcon = new L.Icon({
  iconUrl: customIconUrl,
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

export default function Intro3() {
  const position = [39.781564441858706, 32.78885615110678];
  const pinPosition = [39.75723059753641, 32.78333838512227]; // Leaflet uses an array of [lat, lng]
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const handleMarkerClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=Club+Bizim+Çatı+Hotel+&+Restaurant,Gölbaşı,Ankara`;
    window.open(googleMapsUrl, "_blank"); // Opens Google Maps in a new tab
  };

  return (
    <div className="container mx-auto px-4 ">
      <div className="text-left mt-[-70px] mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('location.header')}</h2>
          <p className="text-lg text-gray-600">
            {t('location.intro')}
          </p>
      </div>
      <div style={{ height: "70vh", width: "100%", position:'relative', zIndex:0}}>
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }} zoomControl={false} // Disable zoom control
                      scrollWheelZoom={false} // Prevent scrolling zoom
                      doubleClickZoom={false} // Prevent zoom on double click
                      touchZoom={false} // Prevent touch zoom (mobile devices)
                      dragging={false} // Prevent dragging/panning
                      >
        <TileLayer
  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
/>



<Marker position={pinPosition} icon={createCustomMarkerIcon()} eventHandlers={{
              click: handleMarkerClick, // Call handleMarkerClick on marker click
            }}>
            
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
