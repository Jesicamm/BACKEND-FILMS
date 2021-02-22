const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;


const filmSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    year: { type: Number },

    creationDate: {
        type: Date,
        default: new Date
    },

    country: { type: String },

    poster: { type: String },

    genre: {
        type: String,
        enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
    },

    id: { type: ObjectId },

    adult: {
        type: Boolean,
        default: false
    },

    summary: { type: String }
});

const film = mongoose.model('film', filmSchema);
module.exports = film;