const mongoose = require('mongoose');
const order = require('../Models/order');

class Order {
    constructor() {

    }

    //GET (return all orders from DB)
    async findAllOrders(orderCollection) {
        return order.find(orderCollection)
    };

    //GET (return a film with id)
    async findById({ _id: id }) {
        return order.findOne({ _id: id });
    };

    //POST (adding a new film)
    async addOrder(rent) {
            return order.create(rent)
        }
        //PUT (update an existing film)
    async updateOrder(id, rent) {
            const idFound = order.findOne({ _id: id })
            return idFound.update(rent)
        }
        //DELETE (delete a film by id)
    async deleteOrder(id) {
        const idFound = order.findOne({ _id: id })
        return idFound.remove()
    }

}

let orderController = new Order();
module.exports = orderController;