import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const files = [['file1.json', 'file2.json'], ['file1.yaml', 'file2.yaml'], ['file1.yml', 'file2.yml']];

test.each(files)('genDiff with default format', (file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);
  const expected = readFile('stylishExpect.txt');
  expect(genDiff(filepath1, filepath2)).toEqual(expected);
});

test.each(files)('genDiff with <plain> format', (file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);
  const expected = readFile('plainExpect.txt');
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expected);
});

test.each(files)('genDiff with <json> format', (file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);
  const expected = readFile('jsonExpect.txt');
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(expected);
});