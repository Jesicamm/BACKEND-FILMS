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

routerUser.get('/users/:id', (req, res) => {
    userSchema.findById(req.params.id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user);

    }).catch((error) => {
        res.status(500).send(error)
    })
})

routerUser.get('/users/name/:name', async(req, res) => {
    try {
        const name = req.params.name;

        let result = await userController.findOneUser(name);

        res.json(result)
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }

});

routerUser.post('/add-user', async(req, res) => {
    try {
        const id = await userController.addUser(req.body);

        res.json(id);
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

routerUser.put('/update-user/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.updateUser(id, req.body));
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerUser.delete('/remove-user/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await userController.deleteUser(id);
        res.json(id);
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }

});

module.exports = routerUser;