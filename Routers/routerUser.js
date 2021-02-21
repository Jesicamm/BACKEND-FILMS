const routerUser = require('express').Router();
const userController = require('../Controllers/userController')
const userSchema = require('../Models/user')

// API routes
routerUser.get('/users', async(req, res) => {
    try {
        res.json(await userController.findAllUser())
    } catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
        console.log(err.message)
    }
});

routerUser.get('/user:id', async(req, res) => {
    try {
        res.json(await userController.findOne(req))
    } catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerUser.post('/add-user', async(req, res) => {
    try {
        const id = await userController.addUser(new userSchema(req.body));
        const status = 'success';
        res.json({ status, id });
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

routerUser.put('/update-user:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.updateFilm(id, new userSchema(req.body)));
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerUser.delete('/remove-user/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = 'deleted'
        await userController.deleteFilm(id);
        res.json({ status, id });
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }

});

module.exports = routerUser;