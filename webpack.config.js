const path = require('path')
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'build.js',
    path: path.join(__dirname, './src/js/build')
  }
}
