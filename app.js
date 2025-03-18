import bodyParser from 'body-parser';
import express from 'express';
import path from 'node:path';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { getPath } from './util/path.js';

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(getPath(), '..', 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  const __dirname = getPath();

  // res
  //   .status(404)
  //   .sendFile(path.join(__dirname, '..', 'views', 'page-not-found.html'));

  res
    .status(404)
    .render('page-not-found', { docTitle: '404 - Page Not Found' });
});

app.listen(3000);
