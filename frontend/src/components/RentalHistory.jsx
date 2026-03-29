import React from 'react';

const RentalHistory = () => {
  const transactions = [
    // Sample data for rental history, this should ideally be fetched from an API
    {
      id: 1,
      car: 'Toyota Camry',
      renter: 'John Doe',
      startDate: '2026-03-01',
      endDate: '2026-03-05',
      status: 'Completed',
    },
    {
      id: 2,
      car: 'Honda Accord',
      renter: 'Jane Smith',
      startDate: '2026-03-10',
      endDate: '2026-03-15',
      status: 'Completed',
    },
    {
      id: 3,
      car: 'Ford Mustang',
      renter: 'Mary Johnson',
      startDate: '2026-03-20',
      endDate: '2026-03-22',
      status: 'Canceled',
    },
  ];

  return (
    <div>
      <h2>Rental Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Car</th>
            <th>Renter</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.car}</td>
              <td>{transaction.renter}</td>
              <td>{transaction.startDate}</td>
              <td>{transaction.endDate}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RentalHistory;