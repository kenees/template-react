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
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader?cacheDirectory',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'static/images/',
            limit: 8129,
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader?cacheDirectory',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'static/font/',
          }
        }
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin()
    new webpack.DefinePlugin({
      'process.env': {
        TAG_SYS: JSON.stringify('/tagsys'),
      }
    }),
  ],
  devServer: {
    // useLocalIp: true,
    // contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    // port: 6689,
    proxy,
  }
};


module.exports = merge(webpackConfigBase, webpackConfigDev);