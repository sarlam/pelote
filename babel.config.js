module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['istanbul', {
      'useInlineSourceMaps': false
    }]
  ]
}
