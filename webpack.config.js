const path = require('path');
const Dotenv = require('dotenv-webpack');

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
  plugins: [new Dotenv()],
};
