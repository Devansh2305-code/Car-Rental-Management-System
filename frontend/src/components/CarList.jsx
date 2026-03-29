import React from 'react';

const CarList = ({ cars, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Rental Cars</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        <span>{car.name} - {car.model} (${car.pricePerDay}/day)</span>
                        <button onClick={() => onEdit(car.id)}>Edit</button>
                        <button onClick={() => onDelete(car.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;