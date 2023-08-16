import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';

export default (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const readFile = readFileSync(absolutePath, 'utf-8');
  return readFile;
};
