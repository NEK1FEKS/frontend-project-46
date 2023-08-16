import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const plainFormat = (tree) => {
  const iter = (node, path) => {
    const lines = node.flatMap((data) => {
      const {
        type, key, value, valueBefore, valueAfter, children,
      } = data;
      switch (type) {
        case 'nested': {
          return iter(children, `${path}${key}.`);
        }
        case 'added': {
          return `Property '${path}${key}' was added with value: ${getValue(value)}`;
        }
        case 'deleted': {
          return `Property '${path}${key}' was removed`;
        }
        case 'changed': {
          return `Property '${path}${key}' was updated. From ${getValue(valueBefore)} to ${getValue(valueAfter)}`;
        }
        case 'unchanged': {
          return [];
        }
        default:
          throw new Error(`Unknown type <${type}>`);
      }
    });
    return lines.join('\n');
  };

  return iter(tree, '');
};

export default plainFormat;
