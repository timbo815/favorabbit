var ServerActions = require('../actions/server_actions');


var CategoryApiUtil = {
  fetchAllCategories: function () {
    $.ajax({
      url: "api/categories",
      success: function (categories) {
        ServerActions.receiveAllCategories(categories);
      }
    });
  }


};

module.exports = CategoryApiUtil;
