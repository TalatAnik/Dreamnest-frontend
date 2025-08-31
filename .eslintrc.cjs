module.exports = {
  env: { browser: true, es2023: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: { ecmaVersion: 2023, sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react','react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
  }
};
