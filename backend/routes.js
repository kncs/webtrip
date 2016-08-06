'use strict';

const request = require('superagent');

/*
 * export routes
*/

module.exports = function(app) {
  app.get('/instagram/media', function (req, res) {
    request
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + app.get('config').instagramAccessToken)
      .end(function (err, response) {
        if (err) throw err;
        if (response.error) throw response.error;
        res.json(response.body)
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
