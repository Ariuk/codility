module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': 0,
    quotes: ['error', 'double']
  }
};
