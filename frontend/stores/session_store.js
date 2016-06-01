var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    SessionConstants = require('../constants/session_constants'),
    SessionStore = new Store(AppDispatcher);


var _currentUser = {},
    _currentUserHasBeenFetched = false;

var _login = function (currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
};

var _logout = function (currentUser) {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
};

var currentUserHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = function () {
  return !!_currentUser.id;
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
    _login(payload.currentUser);
    SessionStore.__emitChange();
    break;

    case SessionConstants.LOGOUT:
    _logout(payload,currentUser);
    SessionStore.__emitChange();
    break;
  }
};


module.exports = SessionStore;
