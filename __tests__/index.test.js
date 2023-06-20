import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import result from '../__fixtures__/result.js';

test(genDiff, () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(result());
});