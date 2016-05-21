import request from 'superagent'
import url from 'url'

import config from '../../config'

class WebtripService {
  _getURL(path) {
    let options = url.parse(window.location.href);
    return url.format({
      protocol : options.protocol,
      host : options.host,
      port : options.port || 80,
      pathname : path.replace('\/\/', '\/')
    });
  };

  get(path) {
    var self = this;
    return new Promise(function(resolve, reject) {
      request
        .get(self._getURL(path))
        .end(function (err, res) {
          if (err) return reject(err);
          if (res.error) return reject(res);
          resolve(res.body);
        });
    })
  }

  post(path, query) {
    var self = this;
    return new Promise(function(resolve, reject) {
      request
        .post(self._getURL(path))
        .send(query)
        .end(function (err, res) {
          if (err) return reject(err);
          if (res.error) return reject(res);
          resolve(res.body);
        });
    })
  }
}

const webtrip = new WebtripService();
export default webtrip;
