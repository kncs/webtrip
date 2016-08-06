var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var configWebpack = require('./webpack.config');
var server = require('../backend/server');
var config = require('../backend/config')

new WebpackDevServer(webpack(configWebpack), {
  publicPath: configWebpack.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    "*": 'http://' + config.server_url + ':' + config.server_port
  }
}).listen(config.dev_server_port, config.dev_server_url, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://'+ config.dev_server_url + ':' + config.dev_server_port);
});
