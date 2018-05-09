const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.join(__dirname, './src/')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
