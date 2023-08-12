import _ from 'lodash';
import readFile from './readfile.js';
import parse from './parsers.js';
import path from 'path';
import buildTree from './buildTree.js';
import stylish from './stylish.js';

const getData = (filePath) => {
  const extname = path.extname(filePath);
  const data = parse(readFile(filePath), extname);
  return data;
}
const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const data1 = getData(filePath1);
  const data2 = getData(filePath2);
  const tree = buildTree(data1, data2);
  
  return stylish(tree);

};

export default genDiff;