var SessionApiUtil = require('../util/session_api_util'),
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    SessionConstants = require('../constants/session_constants.js');


var SessionActions = {

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
      currentUser: currentUser
    });
  }
};

module.exports = SessionActions;
