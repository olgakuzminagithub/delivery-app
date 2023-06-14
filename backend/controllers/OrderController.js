import Order from "../models/Order.js";

class OrderController {
    async create(req, res) {
        try {
            const {name, email, phone, address, shopName, cart, sum} = req.body;
            const order = await Order.create({name, email, phone, address, shopName, cart, sum});
            res.json(order)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const orders = await Order.find();
            return res.json(orders);
        } catch (e) {
            res.status(500).json(e)
        }

    }
    async getOne(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({messge: 'Id not indicated'})
            }
            const order = await Order.findById(id);
            return res.json(order);

        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const order = req.body;
            if (!order._id) {
                res.status(400).json({messge: 'Id not indicated'})
            }
            const updateOrder = await Order.findByIdAndUpdate(order._id, order, {new: true})
            return res.json(updateOrder);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({messge: 'Id not indicated'})
            }
            const order = await Order.findByIdAndDelete(id);
            return res.json(order);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new OrderController();