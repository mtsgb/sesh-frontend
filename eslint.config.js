import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules/',
      'build/',
      'dist/',
      'public/',
      'coverage/',
      '.next/',
      '**/.base/',
    ],
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: '@typescript-eslint/parser',
    },
  },
  {
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
      import: pluginImport,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      // Not needed with React 17+
      'react/react-in-jsx-scope': 'off',
      // Enforce semicolons
      semi: ['error', 'always'],
      // Enforce single quotes
      quotes: ['error', 'single'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          // Ignore variables that start with _
          varsIgnorePattern: '^_',
          args: 'after-used',
          // Ignore function arguments that start with _
          argsIgnorePattern: '^_',
        },
      ],
      'eol-last': ['error', 'always'],
      // Use strict equality
      eqeqeq: ['error', 'always'],
      // Require curly braces for control statements
      curly: 'error',
      'linebreak-style': 0,
      // Warn on console.log statements
      'no-console': 'warn',
      // Suggest const for variables never reassigned
      'prefer-const': 'error',
      'no-whitespace-before-property': 'error',
      'no-multiple-empty-lines': 'error',
      'no-multi-spaces': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-trailing-spaces': 'error',
      'no-inline-comments': 'error',
      'block-spacing': 'error',
      'arrow-spacing': 'error',
      'vars-on-top': 'error',
      'spaced-comment': ['error', 'always'],
      complexity: ['error', 18],
      'max-nested-callbacks': ['error', 3],
      'max-depth': ['error', 3],
      'max-lines-per-function': ['warn', 100],
      // Limit max line length to 80 characters
      'max-len': [
        'warn',
        {
          code: 80,
          comments: 100,
          tabWidth: 2,
          // Ignore lines that start with import or are part of a block comment and constants
          ignorePattern: '^import |^\\s*\\*|^\\s*const\\s+[A-Z0-9_]+\\s*=.*',
          ignoreStrings: true,
        },
      ],
      // Apply Prettier rules as errors
      'prettier/prettier': 'error',
      // Import order rule
      'import/order': [
        'warn',
        {
          groups: [
            // Pacotes externos primeiro
            ['builtin', 'external'],
            // Depois os imports internos
            ['internal'],
            // Depois de custom types ou variáveis internas
            ['parent', 'sibling', 'index'],
          ],
          // Forçar uma linha em branco entre os grupos
          'newlines-between': 'never',
          alphabetize: {
            // Organiza os imports em ordem alfabética
            order: 'asc',
            // Ignora a diferença entre maiúsculas e minúsculas
            caseInsensitive: true,
          },
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['function', 'export', 'return'],
        },
        {
          blankLine: 'always',
          prev: ['function', 'export', 'var', 'let', 'const'],
          next: 'expression',
        },
        {
          blankLine: 'always',
          prev: 'expression',
          next: ['function', 'export', 'var', 'let', 'const'],
        },
        {
          blankLine: 'always',
          prev: ['import'],
          next: ['const'],
        },
      ],
      // Disable prop-types if using TypeScript
      // 'react/prop-types': 'off',
      // Warn against using array index as keys
      // 'react/no-array-index-key': 'warn',
      // Warn against using `any` type
      // '@typescript-eslint/no-explicit-any': 'warn',
      // Warn if function return types are not explicit
      // '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'max-lines-per-function': [
        'error',
        {
          max: 400,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },
  {
    files: ['**/*.test.ts', '**/*Controller.ts'],
    rules: {
      'max-lines-per-function': [
        'error',
        {
          max: 600,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },
];