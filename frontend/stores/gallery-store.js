import constants from '../constants/constants'
import {Store} from 'flux/utils'
import dispatcher from '../dispatcher/dispatcher'
import Immutable from 'immutable'

import images from '../images'

let actionTypes = constants.actionTypes;

let _resources = Immutable.List();
let _title = '';
let _visiteDate = '';

class GalleryStore extends Store {

  getGallery() {
    return {
      resources : _resources,
      title : _title,
      visiteDate : _visiteDate
    }
  }

  __onDispatch(payload) {
    let action = payload;
    switch(action.type) {
      case actionTypes.GET_GALLERY:
        _resources = _resources.clear();
        this.__emitChange();
        break;

      case actionTypes.GET_GALLERY_COMPLETED:
        _resources = Immutable.List(action.resources);
        _title = action.title;
        _visiteDate = action.visiteDate;
        this.__emitChange();
        break;

      case actionTypes.GET_GALLERY_FAILED:
        _resources = _resources.clear();
        this.__emitChange();
        break;

      default:
        // do nothing
    }
  }
}

const instance = new GalleryStore(dispatcher);
export default instance;
