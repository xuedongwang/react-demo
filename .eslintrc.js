module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'react'
  ],
  // add your custom rules here
  rules: {
    semi: ["error", "always"]
  },
  globals: {
    $http: false,
    $date: false
  }
}