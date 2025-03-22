// CONTROLLER

import { getPath } from '../util/path.js';

export function pageNotFound(req, res, next) {
  const __dirname = getPath();

  // res
  //   .status(404)
  //   .sendFile(path.join(__dirname, '..', 'views', 'page-not-found.html'));

  res
    .status(404)
    .render('page-not-found', {
      docTitle: '404 - Page Not Found',
      path: '/page-not-found',
    });
}
