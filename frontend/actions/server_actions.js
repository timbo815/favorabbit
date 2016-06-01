var AppDispatcher = require('../dispatcher/dispatcher');
var FavorConstants = require('../constants/favor_constants');


var ServerActions = {
  receiveSingleFavor: function (favor) {
    AppDispatcher.dispatch({
      actionType: FavorConstants.RECEIVE_SINGLE_FAVOR,
      favor: favor
    });
  },

  receiveAllFavors: function (favors) {
    AppDispatcher.dispatch({
      actionType: FavorConstants.RECEIVE_ALL_FAVORS,
      favors: favors
    });
  },

  removeFavor: function (favor) {
    AppDispatcher.dispatch({
      actionType: FavorConstants.REMOVE_FAVOR,
      favor: favor
    });
  }
};

module.exports = ServerActions;
