module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue
    'plugin:vue/vue3-essential',
    // js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "vue/comment-directive": ["error", {
      "reportUnusedDisableDirectives": false 
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never" // default값은 "always"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "any", // default값은 "never"
        "normal": "any", // default값은 "always"
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/multi-word-component-names": ["error", {
      "ignores": []
    }],
    "vue/multi-word-component-names": 'off'
  }
}