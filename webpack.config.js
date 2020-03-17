const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = function (env, argv) {
  return {
    entry: {
      index: './src/index.js',
      news: './src/news.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: env.production ? 'eval' : 'source-maps',
    mode: env.production ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        excludeChunks: ['news']
      }),
      new HtmlWebpackPlugin({
        template: './src/news.html',
        filename: 'news.html',
        excludeChunks: ['index']
      }),
      new HtmlWebpackPlugin({
        template: './src/whitebook.html',
        filename: 'whitebook.html',
      }),

    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      }
    }
  }
};