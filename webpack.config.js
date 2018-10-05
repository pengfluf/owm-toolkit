const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const libraryName = 'owm-toolkit';

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${libraryName}.min.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node-modules')],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: [],
      },
    ],
  },

  plugins: [
    new CompressionPlugin({
      filename: '[path].gz',
      test: /\.js$/,
    }),
  ],

  optimization: {
    minimize: false,
  },
};
