const path = require('path');

module.exports = {
  mode: 'developement',
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, './client/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
