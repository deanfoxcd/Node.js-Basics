import express from 'express';

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    "<form action='/admin/add-product' method='POST'><input type='text' name='title'/><button type='submit'>Add product</button></form>"
  );
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
