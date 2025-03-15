// import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

// import { requestHandler } from './routes-v1.js';

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded());

app.use('/add-product', (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Add product</button></form>"
  );
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('Home');
  res.send('<h1>Hello from express</h1>');
});

// const server = http.createServer(app);
app.listen(3000);

// const server = http.createServer(requestHandler);

// server.listen(3000);
