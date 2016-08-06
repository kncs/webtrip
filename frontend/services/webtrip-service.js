import request from 'superagent'
import url from 'url'

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

  getMedia() {
    var self = this;
    return new Promise(function(resolve, reject) {
      request
        .get(self._getURL('/instagram/media'))
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
