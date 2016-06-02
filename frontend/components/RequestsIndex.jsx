var React = require('react'),
    RequestStore = require('../stores/request_store.js'),
    ClientActions = require('../actions/client_actions.js'),
    RequestDetail = require('./RequestDetail');

var RequestsIndex = React.createClass({
  getInitialState: function () {
    return ({ requests: []});
  },

  componentDidMount: function () {
    RequestStore.addListener(this.handleChange);
    ClientActions.fetchRequests();
  },

  handleChange: function () {
    this.setState({ requests: RequestStore.all()});
  },

  render: function () {
    return (
      <section className="requests-index">
        <ul>
        {
          this.state.requests.map(function (request, i) {
            return <RequestDetail key={i} request={request}/>;
          })
        }
        </ul>
      </section>
    );
  }
});

module.exports = RequestsIndex;
