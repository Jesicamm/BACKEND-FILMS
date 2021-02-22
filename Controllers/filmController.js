const mongoose = require('mongoose');
const film = require('../Models/film');

class Film {
    constructor() {

    }

    //GET (return all films from DB)
    async findAllFilms(filmCollection) {
        return film.find(filmCollection)
    };

    //GET (return a film with id)
    async findById({ _id: id }) {
        return film.findOne({ _id: id });
    };

    //POST (adding a new film)
    async addFilm(movie) {
            return film.create(movie)
        }
        //PUT (update an existing film)
    async updateFilm(id, movie) {
            const idFound = film.findOne({ _id: id })
            return idFound.update(movie)
        }
        //DELETE (delete a film by id)
    async deleteFilm(id) {
        const idFound = film.findOne({ _id: id })
        return idFound.remove()
    }
}

let filmController = new Film();
module.exports = filmController;