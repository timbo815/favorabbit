var SessionActions = require('../actions/session_actions');
var ErrorActions = require('./../actions/error_actions');

var SessionApiUtil = {
  login: function (credentials) {
    $.ajax({
      url: '/api/session/',
      type: 'POST',
      data: {user: credentials},
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
  			  console.log("Login error in SessionApiUtil#login");
          var errors = xhr.responseJSON;
  	      ErrorActions.setErrors("login", errors);
  			}
    });
  }
};

module.exports = SessionApiUtil;
