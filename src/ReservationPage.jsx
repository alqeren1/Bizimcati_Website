// ReservationPage.jsx
import React, { useState } from 'react';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    eventType: '',
    additionalRequests: '',
  });

  const eventTypes = [
    { value: 'bbq', label: 'BBQ' },
    { value: 'wedding', label: 'Kır Düğünü' },
    { value: 'hotel', label: 'Hotel' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Make a Reservation</h1>
          <p className="text-lg text-gray-600">
            Please fill out the form below to reserve your spot.
          </p>
        </div>
        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Date and Time */}
          <div className="mb-6 flex space-x-4">
            {/* Date */}
            <div className="w-1/2">
              <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full border border-gray-300 rounded-md p-3"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            {/* Time */}
            <div className="w-1/2">
              <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="w-full border border-gray-300 rounded-md p-3"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Number of Guests */}
          <div className="mb-6">
            <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Number of Guests"
              value={formData.guests}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
          {/* Event Type */}
          <div className="mb-6">
            <label htmlFor="eventType" className="block text-gray-700 font-semibold mb-2">
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              className="w-full border border-gray-300 rounded-md p-3"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select an Event Type
              </option>
              {eventTypes.map((event) => (
                <option key={event.value} value={event.value}>
                  {event.label}
                </option>
              ))}
            </select>
          </div>
          {/* Additional Requests */}
          <div className="mb-6">
            <label htmlFor="additionalRequests" className="block text-gray-700 font-semibold mb-2">
              Additional Requests
            </label>
            <textarea
              id="additionalRequests"
              name="additionalRequests"
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Any special requests or notes"
              value={formData.additionalRequests}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit Reservation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationPage;
