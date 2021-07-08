module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  ignorePatterns: ['src/images/'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/no-unescaped-entities': 0,
    'prettier/prettier': 2,
    'react/prop-types': 0,
  },
};
