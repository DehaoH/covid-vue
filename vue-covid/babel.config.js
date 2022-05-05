module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],

  //vant 的配置
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
