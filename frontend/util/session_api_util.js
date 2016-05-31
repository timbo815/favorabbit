var SessionActions = require('../actions/session_actions');

var SessionApiUtil = {
  login: function (credentials) {
    $.ajax({
      url: '/api/session/',
      type: 'POST',
      data: {user: credentials},
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      }
    });
  }
};

module.exports = SessionApiUtil;
