var ServerActions = require('../actions/server_actions');


var FavorApiUtil = {
  fetchFavors: function () {
    $.ajax({
      url: "api/favors",
      success: function (favors) {
        ServerActions.receiveAllFavors(favors);
      }
    });
  },

  createFavor: function (favorData) {
    $.ajax({
      type: "POST",
      url: "api/favors",
      data: {favor: favorData},
      success: function (favor) {
        ServerActions.receiveSingleFavor(favor);
      }
    });
  },

  updateFavor: function (favorData) {
    $.ajax({
      type: "PATCH",
      url: "api/favors" + favorData.id,
      data: {favor: favorData},
      success: function (favor) {
        ServerActions.receiveSingleFavor(favor);
      }
    });
  },

  deleteFavor: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/favors" + id,
      sucess: function (favor) {
        ServerActions.removeFavor(favor);
      }
    });
  }
};

module.exports = FavorApiUtil;
