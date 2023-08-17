import YAML from 'js-yaml';

export default (filepath, extname) => {
  switch (extname) {
    case 'json': return JSON.parse(filepath);
    case 'yaml': return YAML.load(filepath);
    case 'yml': return YAML.load(filepath);
    default:
      throw new Error('Unknown format!');
  }
};
