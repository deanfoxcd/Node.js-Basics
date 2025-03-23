import path from 'path';
import fs from 'fs';
import { getPath } from '../util/path.js';

const p = path.join(getPath(), '../data', 'cart.json');

export class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, content) => {
      let cart = { products: [], totalPrice: 0 };

      if (!err) {
        cart = JSON.parse(content);
      }

      const existingProductIndex = cartproducts.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = { ...cart.products, updatedProduct };
      }
      cart.totalPrice += productPrice;
      fs.write(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
}
