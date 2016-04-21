var _debug = require('debug');
var assign = require('object-assign');
var config = require('./_base');

var overrides = require('./'+ '_' + config.env);

var debug = _debug('colibri:config');

debug('Create configuration.');
debug('Apply environment overrides for NODE_ENV "' + config.env + '".');

var loadConfig = assign({}, config, overrides);
module.exports = loadConfig;
