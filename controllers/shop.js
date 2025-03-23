// CONTROLLER

import { Cart } from '../models/cart.js';
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
export function getProduct(req, res, next) {
  const productId = req.params.productId;
  Product.findById(productId, (prod) =>
    res.render('shop/product-detail', {
      docTitle: prod.title,
      product: prod,
      path: '/products',
    })
  );
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

export function postCart(req, res, next) {
  const productId = req.body.productId;
  Product.findById(productId, (prod) => {
    Cart.addProduct(productId, prod.price);
  });
  res.redirect('/cart');
}

export function getOrders(req, res, next) {
  res.render('shop/orders', {
    docTitle: 'Your Orders',
    path: '/orders',
  });
}

export function getCheckout(req, res, next) {
  res.render('shop/cjeckout', {
    docTitle: 'Checkout',
    path: '/checkout',
  });
}
