import express from 'express';
import path from 'node:path';
import { getPath } from '../util/path.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Home');
  const __dirname = getPath();

  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

export default router;
