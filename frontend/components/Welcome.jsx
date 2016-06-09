var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    RequestStore = require('../stores/request_store.js'),
    RequestButton = require('./RequestButton'),
    FavorButton = require('./FavorButton'),
    ClientActions = require('../actions/client_actions.js');
    // SearchBar = require('react-search-bar'),
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
//
// categories = {["Career", "Child Care", "Cleaning", "Computer Help",
//                   "Cooking", "Delivery", "Design", "Donations", "Education",
//                   "Errands", "Furniture Assembly", "General Help", "Handyman",
//                    "Hang Pictures", "Heavy Lifting", "Moving Help", "Painting", "Pet Care",
//                   "Shopping + Delivery", "Transportation", "TV Mounting", "Yard Work"]}
