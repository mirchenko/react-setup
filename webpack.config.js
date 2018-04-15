const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point
  entry: './src/index.js',
  // Output dist
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  // devServer configure
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  // Loaders setup
  module: {
    rules: [
      // Rules for js babel
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // Rules for css node-sass
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  },
  // Plugins...
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    })
  ]
};


