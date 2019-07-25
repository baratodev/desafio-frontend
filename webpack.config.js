const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[chunkhash].js?[contenthash]'
  },
  module: {
    rules: [
      {
        use: 'vue-loader',
        test: /\.vue$/
      },
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(s?c)ss$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'sass-loader' },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|ico|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '/css/[name].css?[contenthash]',
      chunkFilename: '/css/bundle.[id].css?[contenthash]',
    })
  ]
};