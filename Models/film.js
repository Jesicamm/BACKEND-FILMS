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

/* filmschema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const film = mongoose.model("film", filmschema);
module.exports = film; */


const film = mongoose.model('film', filmSchema);
module.exports = film;