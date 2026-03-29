import React, { useState } from 'react';

const AddCar = () => {
    const [carDetails, setCarDetails] = useState({
        make: '',
        model: '',
        year: '',
        plateNumber: '',
        vin: '',
        dailyRate: '',
        status: 'available'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarDetails({ ...carDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Car Details:', carDetails);
        // Logic to submit car details to server or state management here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Rental Car</h2>
            <div>
                <label>Make:</label>
                <input type="text" name="make" value={carDetails.make} onChange={handleChange} required />
            </div>
            <div>
                <label>Model:</label>
                <input type="text" name="model" value={carDetails.model} onChange={handleChange} required />
            </div>
            <div>
                <label>Year:</label>
                <input type="number" name="year" value={carDetails.year} onChange={handleChange} required />
            </div>
            <div>
                <label>Plate Number:</label>
                <input type="text" name="plateNumber" value={carDetails.plateNumber} onChange={handleChange} required />
            </div>
            <div>
                <label>VIN:</label>
                <input type="text" name="vin" value={carDetails.vin} onChange={handleChange} required />
            </div>
            <div>
                <label>Daily Rate:</label>
                <input type="number" name="dailyRate" value={carDetails.dailyRate} onChange={handleChange} required />
            </div>
            <div>
                <label>Status:</label>
                <select name="status" value={carDetails.status} onChange={handleChange}>
                    <option value="available">Available</option>
                    <option value="rented">Rented</option>
                    <option value="maintenance">Maintenance</option>
                </select>
            </div>
            <button type="submit">Add Car</button>
        </form>
    );
};

export default AddCar;