var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    FavorsIndex = require('../components/FavorsIndex.jsx');

var Home = React.createClass({
  render: function () {
    return(
      <div>
        <h2>Welcome {SessionStore.currentUser().username}!</h2>
        <FavorsIndex/>
      </div>
    );
  }
});

module.exports = Home;
