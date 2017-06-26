module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    "browser": true,
    "node": true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // // don't require .vue extension when importing
    // 'import/extensions': ['error', 'always', {
    //   'js': 'never',
    //   'vue': 'never'
    // }],
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    'import/no-unresolved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': ["error", {
      allow: ['log', 'warn', 'error']
    }],
    'no-unused-vars': ["warn", { "args": "none" }],
    'no-param-reassign': ["error", { "props": false }],
    'newline-per-chained-call': ["error", { "ignoreChainWithDepth": 10 }],
    'no-underscore-dangle': ["error", { "allowAfterThis": true }],
    // 'consistent-return': ["error", { "treatUndefinedAsUnspecified": true }]
    'consistent-return': ["off"],
    'quote-props': ["off"],
    'arrow-parens': ["error", "as-needed"],
    'no-mixed-operators': ["off"]
  }
}
