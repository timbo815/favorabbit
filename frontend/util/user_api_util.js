var SessionActions = require('./../actions/session_actions');

var UserApiUtil = {
  signUp: function (formData) {
    $.ajax({
      url: "api/user",
      type: "POST",
      data: {user: formData},
      success: function (user) {
        SessionActions.receiveCurrentUser(currentUser);
      }
    });
  }
};

module.exports = UserApiUtil;
