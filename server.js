const express = require('express');
const config = require('./config');

const app = express();

// Middleware
app.use(express.json());

// Routes
const routes = require('./routes');
app.use('/api', routes);

// Start server
app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});
