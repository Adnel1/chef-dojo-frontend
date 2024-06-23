const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/front/js/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
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
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: '4geeks.ico',
      template: 'template.html'
    }),
    new webpack.DefinePlugin({
      'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || 'https://chef-dojo-backend-b16a71e8fca3.herokuapp.com')
    })
  ]
};
