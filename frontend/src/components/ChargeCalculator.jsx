import React, { useState } from 'react';

const ChargeCalculator = () => {
    const [baseCharge, setBaseCharge] = useState(0);
    const [duration, setDuration] = useState(0);
    const [penalties, setPenalties] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const calculateCharges = () => {
        // Simple calculation logic
        const total = baseCharge + (duration * 15) + penalties; // Assuming duration is in hours and $15 per hour
        setTotalAmount(total);
    };

    return (
        <div>
            <h2>Charge Calculator</h2>
            <div>
                <label>Base Charge: </label>
                <input type="number" value={baseCharge} onChange={(e) => setBaseCharge(Number(e.target.value))} />
            </div>
            <div>
                <label>Duration (in hours): </label>
                <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
            </div>
            <div>
                <label>Penalties: </label>
                <input type="number" value={penalties} onChange={(e) => setPenalties(Number(e.target.value))} />
            </div>
            <button onClick={calculateCharges}>Calculate Total Amount</button>
            <h3>Total Amount: ${totalAmount}</h3>
        </div>
    );
};

export default ChargeCalculator;
