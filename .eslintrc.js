module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jquery': true,
  },
  'extends': 'airbnb',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    '$': 'readonly',
    'jQuery': 'readonly',
    'ymaps': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    'no-new': 0,
    'class-methods-use-this': 0,
  },
};
