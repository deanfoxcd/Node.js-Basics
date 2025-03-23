import express from 'express';
import {
  getCart,
  getCheckout,
  getIndex,
  getOrders,
  getProducts,
} from '../controllers/shop.js';

const router = express.Router();

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/cart', getCart);
router.get('/checkout', getCheckout);
router.get('/orders', getOrders);

export default router;
