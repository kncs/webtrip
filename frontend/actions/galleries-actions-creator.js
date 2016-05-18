import constants from '../constants/constants';
import dispatcher from '../dispatcher/dispatcher';

import webtrip from '../services/webtrip-service';


let actionTypes = constants.actionTypes;


class GalleriesActionsCreator {

  getGallery(path) {
    let self = this;
    return webtrip.get('/galleries/' + path)
    .then(function(gallery) {
      dispatcher.dispatch({
        type : actionTypes.GET_GALLERY_COMPLETED,
        gallery : gallery
      });
    })
    .catch(function() {
      dispatcher.dispatch({
        type : actionTypes.GET_GALLERY_FAILED
      });
    });
  }
}

const instance = new GalleriesActionsCreator(dispatcher);
export default instance;
