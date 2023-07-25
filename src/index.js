import _ from 'lodash';
import readFile from './readfile.js';

const genDiff = (filePath1, filePath2) => {
  const obj1 = readFile(filePath1);
  const obj2 = readFile(filePath2);
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const difference = keys.reduce((acc, key) => {
    if (obj1[key] !== obj2[key]) {
      acc[`- ${key}`] = obj1[key];
      acc[`+ ${key}`] = obj2[key];
    } else if (obj1[key] === obj2[key]) {
      acc[`  ${key}`] = obj1[key];
    }
    return acc;
  }, {});

  return JSON.stringify(difference, null, ' ').replace(/"/gi, '').replace(/,/gi, '');
};

export default genDiff;