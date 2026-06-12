require('dotenv').config();

const express = require('express');
const app = express();

// Database Connection
const db = require('./db');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Person Routes
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

// Menu Routes
const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});