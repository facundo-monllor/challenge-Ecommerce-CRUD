import { Router } from 'express';
import { getProducts } from '../../controllers/getProducts.js';

const productsRouter = Router();

// const compaaa = () => {
//     console.log('compaaa')
// }

productsRouter.get('/', getProducts)
productsRouter.get('/:name', getProducts)
// productsRouter.post('/', compaaa)
// productsRouter.put('/', compaaa)
// productsRouter.delete('/', compaaa)

export default productsRouter