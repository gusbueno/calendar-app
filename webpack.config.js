const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const extractSass = new ExtractTextPlugin({
  filename: 'styles.[hash].css' // avoid browser cache
})

module.exports = {
  entry: ['babel-polyfill', './src/js/index.js'],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          {
            fallback: require.resolve('style-loader'),
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  minimize: true,
                  sourceMap: true
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  ident: 'postcss'
                }
              }
            ]
          }
        )
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[local]'
            }
          }, {
            loader: 'sass-loader'
          }]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    extractSass
  ]
}