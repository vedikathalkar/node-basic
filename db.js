const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.DB_URL;

// Check if DB_URL is loaded
console.log('DB_URL:', mongoURL);

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('Error connecting to MongoDB server:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

module.exports = db;