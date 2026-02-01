export default [
  {
    files: ['server/**/*.js', 'test/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        __dirname: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'off',
      'no-console': 'off',
      'eqeqeq': ['error', 'always'],
      'curly': 'warn'
    }
  }
];
