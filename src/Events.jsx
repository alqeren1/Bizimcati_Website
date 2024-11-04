// EventTypesSection.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EventTypesSection = () => {
  // Array of event types with images and names

  const navigate = useNavigate();

  const eventTypes = [
    { name: 'Kır Düğünü', image: 'images/wedding.jpg', navKey: 'kirdugunu' },
    { name: 'BBQ ve Mangal', image: 'images/bbq.jpg', navKey: 'bbq' },
    { name: 'Şirket Organizasyonu', image: 'images/corporatemeeting.jpg' , navKey: 'sirkettoplantisi'},
    { name: 'Doğum Günü Partisi', image: 'images/birthday.jpg' , navKey: 'dogumgunu'},
    { name: 'Mezuniyet Partisi', image: 'images/graduation_party.jpg' , navKey: 'mezuniyet'},
    { name: 'Seminer & Workshop', image: 'images/seminar.jpg', navKey: 'seminer' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Organizasyonlarımız</h2>
          <p className="text-lg text-gray-600">
          Restoranımız her türlü etkinlik için mükemmel bir mekandır. Sizin için düzenleyebileceğimiz etkinlik türlerini keşfedin.
          </p>
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
