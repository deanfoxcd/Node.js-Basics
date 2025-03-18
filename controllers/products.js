// CONTROLLER

const products = [];

export function getAddProduct(req, res, next) {
  // const __dirname = getPath();
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));

  res.render('add-product', {
    docTitle: 'Add Products',
    path: '/admin/add-product.js',
  });
}

export function postAddProduct(req, res, next) {
  // console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect('/');
}

export function getProducts(req, res, next) {
  // console.log(products);
  // const __dirname = getPath();
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

  res.render('shop', { prods: products, docTitle: 'Shop', path: '/' });
}
