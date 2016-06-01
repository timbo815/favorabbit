var ServerActions = require('../actions/server_actions');


var FavorApiUtil = {
  createFavor: function (favorData) {
    $.ajax({
      type: "POST",
      url: "api/favors",
      data: {favor: favorData},
      success: function (favor) {
        ServerActions.receiveSingleFavor(favor);
      }
    });
  }
};

module.exports = FavorApiUtil;
