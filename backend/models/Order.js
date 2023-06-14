import mongoose from "mongoose";

const Order = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    phone: {type: Number},
    address: {type: String},
    shopName: {type: String},
    cart: {type: String},
    sum: {type: Number},
});

export default mongoose.model('Order', Order);