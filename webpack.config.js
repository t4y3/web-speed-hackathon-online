'use strict';

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BUILD_STATS = !!process.env.BUILD_STATS;

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

  entry: path.resolve(__dirname, 'src', 'app.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [].concat(
    BUILD_STATS
      ? [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: path.join(__dirname, './build/stats/app.html'),
          defaultSizes: 'gzip',
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename: path.join(__dirname, './build/stats/app.json'),
          statsOptions: null,
          logLevel: 'info'
        })
      ]
      : [
        new webpack.DefinePlugin({
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'SERVICE_ENV': JSON.stringify(process.env.SERVICE_ENV),
          // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'process.env.USE_MOCK_DATA': JSON.stringify(process.env.USE_MOCK_DATA),
        }),
        new HtmlWebpackPlugin({
          title: 'Amida Blog: あみぶろ',
          template: path.resolve(__dirname, 'src', 'index.html'),
          inject: false,
        }),
      ]
  ).concat([
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'SERVICE_ENV': JSON.stringify(process.env.SERVICE_ENV),
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.USE_MOCK_DATA': JSON.stringify(process.env.USE_MOCK_DATA),
    }),
    new HtmlWebpackPlugin({
      title: 'Amida Blog: あみぶろ',
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: false,
    })
  ]),

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },

  target: 'web',

  devtool: false
};
