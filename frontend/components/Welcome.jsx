var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    RequestButton = require('./RequestButton');

var Welcome = React.createClass({
  render: function () {
    var currentUser = SessionStore.currentUser().username;
    return(
      <div className="welcome">
        Welcome to FavoRabbit, {currentUser}!
        <RequestButton/>
      </div>
    );
  }
});

module.exports = Welcome;
