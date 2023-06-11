const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    firstname: {
        type: String,
        required: true,
        lowercase: true
    },
    lastname: {
        type: String,
        required: true,
        lowercase: true
    },
    nickname: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        lowercase: true
    },
});

module.exports = mongoose.model("User", userSchema);