import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AvailabilityTracker = () => {
  // Mock data for vehicle availability
  const vehicleStatus = {
    'Car A': 'Available',
    'Car B': 'Rented',
    'Car C': 'Maintenance',
  };

  return (
    <div>
      <h1>Vehicle Availability Tracker</h1>
      <Calendar />
      <div>
        <h2>Current Vehicle Status</h2>
        <ul>
          {Object.entries(vehicleStatus).map(([vehicle, status]) => (
            <li key={vehicle}>{vehicle}: {status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AvailabilityTracker;