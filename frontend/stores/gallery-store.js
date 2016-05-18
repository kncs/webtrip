import constants from '../constants/constants'
import {Store} from 'flux/utils'
import dispatcher from '../dispatcher/dispatcher'
import Immutable from 'immutable'

import images from '../images'

let actionTypes = constants.actionTypes;

let _gallery = Immutable.List();

class GalleryStore extends Store {

  getGallery() {
    return _gallery;
  }

  __onDispatch(payload) {
    let action = payload;
    switch(action.type) {
      case actionTypes.GET_GALLERY:
        _gallery = _gallery.clear();
        this.__emitChange();
        break;

      case actionTypes.GET_GALLERY_COMPLETED:
        _gallery = Immutable.List(action.gallery);
        this.__emitChange();
        break;

      case actionTypes.GET_GALLERY_FAILED:
        _gallery = _gallery.clear();
        this.__emitChange();
        break;

      default:
        // do nothing
    }
  }
}

const instance = new GalleryStore(dispatcher);
export default instance;
