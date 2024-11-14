// EventTypesSection.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EventTypesSection = () => {
  // Array of event types with images and names
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const eventTypes = [
    { name: t('event_types_section.event_types.0'), image: 'images/wedding.jpg', navKey: 'kirdugunu' },
    { name: t('event_types_section.event_types.1'), image: 'images/bbq.jpg', navKey: 'bbq' },
    { name: t('event_types_section.event_types.2'), image: 'images/corporatemeeting.jpg' , navKey: 'sirkettoplantisi'},
    { name: t('event_types_section.event_types.3'), image: 'images/birthday.jpg' , navKey: 'dogumgunu'},
    { name: t('event_types_section.event_types.4'), image: 'images/graduation_party.jpg' , navKey: 'mezuniyet'},
    { name: t('event_types_section.event_types.5'), image: 'images/seminar.jpg', navKey: 'seminer' },
  ];

 

  return (
    <section  id= "organizasyonlar" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('event_types_section.header')}</h2>
          <p className="text-lg text-gray-600">
          {t('event_types_section.intro_paragraph')}          </p>
        </div>
        {/* Event Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {eventTypes.map((event, idx) => (
            <div
              key={event.name}
              className="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-300 hover:cursor-pointer"
              onClick={() => navigate("/" +event.navKey)}
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypesSection;
