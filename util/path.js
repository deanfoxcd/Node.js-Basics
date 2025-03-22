import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function getPath() {
  const __filename = fileURLToPath(import.meta.url);
  // console.log(__filename);
  const __dirname = path.dirname(__filename);
  // console.log(__dirname);

  return __dirname;
}
