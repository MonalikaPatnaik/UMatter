const mongoose = require('mongoose');
const User = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
     },
    phone: {
        type: String,
        required: true
    }

});

module.exports = new mongoose.model('UserData',User);