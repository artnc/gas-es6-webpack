import path from 'path';
import webpack from 'webpack';

export default {
  entry: [path.join(__dirname, 'src/index.js')],
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: { loader: 'babel-loader' },
    }],
  },
  output: {
    filename: 'Code.gs',
    libraryTarget: 'this',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
    ],
  },
};
