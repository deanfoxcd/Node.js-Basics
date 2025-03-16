import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Home');
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

export default router;
