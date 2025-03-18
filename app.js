import bodyParser from 'body-parser';
import express from 'express';
import path from 'node:path';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { getPath } from './util/path.js';
import { pageNotFound } from './controllers/error.js';

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(getPath(), '..', 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(pageNotFound);

app.listen(3000);
