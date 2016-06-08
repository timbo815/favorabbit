var React = require('react'),
    RequestsIndex = require('./RequestsIndex'),
    OffersIndex = require('./OffersIndex'),
    ClientActions = require('../actions/client_actions.js'),
    RequestStore = require('../stores/request_store.js'),
    OfferStore = require('../stores/offer_store.js'),
    BookingStore = require('../stores/booking_store.js');


var Dashboard = React.createClass({
  getInitialState: function () {
    return ({ requests: [], pendingOffers: [], bookings: [], acceptedOffers: [], focused: "requests"});
  },

  componentDidMount: function () {
    this.requestListener = RequestStore.addListener(this.handleRequestChange);
    this.offerListener = OfferStore.addListener(this.handleOfferChange);
    // this.bookingListener = BookingStore.addListener(this.handleBookingChange);
    ClientActions.fetchRequests();
    ClientActions.fetchOffers();
    ClientActions.fetchDoers();
    // ClientActions.fetchBookings();
  },

  componentWillUnmount: function () {
    this.requestListener.remove();
    this.offerListener.remove();
  },

  handleRequestChange: function () {
    this.setState({ requests: RequestStore.userRequests()});
  },

  handleOfferChange: function () {
    var acceptedOffers = OfferStore.acceptedOffers();
    var pendingOffers = OfferStore.pendingOffers();
    this.setState({ pendingOffers: OfferStore.pendingOffers()});
    this.setState({ acceptedOffers: acceptedOffers});
  },
  //
  // handleBookingChange: function () {
  //   this.setState({ bookings: BookingStore.userBookings()});
  // },

  renderDashboard: function () {
    switch(this.state.focused) {
      case "requests":
      return(<RequestsIndex requests={this.state.requests}/>);

      case "offers":
      return(<OffersIndex offers={this.state.pendingOffers}/>);

      case "bookings":
      return(<OffersIndex offers={this.state.acceptedOffers}/>);
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
