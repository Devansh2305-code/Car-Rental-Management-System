const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your database user
    password: 'password', // replace with your database password
    database: 'car_rental_db' // replace with your database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id', connection.threadId);
});

module.exports = connection;