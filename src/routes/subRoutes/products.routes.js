import { Router } from 'express';
import { getProducts } from '../../controllers/getProducts.js';
import { getDetails } from '../../controllers/getDetails.js';
import { postProducts } from '../../controllers/postProducts.js';
import { updateProducts } from '../../controllers/updateProducts.js';
import { deleteProducts } from '../../controllers/deleteProducts.js';

const productsRouter = Router();

// const compaaa = () => {
//     console.log('compaaa')
// }

productsRouter.get('/', getProducts)
productsRouter.get('/:idDetails', getDetails)
productsRouter.post('/', postProducts)
productsRouter.put('/:id', updateProducts)
productsRouter.delete('/:id', deleteProducts)

export default productsRouter