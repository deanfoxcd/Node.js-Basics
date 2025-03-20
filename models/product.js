import path from 'node:path';
import { getPath } from '../util/path.js';
import fs from 'fs';
import { fileURLToPath } from 'node:url';

const products = [];

export class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // console.log('getPath:', getPath());
    const p = path.join(getPath(), '../data', 'products.json');
    // console.log('p:', p);
    // console.log('dirname:', path.dirname(fileURLToPath(import.meta.url)));

    fs.readFile(p, (e, data) => {
      let products = [];

      if (!e) {
        products = JSON.parse(data);
        console.log(products);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (e) => {
        console.log(e);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(getPath(), '../data', 'products.json');

    fs.readFile(p, async (e, data) => {
      if (e) {
        cb([]);
      }
      cb(JSON.parse(data));
    });
  }
}
