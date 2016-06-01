var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    FavorConstants = require('../constants/session_constants'),
    FavorStore = new Store(AppDispatcher);


var _favors = {};

var _addFavor = function (favor) {
  _favors[favor.id] = favor;
};

FavorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FavorConstants.RECEIVE_SINGLE_FAVOR:
    _addFavor(payload.favor);
  }
  this.__emitChange();
};

module.exports = FavorStore;
