const mongoose = require('mongoose');
const order = require('../Models/order');

class Order {
    constructor() {

    }

    //GET (return all orders from DB)
    async findAllOrders(orderCollection) {
        return order.find(orderCollection)
    };

    //GET (return an order with id)
    async findById({ _id: id }) {
        return order.findOne({ _id: id });
    };

    //POST (adding a new order)
    async addOrder(rent) {
            return order.create(rent)
        }
        //PUT (update an existing order)
    async updateOrder(id, rent) {
            const idFound = order.findOne({ _id: id })
            return idFound.update(rent)
        }
        //DELETE (delete an order by id)
    async deleteOrder(id) {
        const idFound = order.findOne({ _id: id })
        return idFound.remove()
    }

}

let orderController = new Order();
module.exports = orderController;