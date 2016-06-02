var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    RequestConstants = require('../constants/request_constants'),
    RequestStore = new Store(AppDispatcher);


var _requests = {};

var _addRequest = function (request) {
  _requests[request.id] = request;
};

var _resetRequests = function (requests) {
  _requests = {};
  requests.forEach(function (request) {
    _requests[request.id] = request;
  });
};

RequestStore.all = function () {
  return Object.keys(_requests).map(function (id) {
    return _requests[id];
  });
};

RequestStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RequestConstants.RECEIVE_SINGLE_REQUEST:
    _addRequest(payload.request);
    break;

    case RequestConstants.RECEIVE_ALL_REQUESTS:
    _resetRequests(payload.requests);
    break;

    case RequestConstants.REMOVE_REQUEST:
    _removeRequest(payload.request);
    break;
  }
  this.__emitChange();
};

module.exports = RequestStore;
