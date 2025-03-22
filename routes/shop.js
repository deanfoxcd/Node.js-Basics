import express from 'express';
import {
  getCart,
  getCheckout,
  getIndex,
  getProducts,
} from '../controllers/shop.js';
// import { getPath } from '../util/path.js';
// import { products } from './admin.js';

const router = express.Router();

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/cart', getCart);
router.get('/checkout', getCheckout);

export default router;
