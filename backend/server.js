'use strict';


const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const routes = require('./routes');

/**
 * Print out error when uncaught exception happens
 *  then exit
 */

process.on('uncaughtException', function (err) {
  console.log((new Date).toUTCString() + ' uncaughtException:', err.message);
  console.error(err);
  process.exit(1);
});


/**
 * Create app
 */

var app = express();

/*
 * add config to the app
 */
 app.set('config', config);

/**
 * Support json encoded bodies
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Serve static assets
 */

app.use('/public', express.static(path.join(__dirname, '/public')));

/*
 * Mount html engine
 */
app.set('view engine', 'ejs');
app.set('views', __dirname);

/*
 * Mount routes
 */

routes(app);


/**
 * Create the server
 */

var server = http.createServer(app);

/**
 * Start the server
 */
server.listen(app.settings.config.server_port, app.settings.config.server_url, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});
