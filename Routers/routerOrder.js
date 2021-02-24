const routerOrder = require('express').Router();
const orderController = require('../Controllers/orderController')
const orderSchema = require('../Models/order')

routerOrder.get('/order', async(req, res) => {
    try {
        res.json(await orderController.findAllOrders())
    } catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
        console.log(err.message)
    }
});

routerOrder.get('/orders/:id', (req, res) => {
    orderSchema.findById(req.params.id).then((rental) => {
        if (!rental) {
            return res.status(404).send()
        }
        res.send(rental);

    }).catch((error) => {
        res.status(500).send(error)
    })
})


routerOrder.post('/add-order', async(req, res) => {
    try {
        const id = await orderController.addOrder(req.body);

        res.json(id);
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

routerOrder.put('/update-order/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await orderController.updateOrder(id, req.body));
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerOrder.delete('/remove-order/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await orderController.deleteOrder(id);
        res.json(id);
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }

});

module.exports = routerOrder;