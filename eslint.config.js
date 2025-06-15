import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // 🔥 Style rules
      semi: ['error', 'always'], // Obrigatório ponto e vírgula
      quotes: ['warm', 'single'], // Aspas simples
      'comma-dangle': ['error', 'always-multiline'], // Vírgula no final de objetos/arrays multilinha
      'object-curly-spacing': ['error', 'always'], // Espaço dentro de objetos { exemplo: true }
      'arrow-parens': ['error', 'as-needed'], // Remove parênteses em arrow functions com 1 parâmetro
    },
  },
);
