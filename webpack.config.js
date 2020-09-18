const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index',
  devtool: 'source-map',
  module: {
    rules: [],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
