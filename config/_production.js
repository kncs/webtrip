
module.exports = {

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_url : process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  server_port : process.env.OPENSHIFT_NODEJS_PORT || '9090',

  // ----------------------------------
  // Email Configuration
  // ----------------------------------
  smtp_login : 'noreply.colibriautolocation@gmail.com',
  smtp_password : 'noreply.cal.gwada',

  email_route_url : 'http://colibriautolocation-kncs.rhcloud.com/email',
  email_destination : 'colibriautolocation@gmail.com'
}
