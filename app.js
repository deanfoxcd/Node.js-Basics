import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  const __filename = fileURLToPath(import.meta.url);
  console.log(__filename);
  const __dirname = path.dirname(__filename);
  console.log(__dirname);

  res
    .status(404)
    .sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(3000);
