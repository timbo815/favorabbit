var React = require('react'),
    RequestsIndex = require('./RequestsIndex');


var Dashboard = React.createClass({
  getInitialState: function () {
    return ({ display: "requests" });
  },

  render: function () {

    return (
      <div className="dashboard">
        <RequestsIndex/>
      </div>
    );
  }
});

module.exports = Dashboard;
