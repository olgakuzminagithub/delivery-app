import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const ProductRouter = new Router()

ProductRouter.post('/',  ProductController.create)
ProductRouter.get('/', ProductController.getAll)
ProductRouter.get('/:id', ProductController.getOne)
ProductRouter.put('/', ProductController.update)
ProductRouter.delete('/:id', ProductController.delete)

export default ProductRouter;