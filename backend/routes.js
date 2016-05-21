'use strict';

const fs = require('fs');
const basicAuth = require('basic-auth');

/**
 * Manage authentication
 */

const auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  let user = basicAuth(req);
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


/*
 * export routes
*/

module.exports = function(app) {

  let config = app.settings.config;
  console.log(config)
  /*
   * get specific gallery
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

  /*
   * add resource for specific gallery
  */
  app.post('/galleries/:name/resource', function(req, res) {

    let filename = config.dir_data + 'galleries/' + req.params.name + '.json';
    let contents = fs.readFileSync(filename);
    let jsonContent = JSON.parse(contents);

    if(req.body.type === config.resourcesType.text) {
      jsonContent.push({
        type : 'text',
        description : req.body.comment
      })
      fs.writeFileSync(filename, JSON.stringify(jsonContent));
      res.status(200).end();
    }
    else if (req.body.type === config.resourcesType.image){
      jsonContent.push({
        type : 'image',
        src : req.body.file
      })
      fs.writeFileSync(filename, JSON.stringify(jsonContent));
      res.status(200).end();
    }
    else {
      res.status(403).end();
    }
  });

  /*
   * delete resource for specific gallery
  */
  app.delete('/galleries/:name/resource', function(req, res) {

    let filename = config.dir_data + 'galleries/' + req.params.name + '.json';
    let contents = fs.readFileSync(filename);
    let jsonContent = JSON.parse(contents);

    if(req.body.block < jsonContent.length) {
      jsonContent = jsonContent.reduce(function(cumul, resource, index) {
        if(index !== req.body.block) {
          cumul.push(resource);
        }
        return cumul;
      }, [])
      fs.writeFileSync(filename, JSON.stringify(jsonContent));
      res.status(200).end();
    }
    else {
      res.status(400).end();
    }
  });

  /*
   * serve admin page with authentication
  */
  app.get('/admin/*', auth, function (req, res) {
    res.render('index', {
      title: 'Webtrip | Admin'
    });
  });

  /*
   * serve app
  */
  app.get('/*', function (req, res) {
    res.render('index', {
      title: 'Webtrip'
    });
  });
}
