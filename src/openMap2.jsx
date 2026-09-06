"use client";

import { useEffect } from "react";
import { MapContainer, Marker, useMap } from "react-leaflet";

import * as L from "leaflet";
import { maplibreGL } from "@maplibre/maplibre-gl-leaflet";

import "leaflet/dist/leaflet.css";
import "maplibre-gl/dist/maplibre-gl.css";

// --------------------------------------------------
// OPENFREEMAP BRIGHT BACKGROUND
// --------------------------------------------------

function OpenFreeMapLayer() {
  const map = useMap();

  useEffect(() => {
    const layer = maplibreGL({
      style: "https://tiles.openfreemap.org/styles/bright",
      interactive: false,
    });

    layer.addTo(map);

    return () => {
      map.removeLayer(layer);
    };
  }, [map]);

  return null;
}

// --------------------------------------------------
// REMOVE "LEAFLET" FROM ATTRIBUTION
// --------------------------------------------------

function CleanAttribution() {
  const map = useMap();

  useEffect(() => {
    if (map.attributionControl) {
      map.attributionControl.setPrefix(false);
    }
  }, [map]);

  return null;
}

// --------------------------------------------------
// CUSTOM MARKER
// --------------------------------------------------

const createCustomMarkerIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        display: inline-flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        padding: 8px;
        border-radius: 8px;
        white-space: nowrap;
      ">
        <img
          src="/images/pin.png"
          style="
            height: 41px;
            width: auto;
            margin-right: 8px;
            display: block;
          "
        />

        <span style="
          font-size: 13px;
          line-height: 1.4;
          color: red;
          white-space: nowrap;
        ">
          Club Bizim Çatı<br>
          Hotel &amp; Restaurant
        </span>
      </div>
    `,

    iconSize: [25, 41],

    // Pin tip remains on the same geographic point.
    iconAnchor: [20, 49],

    className: "",
    popupAnchor: [1, -34],
  });
};

// --------------------------------------------------
// COMPONENT
// --------------------------------------------------

export default function Intro3() {
  // MAP POSITION — UNCHANGED
  const position = [39.781564441858706, 32.78885615110678];

  // PIN POSITION — UNCHANGED
  const pinPosition = [39.75723059753641, 32.78333838512227];

  const handleMarkerClick = () => {
    const googleMapsUrl =
      "https://www.google.com/maps/dir/?api=1&destination=Club+Bizim+Çatı+Hotel+%26+Restaurant,Gölbaşı,Ankara";

    window.open(googleMapsUrl, "_blank");
  };

  return (
    <>
      <div className="container mx-auto">
        <div
          style={{
            height: "70vh",
            width: "100%",
            position: "relative",
            zIndex: 0,
          }}
        >
          <MapContainer
            center={position}
            zoom={13}
            style={{
              height: "100%",
              width: "100%",
            }}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            touchZoom={false}
            dragging={false}
          >
            {/* Removes "Leaflet" attribution prefix */}
            <CleanAttribution />

            {/* OpenFreeMap Bright */}
            <OpenFreeMapLayer />

            <Marker
              position={pinPosition}
              icon={createCustomMarkerIcon()}
              eventHandlers={{
                click: handleMarkerClick,
              }}
            />
          </MapContainer>
        </div>
      </div>

      {/* Tiny attribution */}
      <style>{`
        .leaflet-control-attribution {
          font-size: 8px !important;
          line-height: 9px !important;
          padding: 0px 2px !important;
          margin: 0 !important;

          background: rgba(255, 255, 255, 0.55) !important;

          white-space: nowrap !important;
        }

        .leaflet-control-attribution a {
          font-size: 8px !important;
          line-height: 9px !important;
          text-decoration: none !important;
        }
      `}</style>
    </>
  );
}
