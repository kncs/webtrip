
module.exports = {

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_url : process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  server_port : process.env.OPENSHIFT_NODEJS_PORT || '9090'
