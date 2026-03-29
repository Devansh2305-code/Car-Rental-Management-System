const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/car_rental', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

// API Routes
app.get('/api/cars', (req, res) => {
    // Logic to fetch cars from database
    res.send('List of cars');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});