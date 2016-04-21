'use strict';

/**
 * Module dependencies
 */

const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks  = require('express-nunjucks');
const config = require('../config');

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

app.set('view engine', 'html');
app.set('views', __dirname);
nunjucks.setup({}, app);

/*
 * Mount routes
 */

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Webtrip'
  });
});

/**
 * Create the server
 */

var server = http.createServer(app);

/**
 * Start the server
 */
server.listen(config.server_port, config.server_url, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});
