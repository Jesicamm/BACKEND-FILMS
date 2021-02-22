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

routerFilms.get('films/:id', async(req, res) => {
    try {
        res.json(await filmController.findById(req))
    } catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});
/* routerFilms.get('films/:id', filmController.findById()) */

routerFilms.post('/add-film', async(req, res) => {
    try {
        const id = await filmController.addFilm(new filmSchema(req.body));
        const status = 'success';
        res.json({ status, id });
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

routerFilms.put('/update-film:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await filmController.updateFilm(id, new filmSchema(req.body)));
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerFilms.delete('/remove-movie/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = 'deleted'
        await filmController.deleteFilm(id);
        res.json({ status, id });
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }

});

module.exports = routerFilms;