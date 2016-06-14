var React = require('react'),
    SessionApiUtil = require('../util/session_api_util.js'),
    Link = require('react-router').Link;

var Header = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  redirectHome: function () {
    this.context.router.push("home");
  },

  render: function () {
    return(
      <header className="header">
        <img src={logo_url} className="logo" onClick={this.redirectHome}/>
        <h5 className="favo" onClick={this.redirectHome}>Favo</h5><h5 className="rabbit" onClick={this.redirectHome}>Rabbit</h5>
      <ul className="header-links">
        <Link to="/home" className="header-link">Home</Link>
        <Link to="/account" className="header-link">Account</Link>
        <Link to="/" onClick={this.logout} className="header-link">Log Out</Link>
      </ul>
      </header>
    );
  },

  logout: function() {
    SessionApiUtil.logout();
  }
});

module.exports = Header;
