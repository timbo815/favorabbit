var React = require('react');

var HowItWorks = React.createClass({
  render: function () {
    return (
      <div className="how-it-works">
        <h2>How it Works</h2>
          <ul>
            <li>
              <img src={raised_hand_url} className="raised-hand"/><br/><br/>
              Ask a Favor
              <p>Choose from a list of popular chores and errands</p>
            </li>
            <li className="arrow">⟶</li>
            <li>
              <img src={handshake_url} className="handshake"/><br/><br/>
              Get Matched
              <p>Accept offers from other users</p>
            </li>
            <li className="arrow">⟶</li>
            <li>
              <img src={helping_hand_url} className="helping-hand"/><br/><br/>
              Pay it Forward
              <p>Browse open favor requests and help another user out</p>
            </li>
          </ul>
      </div>
    );
  }
});

module.exports = HowItWorks;
