const path = require('path');

module.exports = {

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_url : process.env.SERVER_URL || 'localhost',
  server_port : process.env.SERVER_PORT || 9090,

  // ----------------------------------
  // Dev Server Configuration
  // ----------------------------------
  dev_server_url : process.env.DEV_SERVER_URL || 'localhost',
  dev_server_port : process.env.DEV_SERVER_PORT || 3000,
}

