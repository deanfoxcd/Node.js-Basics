import express from 'express';
import path from 'node:path';
import { getPath } from '../util/path.js';
import { products } from './admin.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log(products);
  // const __dirname = getPath();

  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  res.render('shop', { prods: products, docTitle: 'Shop' });
});

export default router;
