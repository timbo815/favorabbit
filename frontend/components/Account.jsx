var React = require('react'),
    UserEditForm = require('./UserEditForm');

var Account = React.createClass({
  render: function () {
    return(
      <div>
        <UserEditForm/>
      </div>
    );
  }
});

module.exports = Account;
