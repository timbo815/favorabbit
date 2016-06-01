var AppDispatcher = require('../dispatcher/dispatcher');
var FavorConstants = require('../constants/favor_constants');


var ServerActions = {
  receiveSingleFavor: function (favor) {
    AppDispatcher.dispatch({
      actionType: FavorConstants.RECEIVE_SINGLE_FAVOR,
      favor: favor
    });
  }
};

module.exports = ServerActions;
