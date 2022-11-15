const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    publicPath: '/',
    filename: 'assets/js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist/')
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'], // 默认解析扩展文件
    alias: {
      '@': path.join(__dirname, '../', 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: /src/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(mtl|obj)$/,
        type: "asset/resource",
      },
      {
        test: /\.md$/,
        use: "raw-loader"
      }
    ]
  },

  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production',
      template: './public/index.html',
    }),
  ],

  optimization: {
    minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: false,
          }
        })
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20,
      maxSize: 40000,
      minChunks: 1,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test:  /[\\\/]node_modules[\/\\]/,
          chunks: 'all'
        },
      }
    },
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    }
  }
};