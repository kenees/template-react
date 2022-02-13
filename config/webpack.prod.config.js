const path = require('path');
const webpack = require('webpack');
const webpackConfigBase = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 压缩
// const TerserPlugin = require('terser-webpack-plugin');
// 单独导出css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');


const webpackConfigProd = {
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              }
            },
            {
              loader: 'sass-loader',
            },
          ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader?cacheDirectory',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'static/dist/images/',
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
            outputPath: 'static/dist/font/',
          }
        }
      }
    ]
  },
  // 压缩
  // optimization: {
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         compress: false,
  //       }
  //     })
  //   ]
  // },
  plugins: [
    new CleanWebpackPlugin(),
    // new extractPlugin('./static/css/styles.css'),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        TAG_SYS: JSON.stringify('/tagsys'),
      }
    }),
  ],
};

module.exports = merge(webpackConfigBase, webpackConfigProd);