var React = require('react'),
    RequestsIndex = require('./RequestsIndex'),
    OffersIndex = require('./OffersIndex'),
    ClientActions = require('../actions/client_actions.js'),
    RequestStore = require('../stores/request_store.js'),
    OfferStore = require('../stores/offer_store.js');


var Dashboard = React.createClass({
  getInitialState: function () {
    return ({ requests: [], offers: []});
  },

  componentDidMount: function () {
    this.requestListener = RequestStore.addListener(this.handleRequestChange);
    this.offerListener = OfferStore.addListener(this.handleOfferChange);
    ClientActions.fetchRequests();
    ClientActions.fetchOffers();
  },

  componentWillUnmount: function () {
    this.requestListener.remove();
    this.offerListener.remove();
  },

  handleRequestChange: function () {
    this.setState({ requests: RequestStore.userRequests()});
  },

  handleOfferChange: function () {
    this.setState({ offers: OfferStore.userOffers});
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
        <RequestsIndex requests={this.state.requests}/>
      </div>
    );
  }
});

module.exports = Dashboard;
