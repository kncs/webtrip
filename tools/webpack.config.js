var webpack = require('webpack')
var path = require('path')
var config = require('../config')

var __PROD__ = config.env === 'production';
var __DEV__ = config.env === 'development';

//----------------------------------------------
// Define webpack object
//----------------------------------------------
var webpackConfig = {
  context: path.join(__dirname, '../'),
  module: {},
  // Hack for joi lib
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty',
    crypto: 'empty'
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx', '.json'],
  },
}


//----------------------------------------------
// Entry points
//----------------------------------------------
var appEntryPoint = []

if(__DEV__ ) appEntryPoint.push('webpack-dev-server/client?http://localhost:3000')
if(__DEV__ ) appEntryPoint.push('webpack/hot/only-dev-server')
appEntryPoint.push('./frontend/app.js')

webpackConfig.entry = {
  app: appEntryPoint,
  vendor: ['bootstrap', 'jquery', 'react', 'react-dom'],
}


//----------------------------------------------
// Output
//----------------------------------------------
webpackConfig.output = {
  filename: 'app.bundle.js',
  path: path.join(__dirname, '../build/public/'),
  publicPath: '/public/'
}

//----------------------------------------------
// Plugins
//----------------------------------------------

var plugins = webpackConfig.plugins = []



plugins.push(
  new webpack.DefinePlugin({
    __DEV__ : __DEV__,
    __PROD__: __PROD__,
    'process.env':{
      'NODE_ENV': __PROD__ ? JSON.stringify('production') : JSON.stringify('development')
    }
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  new webpack.ProvidePlugin({$: 'jquery',jQuery: 'jquery'})
)

if (__DEV__) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}
else if (__PROD__) {
  plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: true
      }
    })
  )
}



//----------------------------------------------
// Loaders
//----------------------------------------------

var loaders = webpackConfig.module.loaders = []

// Javascript & json
loaders.push({
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: ['react-hot', 'babel']
}, {
  test: /\.json$/,
  loader: 'json'
})

// Styles CSS
loaders.push({
  test: /\.css$/,
  loaders: ['style', 'css']
})

// Styles SASS
loaders.push({
  test: /\.scss$/,
  loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
})

// Styles LESS
loaders.push({
  test: /\.less$/,
  loaders: ['style', 'css?sourceMap', 'less?sourceMap']
})


// Fonts
loaders.push({
  test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
  loader: 'url'
})

// Images
loaders.push({
  test: /\.(png|jpg|gif)/,
  loaders: ['url', 'image-webpack'],
})


//----------------------------------------------
// Expose webpack configuation
//----------------------------------------------
module.exports = webpackConfig
