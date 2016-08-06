import constants from '../constants/constants';
import dispatcher from '../dispatcher/dispatcher';

import webtrip from '../services/webtrip-service';


let actionTypes = constants.actionTypes;


class GalleriesActionsCreator {

  getGalleries() {
    dispatcher.dispatch({
      type : actionTypes.GET_GALLERIES
    });
    return webtrip.getMedia()
    .then(function(resources) {
      console.log(resources);
      dispatcher.dispatch({
        type : actionTypes.GET_GALLERIES_COMPLETED,
        resources : resources,
        visiteDate : galery.visiteDate,
        title: galery.title
      });
    })
    .catch(function() {
      dispatcher.dispatch({
        type : actionTypes.GET_GALLERIES_FAILED
      });
    });
  }

  getGallery(galery) {
  }
}

const instance = new GalleriesActionsCreator(dispatcher);
export default instance;
