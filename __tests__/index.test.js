import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const filePath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const expected = readFile('expect.txt');

test(genDiff, () => {
  expect(genDiff(filePath1, filepath2)).toEqual(expected);
});