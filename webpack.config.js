const path = require('path');

const pathEntry = './src/scrollTo.js';

module.exports = {
  entry: {
    'scrollTo': pathEntry,
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    library: 'ScrollToVertical',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  }
};
