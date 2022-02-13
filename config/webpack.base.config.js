const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const extractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: 'static/js/app.js',
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
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: /src/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.css$/,
      //   exclude: /src/,
      //   use: extractPlugin.extract({
      //     fallback: 'style-loader',
      //     use: 'css-loader',
      //   })
      // },
    
    ]
  },

  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production',
      template: './public/index.html'
    }),
   
    //  单独导出css
    // new extractPlugin('./static/css/styles.css'),
    // new BundleAnalyzerPlugin({ analyzerPort: 8919 })
  ]
};