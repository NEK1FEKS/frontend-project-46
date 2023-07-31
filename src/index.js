import _ from 'lodash';
import readFile from './readfile.js';
import parse from './parsers.js';
import path from 'path';

const genDiff = (filePath1, filePath2) => {
  const extname1 = path.extname(filePath1);
  const extname2 = path.extname(filePath2);
  const readObj1 = readFile(filePath1);
  const readObj2 = readFile(filePath2);
  //console.log(extname1);
  //console.log(extname2);
  const obj1 = parse(readObj1, extname1);
  const obj2 = parse(readObj2, extname2);

  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const difference = keys.reduce((acc, key) => {
    if (obj1[key] !== obj2[key]) {
      acc[` - ${key}`] = obj1[key];
      acc[` + ${key}`] = obj2[key];
    } else if (obj1[key] === obj2[key]) {
      acc[`   ${key}`] = obj1[key];
    }
    return acc;
  }, {});
  return JSON.stringify(difference, null, ' ').replace(/"/gi, '').replace(/,/gi, '');
};

export default genDiff;