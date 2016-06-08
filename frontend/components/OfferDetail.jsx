var React = require('react'),
    UserStore = require('../stores/user_store.js'),
    BookingApiUtil = require('../util/booking_api_util.js'),
    OfferApiUtil = require('../util/offer_api_util.js');

var OfferDetail = React.createClass({

  render: function () {
    var request = RequestStore.find(this.props.offer.request_id);
    var userImage = UserStore.doerImage(this.props.offer.doer_id);
    return (
      <section className="detail">
        <img src={userImage}/>
        <ul>
          <li>Subject: {request.title}</li>
          <li>Offer: {this.props.offer.message}</li>
        </ul>
        <button onClick={this.makeBooking} id={this.props.offer.id}>Accept Offer</button>
      </section>
    );
  },

  makeBooking: function (e) {
    e.preventDefault();
    var offerData = {
      id: e.target.id,
      message: this.props.offer.message,
      request_id: this.props.offer.request_id,
      accepted: true
    };
    OfferApiUtil.updateOffer(offerData);
  }
});

module.exports = OfferDetail;



// <img src={} className="user-photo"></img>
