// import http from 'http';
import express from 'express';

// import { requestHandler } from './routes-v1.js';

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Add product</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from express</h1>');
});

// const server = http.createServer(app);
app.listen(3000);

// const server = http.createServer(requestHandler);

// server.listen(3000);
