'use strict';

/**
 * Module dependencies
 */

import constants from '../constants/constants';
import {Store} from 'flux/utils';
import dispatcher from '../dispatcher/dispatcher';

let actionTypes = constants.actionTypes;


let _page= 'home';

class AppStore extends Store {

  getPage() {
    return _page;
  };

  __onDispatch(payload) {
    var action = payload;

    switch(action.type) {
      case actionTypes.CHANGE_APP_PAGE:
        _page = action.page;
        this.__emitChange();
        break;

      default:
        // do nothing
    }
  }
}

const instance = new AppStore(dispatcher);
export default instance;
