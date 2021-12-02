
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name: { type: String },
    email: { type: String }
});

module.exports = mongoose.model('user', user);