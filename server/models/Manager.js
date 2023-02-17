const { Schema, model } = require('mongoose');

const managerSchema = new Schema({
    gamerTag: {
        type: String,
        required: true,
        unique: true,
        },
    firstName: {
        type: String,
        required: true,
        
    },
    lastName: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
   
    phone: {
        type: Number,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
});

const manager = model('Manager', managerSchema);

module.exports = manager;