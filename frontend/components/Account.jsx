var React = require('react'),
    UserEditForm = require('./UserEditForm'),
    Header = require('./Header');

var Account = React.createClass({
  render: function () {
    return(
      <div className="account">
      <Header/>
      <h1>Your Account</h1>
      <UserEditForm/>
      </div>
    );
  }
});

module.exports = Account;
