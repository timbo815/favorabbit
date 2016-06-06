var React = require('react'),
    SessionApiUtil = require('../util/session_api_util.js'),
    Link = require('react-router').Link;

var Header = React.createClass({
  //
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },

  render: function () {
    return(
      <header className="header">
        <img src={logo_url} className="logo"/>
        <Link to="/" onClick={this.logout} className="logout-link">Log Out</Link>
        <Link to="/account" className="logout-link">Account</Link>
      </header>
    );
  },

  logout: function() {
    SessionApiUtil.logout();
  }
});

module.exports = Header;
