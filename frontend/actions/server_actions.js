var AppDispatcher = require('../dispatcher/dispatcher');
var RequestConstants = require('../constants/request_constants');


var ServerActions = {
  receiveSingleRequest: function (request) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.RECEIVE_SINGLE_Request,
      request: request
    });
  },

  receiveAllRequests: function (requests) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.RECEIVE_ALL_REQUESTS,
      requests: requests
    });
  },

  removeFavor: function (request) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.REMOVE_REQUEST,
      request: request
    });
  }
};

module.exports = ServerActions;
