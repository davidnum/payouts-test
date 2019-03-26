/* eslint-disable-next-line no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* eslint-disable-next-line no-undef */
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              native: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    /* eslint-disable-next-line no-undef */
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};
