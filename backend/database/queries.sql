-- SQL Queries for Car Rental Management System

-- Calculate Rental Charges
SELECT rental_id, DATEDIFF(return_date, rental_date) AS rental_duration,
    (DATEDIFF(return_date, rental_date) * daily_rate) AS total_charge
FROM rentals
JOIN vehicles ON rentals.vehicle_id = vehicles.id;

-- Track Rental History
SELECT customers.name, vehicles.model, rentals.rental_date, rentals.return_date
FROM rentals
JOIN customers ON rentals.customer_id = customers.id
JOIN vehicles ON rentals.vehicle_id = vehicles.id;

-- Check Vehicle Availability
SELECT vehicles.model, COUNT(rentals.id) AS rented_count
FROM vehicles
LEFT JOIN rentals ON vehicles.id = rentals.vehicle_id AND rentals.return_date IS NULL
GROUP BY vehicles.model;

-- Get Vehicle Utilization Reports
SELECT vehicles.model, COUNT(rentals.id) AS rentals_count,
    SUM(DATEDIFF(rentals.return_date, rentals.rental_date)) AS total_days_rented
FROM vehicles
LEFT JOIN rentals ON vehicles.id = rentals.vehicle_id
GROUP BY vehicles.model;

-- Calculate Overdue Penalties
SELECT rental_id, DATEDIFF(CURRENT_DATE(), return_date) AS overdue_days,
    (DATEDIFF(CURRENT_DATE(), return_date) * overdue_rate) AS penalty
FROM rentals
WHERE return_date < CURRENT_DATE();