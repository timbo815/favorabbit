var React = require('react'),
    HowItWorks = require('./HowItWorks');

var Dashboard = React.createClass({
  render: function () {
    var dashboardContent = <HowItWorks/>;
    return (
      <div>
        {dashboardContent}
      </div>
    );
  }
});

module.exports = Dashboard;
