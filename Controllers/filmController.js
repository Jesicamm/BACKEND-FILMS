const filmModel = require('../Models/film');
const filmDatabase = require("../Storage/filmDb");

let database = new filmDatabase();

class FilmController {

    constructor() {

    }
    async createFilm(req, res) {

        let body = req.body;

        try {

            let film = new filmModel(body.id, body.title, body.year, body.description, body.image, body.genre, body.adult);

            let seteo = await database.set(film);

            if (seteo) {
                res.send("Bien!!!!!!!! hemos guardado");
            }

        } catch {
            console.log("error!");
        }


        return
    }

    //READ -R- Traernos datos

    async bringFilms(req, res) {
        try {
            let getting = await database.get();

            if (getting) {
                res.send(getting)
            }
        } catch (error) {
            console.log(error)
        }
    }

    //UPDATE -U- Modificar datos
    async updateFilm(id, filmObj) {
        return
    }


    //DELETE -D- Borrar datos
    async deleteFilm(id) {
        return
    }
}




let filmController = new FilmController;
module.exports = filmController;