import { Router } from "express";
import OrderRouter from "./OrderRouter.js";
import ProductRouter from "./ProductRouter.js";


const router = new Router()

router.use('/orders', OrderRouter);
router.use('/products', ProductRouter)

export default router;
