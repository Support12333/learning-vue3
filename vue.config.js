const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@styles', resolve('src/styles'))

    if (process.env.NODE_ENV === "production") {
      // 去除打印和注释输出
      config.optimization.minimizer('terser').tap(args => {
        Object.assign(args[0].parallel, true)
        Object.assign(args[0].terserOptions, {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.error', 'alert']
          },
          format: {
            comments: false
          }
        })
        Object.assign(args[0].extractComments, false)
        return args
      })
    }
  },

  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
      }),
    ],
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@styles/mixin.scss";`
      }
    }
  }

})
