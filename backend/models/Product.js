import mongoose from "mongoose";

const Product = new mongoose.Schema({
    shopName: {type: String},
    position: {type: String},
    price: {type: Number},
});

export default mongoose.model('Product', Product);