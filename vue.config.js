const path = require('path')

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js', // 把src 修改为examples
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.join(__dirname, 'packages')) // 注意这里需要绝对路径，所有要拼接__dirname
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
