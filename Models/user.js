const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;


const userSchema = new Schema({
    id: { type: ObjectId },

    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    birthDate: {
        type: Number
    },

    creationDate: {
        type: Date,
        default: new Date

    },

    country: { type: String },

    email: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    personalId: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        enum: ["Male", "Female"]
    },

    paymentMethod: {
        type: Number,
        enum: ['visa', 'masterCard', 'paypal', 'bizum'],

    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;