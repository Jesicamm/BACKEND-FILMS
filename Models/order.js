const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const orderSchema = new Schema({

    customerId: {
        type: ObjectId,
        ref: 'user',
        require: true
    },
    filmId: {
        type: ObjectId,
        ref: 'film',
        require: true
    },
    order_date: {
        type: Date,
        default: new Date,
    },
    return_date: {
        type: Date,
        default: new Date(+new Date() + 4 * 24 * 60 * 60 * 1000)
    },
    price: {
        type: String,
        default: "2€"
    }
})

const order = mongoose.model("order", orderSchema);
module.exports = order;