var SessionApiUtil = require('../util/session_api_util'),
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    SessionConstants = require('../constants/session_constants');


var SessionActions = {

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  }
};