const mongoose = require('mongoose');

const message = new mongoose.Schema({
    message: String,
    nickname: String,
    groupName: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
    }
})
module.exports = mongoose.model('message', message);