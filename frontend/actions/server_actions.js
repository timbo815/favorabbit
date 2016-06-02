var AppDispatcher = require('../dispatcher/dispatcher');
var RequestConstants = require('../constants/request_constants');
var CategoryConstants = require('../constants/category_constants');


var ServerActions = {
  receiveSingleRequest: function (request) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.RECEIVE_SINGLE_REQUEST,
      request: request
    });
  },

  receiveAllRequests: function (requests) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.RECEIVE_ALL_REQUESTS,
      requests: requests
    });
  },

  removeRequest: function (request) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.REMOVE_REQUEST,
      request: request
    });
  },

  receiveAllCategories: function (categories) {
    AppDispatcher.dispatch({
      actionType: CategoryConstants.RECEIVE_ALL_CATEGORIES,
      categories: categories
    });
  }
};

module.exports = ServerActions;
