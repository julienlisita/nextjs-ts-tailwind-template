// eslint.config.js

const { dirname } = require('path');
const { fileURLToPath } = require('url');
const { FlatCompat } = require('@eslint/eslintrc');
const prettierPlugin = require('eslint-plugin-prettier');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/no-unescaped-entities': 'off',
    },
  },
];
