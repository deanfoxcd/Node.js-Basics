import express from 'express';

const router = express.Router();

router.use('/', (req, res, next) => {
  console.log('Home');
  res.send('<h1>Hello from express</h1>');
});

export default router;
