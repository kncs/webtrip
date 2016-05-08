import constants from '../constants/constants';
import dispatcher from '../dispatcher/dispatcher';


let actionTypes = constants.actionTypes;


class AppActionCreators {

  changePage(page){
    dispatcher.dispatch({
      type : actionTypes.CHANGE_APP_PAGE,
      page: page
    });
  }
}

const instance = new AppActionCreators(dispatcher);
export default instance;
