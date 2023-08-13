import stylishFormat from './stylish.js';
import plainFormat from './plain.js';

const formatter = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylishFormat(tree);
    case 'plain':
      return plainFormat(tree);
    default:
      throw new Error('Unknown format');
  }
};

export default formatter;