// CONTROLLER

import { Product } from '../models/product.js';

export function getAddProduct(req, res, next) {
  // const __dirname = getPath();
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));

  res.render('admin/add-product', {
    docTitle: 'Add Products',
    path: '/admin/add-product.js',
  });
}

export function postAddProduct(req, res, next) {
  const product = new Product(req.body.title);
  product.save();
  // console.log(req.body);
  res.redirect('/');
}

export function getProducts(req, res, next) {
  // console.log(products);
  // const __dirname = getPath();
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      docTitle: 'Shop',
      path: '/',
    });
  });
}
