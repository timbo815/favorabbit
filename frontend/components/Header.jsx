var React = require('react');

var Header = React.createClass({
  render: function () {
    return(
      <header className="header">
        <img src={logo_url} className="logo"/>
      </header>
    );
  }
});

module.exports = Header;
