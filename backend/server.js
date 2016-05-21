'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');
const express = require('express');
const basicAuth = require('basic-auth');
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
 * Manage authentication
 */

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);
  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'foo' && user.pass === 'bar') {
    return next();
  }
  else {
    return unauthorized(res);
  };
};

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

app.get('/galleries/:name', function(req, res) {

  let options = {
    root: config.dir_data + 'galleries/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };


  let filename = req.params.name + '.json';
  res.sendFile(filename, options, function (err) {
    if (err) {
      res.status(err.status).end();
    }
  });
});

app.post('/galleries/:name', function(req, res) {

  let filename = config.dir_data + 'galleries/' + req.params.name + '.json';
  console.log(filename)
  let contents = fs.readFileSync(filename);
  let jsonContent = JSON.parse(contents);

  let options = req.body;
  if(options.type === 'Texte') {
    jsonContent.push({
      type : 'text',
      description : options.comment
    })
    fs.writeFileSync(filename, JSON.stringify(jsonContent));
    res.status(200).end();
  }
  else if (options.type === 'Image'){
    res.status(200).end();
  }
  else {
    res.status(403).end();
  }
});

app.get('/admin', auth, function (req, res) {
  res.render('index', {
    title: 'Webtrip | Admin'
  });
});

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
