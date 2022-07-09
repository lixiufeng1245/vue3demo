/*
 * @Author: leo
 * @FilePath: \yxj\vue.config.js
 */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const { defineConfig } = require('@vue/cli-service')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const smp = new SpeedMeasurePlugin();
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
          .loader('px2rem-loader')
          .options({
            remUnit: 75
          })
       config.module
         .rule('svg')
         .exclude.add(resolve('src/icons'))
         .end()
       config.module
         .rule('icons')
         .test(/\.svg$/)
         .include.add(resolve('src/icons'))
         .end()
         .use('svg-sprite-loader')
         .loader('svg-sprite-loader')
         .options({
           symbolId: 'icon-[name]'
         })
         .end()
  },
  
  configureWebpack: smp.wrap({
    plugins: [new BundleAnalyzerPlugin({
      analyzerMode:'disabled',
      generateStatsFile:true
      })],
  }),
});


