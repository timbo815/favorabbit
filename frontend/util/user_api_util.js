var SessionActions = require('./../actions/session_actions');
var ErrorActions = require('./../actions/error_actions');
var ServerActions = require('./../actions/server_actions');

var UserApiUtil = {
  signUp: function (formData) {
    $.ajax({
      url: "api/user",
      type: "POST",
      data: {user: formData},
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("signup", errors);
      }
    });
  },

  editUser: function (formData, callback) {
    $.ajax({
      url: "api/user",
      type: "PATCH",
      contentType: false,
      processData: false,
      data: formData,
      success: function () {
        callback();
      },
      error: function () {
      }
    });
  },

  fetchDoers: function () {
    $.ajax({
      url: "api/users",
      success: function (doers) {
        ServerActions.receiveAllDoers(doers);
      }
    });
  }


};

module.exports = UserApiUtil;
