var React = require('react'),
    RequestsIndex = require('./RequestsIndex'),
    OffersIndex = require('./OffersIndex'),
    ClientActions = require('../actions/client_actions.js'),
    RequestStore = require('../stores/request_store.js'),
    OfferStore = require('../stores/offer_store.js');

var Dashboard = React.createClass({
  getInitialState: function () {
    return ({ userRequests: [], offersReceived: [], sentOffers: [], bookings: [],
      focused: "requests"});
  },

  componentDidMount: function () {
    this.requestListener = RequestStore.addListener(this.handleRequestChange);
    this.offerListener = OfferStore.addListener(this.handleOfferChange);
    ClientActions.fetchRequests();
    ClientActions.fetchOffers();
    ClientActions.fetchDoers();
  },

  componentWillUnmount: function () {
    this.requestListener.remove();
    this.offerListener.remove();
  },

  handleRequestChange: function () {
    this.setState({ userRequests: RequestStore.myOpenRequests()});
  },

  handleOfferChange: function () {
    var bookings = OfferStore.bookings();
    var offersReceived = OfferStore.offersReceived();
    var sentOffers = OfferStore.sentOffers();

    this.setState({ offersReceived: offersReceived });
    this.setState({ bookings: bookings});
    this.setState({ sentOffers: sentOffers});
  },

  renderDashboard: function () {
    var requests = this.state.userRequests;
    var offersReceived = this.state.offersReceived;
    var bookings = this.state.bookings;
    var sentOffers = this.state.sentOffers;
    switch(this.state.focused) {
      case "requests":
      return requests.length < 1 ? <div className="empty">You currently have no open requests</div> : <RequestsIndex requests={requests}/>;

      case "offers":
      return offersReceived.length < 1 ? <div className="empty">You currently have no pending offers</div> : <OffersIndex offers={offersReceived}/>;

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
    switch (this.state.focused) {
      case "requests":
      $(".offers").removeClass("focused");
      $(".sent-offers").removeClass("focused");
      $(".bookings").removeClass("focused");
      $(".requests").addClass("focused");
      break;

      case "offers":
      $(".requests").removeClass("focused");
      $(".sent-offers").removeClass("focused");
      $(".bookings").removeClass("focused");
      $(".offers").addClass("focused");
      break;

      case "sent offers":
      $(".requests").removeClass("focused");
      $(".offers").removeClass("focused");
      $(".bookings").removeClass("focused");
      $(".sent-offers").addClass("focused");
      break;

      case "bookings":
      $(".requests").removeClass("focused");
      $(".offers").removeClass("focused");
      $(".sent-offers").removeClass("focused");
      $(".bookings").addClass("focused");
      break;
    }
    return (
      <div>
        <ul className="tabs group">
          <li onClick={this.handleRequestsClick} className="requests">
            Your Open Requests
          </li>
          <li onClick={this.handleOffersClick} className="offers">
            Offers Received
          </li>
          <li onClick={this.handleSentOffersClick} className="sent-offers">
            Offers Sent
          </li>
          <li onClick={this.handleBookingsClick} className="bookings">
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
