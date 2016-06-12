var React = require('react');

var HowItWorks = React.createClass({
  render: function () {
    return (
      <div className="how-it-works">
        <h2>How to Get Started</h2>
        <h3>We're excited to help! Here's how it works:</h3>
          <ul>
            <li>
            <h4><span className="numbers">1</span>  Ask a favor</h4>
            <p>Choose from a list of popular chores and errands</p>
            </li>
            <li>
              <h4><span className="numbers">2</span>  Get Matched</h4>
              <p>Accept offers from other users</p>
            </li>
            <li>
              <h4><span className="numbers">3</span>  Pay it Forward</h4>
              <p>Browse open favor requests and help another user out</p>
            </li>
          </ul>
      </div>
    );
  }
});

module.exports = HowItWorks;
