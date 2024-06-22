const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/front/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/, use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }]
      }, //css only files
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/, use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      }, //for images
      { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ['file-loader'] } //for fonts
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: '4geeks.ico',
      template: 'template.html'
    }),
    new webpack.DefinePlugin({
      'process.env.FLASK_APP_KEY': JSON.stringify(process.env.FLASK_APP_KEY || 'default_key'),
      'process.env.FLASK_APP': JSON.stringify(process.env.FLASK_APP || 'src/app.py'),
      'process.env.FLASK_DEBUG': JSON.stringify(process.env.FLASK_DEBUG || '0'),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG || 'TRUE'),
      'process.env.BASENAME': JSON.stringify(process.env.BASENAME || '/'),
      'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || 'http://127.0.0.1:8000')
    })
  ]
};
