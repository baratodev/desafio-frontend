const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  }),
  new VueLoaderPlugin(),
];

if (process.env.NODE_ENV !== 'production') {
  plugins.push(new BundleAnalyzerPlugin({
    analyzerPort: 18000
  }));
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[chunkhash].js?[contenthash]',
  },
  optimization: {
   splitChunks: {
     chunks: 'all'
   }
 },
  stats: {
    children: false,
  },
  resolve: {
    alias: {
      'vue-material/src/components': 'vue-material/dist/components'
    }
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
        test: /\.(s?c|sa)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|ico|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: true,
              outputPath: '/images/'
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
  plugins
};