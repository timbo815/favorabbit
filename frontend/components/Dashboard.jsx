var React = require('react'),
    RequestsIndex = require('./RequestsIndex'),
    OffersIndex = require('./OffersIndex'),
    ClientActions = require('../actions/client_actions.js'),
    RequestStore = require('../stores/request_store.js'),
    OfferStore = require('../stores/offer_store.js'),
    BookingStore = require('../stores/booking_store.js'),
    UserStore = require('../stores/user_store.js');


var Dashboard = React.createClass({
  getInitialState: function () {
    return ({ userRequests: [], pendingOffers: [], sentOffers: [], bookings: [],
      focused: "requests"});
  },

  componentDidMount: function () {
    this.requestListener = RequestStore.addListener(this.handleRequestChange);
    this.offerListener = OfferStore.addListener(this.handleOfferChange);
    this.userOffersListener = UserStore.addListener(this.handleUserOfferChange);
    ClientActions.fetchRequests();
    ClientActions.fetchOffers();
    ClientActions.fetchDoers();
  },

  componentWillUnmount: function () {
    this.requestListener.remove();
    this.offerListener.remove();
    this.userOffersListener.remove();
  },

  handleRequestChange: function () {
    this.setState({ userRequests: RequestStore.userRequests()});
  },

  handleOfferChange: function () {
    var bookings = OfferStore.bookings();
    var pendingOffers = OfferStore.pendingOffers();
    pendingOffersArray = [];
    for (var key in pendingOffers) {
      pendingOffersArray.push(pendingOffers[key][0]);
    }
    this.setState({ pendingOffers: pendingOffersArray});
    this.setState({ bookings: bookings});
  },

  handleUserOfferChange: function () {
    this.setState({ sentOffers: UserStore.userOffers() });
  },

  renderDashboard: function () {
    var requests = this.state.userRequests;
    var pendingOffers = this.state.pendingOffers;
    var bookings = this.state.bookings;
    var sentOffers = this.state.sentOffers;
    switch(this.state.focused) {
      case "requests":
      return requests.length < 1 ? <div className="empty">You currently have no open requests</div> : <RequestsIndex requests={requests}/>;

      case "offers":
      return pendingOffers.length < 1 ? <div className="empty">You currently have no pending offers</div> : <OffersIndex offers={pendingOffers}/>;

      case "bookings":
      return bookings.length < 1 ? <div className="empty">You currently have no bookings</div> : <OffersIndex offers={bookings}/>;

      case "sent offers":
      return sentOffers.length < 1 ? <div className="empty">You currently have no sent offers</div> : <OffersIndex offers={sentOffers}/>;
    }
  },

  handleOffersClick: function (e) {
    this.setState({ focused: "offers" });
  },

  handleRequestsClick: function (e) {
    this.setState({ focused: "requests" });
  },

  handleBookingsClick: function (e) {
    this.setState({ focused: "bookings" });
  },

  handleSentOffersClick: function (e) {
    this.setState({ focused: "sent offers" });
  },

  render: function () {

    return (
      <div>
        <ul className="tabs group">
          <li onClick={this.handleRequestsClick}>
            Your Open Requests
          </li>
          <li onClick={this.handleOffersClick}>
            Offers Received
          </li>
          <li onClick={this.handleSentOffersClick}>
            Offers Sent
          </li>
          <li onClick={this.handleBookingsClick}>
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
