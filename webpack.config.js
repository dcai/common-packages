const path = require('path');
const camelCase = require('camelcase');
const webpack = require('webpack');
const babelConfig = require('./babel.config');

const pkgPath = process.cwd();
const pkg = require(path.resolve(pkgPath, './package.json'));

const { entry = './src/index.js' } = pkg;

const outputMain = path.parse(pkg.main);
const outputPath = outputMain.path || 'dist';
const outputName = outputMain.name || 'bundle';
const outputFile = outputMain.base || 'bundle.js';
const outputPathLocal = path.resolve(pkgPath, outputPath);

const mode = 'production';

module.exports = {
  mode,
  entry,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
  },
  output: {
    path: outputPathLocal,
    filename: outputFile,
    library: camelCase(outputName),
    libraryTarget: 'umd',
  },
  // devtool: 'source-map',
  devtool: 'eval-cheap-source-map',
  stats: {
    colors: true,
    reasons: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig(),
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
    }),
  ],
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
    'styled-normalize',
    'prop-types',
    'lodash',
    'moment',
    'moment-timezone',
    'shortid',
    'axios',
  ],
};
