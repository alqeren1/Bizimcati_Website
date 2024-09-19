// EventTypesSection.jsx
import React from 'react';

const EventTypesSection = () => {
  // Array of event types with images and names
  const eventTypes = [
    { name: 'Wedding Reception', image: '/events/wedding.jpg' },
    { name: 'Corporate Meeting', image: '/events/corporate.jpg' },
    { name: 'Birthday Party', image: '/events/birthday.jpg' },
    { name: 'Graduation Party', image: '/events/graduation.jpg' },
    { name: 'Anniversary Celebration', image: '/events/anniversary.jpg' },
    { name: 'Family Reunion', image: '/events/family_reunion.jpg' },
    { name: 'Holiday Party', image: '/events/holiday.jpg' },
    { name: 'Baby Shower', image: '/events/baby_shower.jpg' },
    { name: 'Engagement Party', image: '/events/engagement.jpg' },
    { name: 'Cocktail Reception', image: '/events/cocktail.jpg' },
    { name: 'Fundraising Event', image: '/events/fundraising.jpg' },
    { name: 'Workshop or Seminar', image: '/events/workshop.jpg' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Event Types We Host</h2>
          <p className="text-lg text-gray-600">
            Our restaurant is the perfect venue for any occasion. Explore the event types we can host for you.
          </p>
        </div>
        {/* Event Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {eventTypes.map((event, idx) => (
            <div
              key={event.name}
              className="overflow-hidden rounded-lg shadow-lg bg-white"
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
