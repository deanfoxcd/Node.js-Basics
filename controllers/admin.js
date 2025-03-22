// CONTROLLER

import { Product } from '../models/product.js';

export function getAddProduct(req, res, next) {
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
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      docTitle: 'All Products',
      path: '/admin/products',
    });
  });
}
