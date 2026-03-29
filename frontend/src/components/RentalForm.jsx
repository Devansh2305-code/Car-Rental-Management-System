import React, { useState } from 'react';

const RentalForm = ({ customers, vehicles, onRent }) => {
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [selectedVehicle, setSelectedVehicle] = useState('');
    const [rentalDate, setRentalDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRent({ selectedCustomer, selectedVehicle, rentalDate });
        // Reset form fields
        setSelectedCustomer('');
        setSelectedVehicle('');
        setRentalDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Rental Transaction</h2>
            <div>
                <label htmlFor="customer">Customer:</label>
                <select
                    id="customer"
                    value={selectedCustomer}
                    onChange={(e) => setSelectedCustomer(e.target.value)}
                    required
                >
                    <option value="" disabled>Select a customer</option>
                    {customers.map((customer) => (
                        <option key={customer.id} value={customer.id}>{customer.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="vehicle">Vehicle:</label>
                <select
                    id="vehicle"
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    required
                >
                    <option value="" disabled>Select a vehicle</option>
                    {vehicles.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.id}>{vehicle.model}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="rentalDate">Rental Date:</label>
                <input
                    type="datetime-local"
                    id="rentalDate"
                    value={rentalDate}
                    onChange={(e) => setRentalDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Rental</button>
        </form>
    );
};

export default RentalForm;