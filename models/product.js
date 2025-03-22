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
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      const p = path.join(getPath(), '../data', 'products.json');

      fs.writeFile(p, JSON.stringify(products), (e) => {
        // console.log(e);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}
