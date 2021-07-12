module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'prefer-spread': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
  },
  globals: {
    React: 'readonly',
    ReactDOM: 'readonly',
    document: 'readonly',
  },
}
