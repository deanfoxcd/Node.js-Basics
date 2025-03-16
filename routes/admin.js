import express from 'express';
import path from 'node:path';
import { getPath } from '../util/path.js';

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  const __dirname = getPath();

  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
