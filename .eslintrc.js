module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  rules: {
    'no-undef': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'consistent',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    ]
  }
};
