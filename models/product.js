//MODEL

import fs from 'fs';
import path from 'node:path';
import { getPath } from '../util/path.js';

const products = [];

const getProductsFromFile = (cb) => {
  const p = path.join(getPath(), '../data', 'products.json');

  fs.readFile(p, (e, data) => {
    if (e) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

export class Product {
  constructor(title, imgUrl, description, price) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      const p = path.join(getPath(), '../data', 'products.json');

      fs.writeFile(p, JSON.stringify(products), (e) => {
        console.log(e);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
}
