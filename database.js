'use strict';

const mongoose = require('mongoose');

require('dotenv').config({ path: './variables.env' });

module.exports = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(connection => console.log('Successfully connected to MongoDB.'))
        .catch(error => console.log('MongoDB connection error.'));
};