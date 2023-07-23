module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true // Add node environment here if needed
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off'
    // Add more rules here if needed
  }
};
