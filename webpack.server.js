const path = require('path');

module.exports = {
  // Inform webpack this is nodeJS bundle not for browser
  target: 'node',
  // Root file of server application
  entry: './server/src/index.js',
  // Tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Tell webpack to run Babel on every file it runs thorough
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {
              targets: {
                browsers: ['last 2 versions']
              }
            }],
          ]
        }
      }
    ]
  }
};