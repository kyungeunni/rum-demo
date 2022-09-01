const webpack = require('webpack')
const path = require('path');
const serviceVersion = require("./package.json").version
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({'serviceVersion': JSON.stringify(serviceVersion)}),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          sourceMap: true,
        }
      }),
    ],
  },
};
