// CONTROLLER

import { Product } from '../models/product.js';

export function getAddProduct(req, res, next) {
  res.render('admin/add-product', {
    docTitle: 'Add Products',
    path: '/admin/add-product.js',
  });
}

export function postAddProduct(req, res, next) {
  const title = req.body.title;
  const imgUrl = req.body.imgUrl;
  const description = req.body.description;
  const price = req.body.price;

  const product = new Product(title, imgUrl, description, price);
  product.save();
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
