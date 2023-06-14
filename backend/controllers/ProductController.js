import Product from "../models/Product.js";

class ProductController {
    async create(req, res) {
        try {
            const {shopId, shopName, position, price} = req.body;
            const product = await Product.create({shopId, shopName, position, price});
            res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const products = await Product.find();
            return res.json(products);
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
            const product = await Product.findById(id);
            return res.json(product);

        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const product = req.body;
            if (!product._id) {
                res.status(400).json({messge: 'Id not indicated'})
            }
            const updateProduct = await Product.findByIdAndUpdate(product._id, product, {new: true})
            return res.json(updateProduct);
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
            const product = await Product.findByIdAndDelete(id);
            return res.json(product);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new ProductController();