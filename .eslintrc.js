module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue
    'plugin:vue/vue3-strongly-recommended',
    // js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never" // default값은 "always"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never", // default값은 "never"
        "normal": "never", // default값은 "always"
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/multi-word-component-names": ["error", {
      "ignores": []
    }]
  }
}
