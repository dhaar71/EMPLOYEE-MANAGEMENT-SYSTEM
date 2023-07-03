const mongoose = require('mongoose');

const Schema = mongoose.Schema

const dataSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Surname:{
        type: String,
        required: true
    },
    Department:{
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('Data', dataSchema)