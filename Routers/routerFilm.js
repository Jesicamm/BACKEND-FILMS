const routerFilms = require('express').Router();
const filmController = require('../Controllers/filmController')
const filmSchema = require('../Models/film')

// API routes
routerFilms.get('/films', async(req, res) => {
    try {
        res.json(await filmController.findAllFilms())
    } catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
        console.log(err.message)
    }
});

routerFilms.get('/films/:id', (req, res) => {
    filmSchema.findById(req.params.id).then((movie) => {
        if (!movie) {
            return res.status(404).send()
        }
        res.send(movie);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

routerFilms.post('/add-film', async(req, res) => {
    try {
        const id = await filmController.addFilm(req.body);
        res.json(id);
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});


routerFilms.put('/update-film/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await filmController.updateFilm(id, req.body));
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerFilms.delete('/remove-movie/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await filmController.deleteFilm(id);
        res.json(id)
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }

});

module.exports = routerFilms;