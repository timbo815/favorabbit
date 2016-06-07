var React = require('react'),
    RequestsIndex = require('./RequestsIndex'),
    OffersIndex = require('./OffersIndex'),
    ClientActions = require('../actions/client_actions.js'),
    RequestStore = require('../stores/request_store.js'),
    OfferStore = require('../stores/offer_store.js');


var Dashboard = React.createClass({
  getInitialState: function () {
    return ({ requests: [], offers: [], focused: "requests"});
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
    this.setState({ offers: OfferStore.userOffers()});
  },

  renderDashboard: function () {
    switch(this.state.focused) {
      case "requests":
      return(<RequestsIndex requests={this.state.requests}/>);

      case "offers":
      return(<OffersIndex offers={this.state.offers}/>);
    }
  },

  handleOffersClick: function (e) {
    this.setState({ focused: "offers" });
  },

  handleRequestsClick: function (e) {
    this.setState({ focused: "requests" });
  },

  render: function () {

    return (
      <div>
        <ul className="tabs group">
          <li onClick={this.handleRequestsClick}>
            Open Requests
          </li>
          <li onClick={this.handleOffersClick}>
            Pending Offers
          </li>
          <li>
            Bookings
          </li>
        </ul>
      <div className="dashboard">
        {this.renderDashboard()}
      </div>
    </div>
    );
  }
});


module.exports = Dashboard;
