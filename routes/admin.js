// MODEL

import express from 'express';
import {
  getAddProduct,
  getProducts,
  postAddProduct,
} from '../controllers/admin.js';

const router = express.Router();

// GET
router.get('/add-product', getAddProduct);
router.get('/products', getProducts);

// POST
router.post('/add-product', postAddProduct);

export default router;
