// eslint.config.mjs

import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierPlugin from 'eslint-plugin-prettier';

const eslintConfig = [
  { ignores: ['.next/**', 'next-env.d.ts', 'src/generated/**'] },

  ...nextVitals,
  ...nextTypescript,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    files: ['src/generated/**/*.*'],
    rules: {
      'prettier/prettier': 'off',
    },
  },
];

export default eslintConfig;
