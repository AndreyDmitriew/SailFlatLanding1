var path = require('path');
 
module.exports = {
  entry: './scripts/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};