// CONTROLLER

import { Product } from '../models/product.js';

export function getProducts(req, res, next) {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      docTitle: 'All Products',
      path: '/products',
    });
  });
}

export function getIndex(req, res, next) {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      docTitle: 'Shop',
      path: '/',
    });
  });
}

export function getCart(req, res, next) {
  res.render('shop/cart', {
    docTitle: 'Your Cart',
    path: '/cart',
  });
}

export function getCheckout(req, res, next) {
  res.render('shop/cjeckout', {
    docTitle: 'Checkout',
    path: '/checkout',
  });
}
