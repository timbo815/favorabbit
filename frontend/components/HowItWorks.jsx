var React = require('react');

var HowItWorks = React.createClass({
  render: function () {
    return (
      <div className="how-it-works">
        <h2>How it Works</h2>
          <ul>
            <li>
              <img src={raised_hand_url} className="raised-hand"/>
              <h4>Ask a Favor</h4>
              Choose from a list of popular chores and errands
            </li>
            <li className="arrow">⟶</li>
            <li>
              <img src={handshake_url} className="handshake"/>
              <h4>Get Matched</h4>
              Accept offers from other users
            </li>
            <li className="arrow">⟶</li>
            <li>
              <img src={helping_hand_url} className="helping-hand"/>
              <h4>Pay it Forward</h4>
              Browse open favor requests and help another user out
            </li>
          </ul>
      </div>
    );
  }
});

module.exports = HowItWorks;
