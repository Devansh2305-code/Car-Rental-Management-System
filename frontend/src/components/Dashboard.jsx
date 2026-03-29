import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Rental Statistics</h1>
      <div>
        <h2>Overview</h2>
        <p>Total Rentals: 100</p>
        <p>Available Cars: 25</p>
        <p>Active Rentals: 75</p>
      </div>
      <div>
        <h2>Available Cars</h2>
        <ul>
          <li>Car A</li>
          <li>Car B</li>
          <li>Car C</li>
          <li>Car D</li>
          <li>Car E</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
