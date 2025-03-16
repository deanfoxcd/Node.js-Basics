import bodyParser from 'body-parser';
import express from 'express';
import path from 'node:path';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { getPath } from './util/path.js';

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  const __dirname = getPath();

  res
    .status(404)
    .sendFile(path.join(__dirname, '..', 'views', 'page-not-found.html'));
});

app.listen(3000);
