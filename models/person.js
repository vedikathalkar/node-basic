const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String
    }
});

// Create Person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;