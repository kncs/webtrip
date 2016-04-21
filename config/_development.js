
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

  // ----------------------------------
  // Email Configuration
  // ----------------------------------
  smtp_login : process.env.SMTP_LOGIN || 'kevin.clarens@gmail.com',
  smtp_password : process.env.SMTP_PASSWORD || 'secret',

  email_route_url : process.env.EMAIL_URL || 'http://localhost:3000/email',
  email_destination : process.env.EMAIL_DESTINATION || 'kevin.clarens@gmail.com'
}

