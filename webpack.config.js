const path = require('path');
const camelCase = require('camelcase');
const webpack = require('webpack');

const pkgPath = process.cwd();
const pkg = require(path.resolve(pkgPath, './package.json'));

const outputMain = path.parse(pkg.main);
const outputPath = outputMain.path || 'dist';
const outputName = outputMain.name || 'bundle';
const outputFile = outputMain.base || 'bundle.js';
const outputPathLocal = path.resolve(pkgPath, outputPath);

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  output: {
    path: outputPathLocal,
    filename: outputFile,
    library: camelCase(outputName),
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  stats: {
    colors: true,
    reasons: true,
  },
  externals: [
    'react',
    'react-dom',
    'react-router-dom',
    'react-router-redux',
    'react-redux',
    'recompose',
    'redux',
    'redux-actions',
    'redux-saga',
    'reselect',
    'grid-styled',
    'styled-components',
    'styled-normalize',
    'prop-types',
    'lodash',
    'moment',
    'moment-timezone',
    'shortid',
    'axios',
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
