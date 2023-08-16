import _ from 'lodash';

const stylishFormat = (tree) => {
  const spacesCount = 4;

  const getSpace = (depth) => ' '.repeat(depth * spacesCount - 2);
  const getSpaceBack = (depth) => ' '.repeat(depth * spacesCount - spacesCount);

  const stringify = (data, depth) => {
    if (!_.isObject(data)) {
      return `${data}`;
    }
    const entries = Object.entries(data);
    const lines = entries.map(([key, value]) => `${getSpace(depth)}  ${key}: ${stringify(value, depth + 1)}`);

    return ['{', ...lines, `${getSpaceBack(depth)}}`].join('\n');
  };

  const iter = (node, depth) => {
    const lines = node.map((data) => {
      const {
        type, key, value, valueBefore, valueAfter, children,
      } = data;
      switch (type) {
        case 'nested': {
          return `${getSpace(depth)}  ${key}: ${iter(children, depth + 1)}`;
        }
        case 'added': {
          return `${getSpace(depth)}+ ${key}: ${stringify(value, depth + 1)}`;
        }
        case 'deleted': {
          return `${getSpace(depth)}- ${key}: ${stringify(value, depth + 1)}`;
        }
        case 'changed': {
          return `${getSpace(depth)}- ${key}: ${stringify(valueBefore, depth + 1)}\n${getSpace(depth)}+ ${key}: ${stringify(valueAfter, depth + 1)}`;
        }
        case 'unchanged': {
          return `${getSpace(depth)}  ${key}: ${stringify(value, depth + 1)}`;
        }
        default:
          throw new Error(`Unknown type <${type}>`);
      }
    });
    return ['{', ...lines, `${getSpaceBack(depth)}}`].join('\n');
  };

  return iter(tree, 1);
};

export default stylishFormat;
