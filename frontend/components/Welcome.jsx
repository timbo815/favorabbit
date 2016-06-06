var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    RequestStore = require('../stores/request_store.js'),
    RequestButton = require('./RequestButton'),
    FavorButton = require('./FavorButton'),
    ClientActions = require('../actions/client_actions.js');

var Welcome = React.createClass({

  getInitialState: function () {
    return ({ requests: []});
  },

  componentDidMount: function () {
    this.requestListener = RequestStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.requestListener.remove();
  },

  handleChange: function () {
    this.setState({requests: RequestStore.allOtherRequests()});
  },

  render: function () {
    var currentUser = SessionStore.currentUser();
    return(
      <div className="welcome">
        <img src={currentUser.image_url} className="user-photo"></img>
        <h4>Welcome to FavoRabbit, {currentUser.username}!</h4>
        <RequestButton/>
        <FavorButton requests={this.state.requests}/>
      </div>
    );
  }
});

module.exports = Welcome;
