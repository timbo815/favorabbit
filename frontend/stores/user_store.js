var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);

var _currentUser, _errors;

var _doers ={};

var addDoers = function (doers) {
  _doers = {};
  doers.forEach(function (doer) {
    _doers[doer.id] = doer;
  });
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGIN":
    	UserStore.login(payload.currentUser);
      break;
    case "LOGOUT":
    	UserStore.logout();
      break;
    case "ERROR":
      UserStore.setErrors(payload.errors);
      break;
    case "RECEIVE_ALL_DOERS":
      addDoers(payload.doers);
      break;
  }
  UserStore.__emitChange();
};

UserStore.login = function (user){
	_currentUser = user;
  _errors = null;
};

UserStore.logout = function (){
  _currentUser = null;
  _errors = null;
};

UserStore.currentUser = function (){
  if (_currentUser) {
  	return $.extend({}, _currentUser);
  }
};

UserStore.userOffers = function () {
  return _currentUser.offers;
};

UserStore.doerImage = function (id) {
  var user = _doers[id];
  return user.image_url;
};

UserStore.setErrors = function (errors){
  _errors = errors;
};

UserStore.errors = function (){
  if (_errors){
    return [].slice.call(_errors);
  }
};

module.exports = UserStore;
