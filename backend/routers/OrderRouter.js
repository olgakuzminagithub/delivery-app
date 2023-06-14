import { Router } from "express";
import OrderController from "../controllers/OrderController.js";

const OrderRouter = new Router()

OrderRouter.post('/',  OrderController.create)
OrderRouter.get('/', OrderController.getAll)
OrderRouter.get('/:id', OrderController.getOne)
OrderRouter.put('/', OrderController.update)
OrderRouter.delete('/:id', OrderController.delete)

export default OrderRouter;