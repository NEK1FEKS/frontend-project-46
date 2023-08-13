import stylishFormat from './stylish.js';
import plainFormat from './plain.js';
import jsonFormat from './json.js';

const formatter = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylishFormat(tree);
    case 'plain':
      return plainFormat(tree);
    case 'json':
      return jsonFormat(tree);
    default:
      throw new Error('Unknown format');
  }
};

export default formatter;