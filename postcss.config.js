'use strict';

const path = require('path');

const importPlugin = require('postcss-import');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    importPlugin({
      root: path.resolve(__dirname, 'src'),
    }),

    autoprefixer(),

    customProperties(),

    cssnano({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    }),

    purgecss({
      content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
    })
  ],

  // TODO: 一旦なし
  map: false,
};
