var React = require('react'),
    RequestsIndex = require('./RequestsIndex');


var Dashboard = React.createClass({
  getInitialState: function () {
    return ({ display: "requests" });
  },

  render: function () {

    return (
      <div className="dashboard">
        <ul className="tabs group">
          <li>
            Open Requests
          </li>
          <li>
            Pending Offers
          </li>
          <li>
            Bookings
          </li>
        </ul>
        <RequestsIndex/>
      </div>
    );
  }
});

module.exports = Dashboard;
