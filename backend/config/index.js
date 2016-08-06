var _debug = require('debug');
var config = require('./_base');

var overrides = require('./'+ '_' + config.env);

var debug = _debug('webtrip:config');

debug('Create configuration.');
debug('Apply environment overrides for NODE_ENV "' + config.env + '".');

var loadConfig = Object.assign({}, config, overrides);
module.exports = loadConfig;
