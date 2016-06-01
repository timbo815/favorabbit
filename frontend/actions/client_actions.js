var FavorApiUtil = require('../util/favor_api_util.js');


var ClientActions = {
  fetchFavors: function () {
    FavorApiUtil.fetchFavors();
  }
};

module.exports = ClientActions;
