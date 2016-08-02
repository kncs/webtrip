'use strict';

/*
 * export routes
*/

module.exports = function(app) {

  /*
   * serve app
  */
  app.get('/*', function (req, res) {
    res.render('index', {
      title: 'Webtrip'
    });
  });
}
