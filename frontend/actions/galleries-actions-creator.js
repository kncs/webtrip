import constants from '../constants/constants';
import dispatcher from '../dispatcher/dispatcher';

import webtrip from '../services/webtrip-service';


let actionTypes = constants.actionTypes;


class GalleriesActionsCreator {

  getGallery(galery) {
    dispatcher.dispatch({
      type : actionTypes.GET_GALLERY
    });
    return webtrip.get('/galleries/' + galery.name)
    .then(function(resources) {
      dispatcher.dispatch({
        type : actionTypes.GET_GALLERY_COMPLETED,
        resources : resources,
        visiteDate : galery.visiteDate,
        title: galery.title
      });
    })
    .catch(function() {
      dispatcher.dispatch({
        type : actionTypes.GET_GALLERY_FAILED
      });
    });
  }

  addResource(options) {
    dispatcher.dispatch({
      type : actionTypes.ADD_RESOURCE
    });
    return webtrip.post('/galleries/' + options.city, options)
    .then(function() {
      dispatcher.dispatch({
        type : actionTypes.ADD_RESOURCE_COMPLETED
      });
    })
    .catch(function() {
      dispatcher.dispatch({
        type : actionTypes.ADD_RESOURCE_FAILED
      });
    });
  }
}

const instance = new GalleriesActionsCreator(dispatcher);
export default instance;
