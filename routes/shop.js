import express from 'express';
import { getProducts } from '../controllers/products.js';
// import { getPath } from '../util/path.js';
// import { products } from './admin.js';

const router = express.Router();

router.get('/', getProducts);

export default router;
