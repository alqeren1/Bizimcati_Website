// LocationContactSection.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationContactSection = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  // Replace with your actual coordinates
  const location = {
    lat: 40.712776, // Example latitude
    lng: -74.005974, // Example longitude
  };

  // Access API key from environment variables
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We're here to assist you. Reach out to us via any of the methods below.
          </p>
        </div>
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Contact Details */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> 123 Main Street, Anytown, USA
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> info@example.com
            </p>
          </div>
          {/* Google Map */}
          <div className="md:w-1/2">
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={15}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContactSection;
