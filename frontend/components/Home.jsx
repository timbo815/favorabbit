var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    RequestsIndex = require('../components/RequestsIndex.jsx'),
    Dashboard = require('../components/Dashboard');

var Home = React.createClass({
  render: function () {
    return(
      <div className="home">
        <h2>Welcome {SessionStore.currentUser().username}!</h2>
        <Dashboard/>
      </div>
    );
  }
});

module.exports = Home;
