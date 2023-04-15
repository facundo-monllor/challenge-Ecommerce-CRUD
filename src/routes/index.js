import { Router } from 'express';
import products from  "./subRoutes/products.routes.js"

const router = Router()

router.use("/products", products)

export default router;