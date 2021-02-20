let mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;
let Schema = mongoose.Schema;

let filmSchema = new Schema({
    title: { type: String },
    year: { type: Number },
    country: { type: String },
    poster: { type: String },
    seasons: { type: Number },

    genre: {
        type: String,
        enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
    },
    id: { type: ObjectId },
    summary: { type: String }
});

module.exports = mongoose.model('film', filmSchema);