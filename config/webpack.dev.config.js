const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.base.config.js');
const proxy = require('./proxy');

const webpackConfigDev = {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                }
              }
            },
            'sass-loader'],
      },
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin()
    new webpack.DefinePlugin({
      'process.env': {
        ASSET_PATH: JSON.stringify('http://localhost:9000')
      }
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: "0.0.0.0",
    port: 7003,
    proxy: proxy,
  }
};


module.exports = merge(webpackConfigBase, webpackConfigDev);