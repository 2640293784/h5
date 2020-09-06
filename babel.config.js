module.exports = {
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    // "@babel/plugin-transform-runtime",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
    // ['import', {
    //   libraryName: 'mint-ui',
    //   libraryDirectory: 'es',
    //   style: true
    // }, 'mint-ui']
  ]
}