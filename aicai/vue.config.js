const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i // 需要开启gz压缩的格式;
// eslint-disable-next-line camelcase
const Is_Pord = ['production', 'test'].includes(process.env.VUE_APP_SERVER_EVN) // 这里的Is_Pord指的是生产环境和测试环境(这里统称Is_Pord)
module.exports = {
  outputDir: 'dist',
  // lintOnSave: false,
  chainWebpack: (config) => {
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
      .set('views', resolve('./src/views'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  },
  runtimeCompiler: true,
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "assets/css/index.scss";'
      },
      css: {},
      postcss: {
        plugins: [
          // 把px单位换算成rem单位
          require('postcss-pxtorem')({
            rootValue: 37.5, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: ['.van', '.my-van'], // 要忽略的选择器并保留为px。
            propList: ['*'] // 可以从px更改为rem的属性。
            // minPixelValue: 2 // 设置要替换的最小像素值。
          })
        ]
      }
    }
  },
  configureWebpack: config => {
    // eslint-disable-next-line camelcase
    if (Is_Pord) {
      const plugins = []
      // 添加gzip压缩
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
      config.plugins = [...config.plugins, ...plugins]
    }
  }
}
