var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    FavorConstants = require('../constants/favor_constants'),
    FavorStore = new Store(AppDispatcher);


var _favors = {};

var _addFavor = function (favor) {
  _favors[favor.id] = favor;
};

var _resetFavors = function (favors) {
  _favors = {};
  favors.forEach(function (favor) {
    _favors[favor.id] = favor;
  });
};

FavorStore.all = function () {
  return Object.keys(_favors).map(function (id) {
    return _favors[id];
  });
};

FavorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FavorConstants.RECEIVE_SINGLE_FAVOR:
    _addFavor(payload.favor);
    break;

    case FavorConstants.RECEIVE_ALL_FAVORS:
    _resetFavors(payload.favors);
    break;

    case FavorConstants.REMOVE_FAVOR:
    _removeFavor(payload.favor);
    break;
  }
  this.__emitChange();
};

module.exports = FavorStore;
