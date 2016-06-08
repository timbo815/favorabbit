var React = require('react'),
    UserStore = require('../stores/user_store.js'),
    BookingApiUtil = require('../util/booking_api_util.js'),
    OfferApiUtil = require('../util/offer_api_util.js'),
    RequestStore = require('../stores/request_store.js');

var OfferDetail = React.createClass({
  renderAcceptButton: function () {
    if(this.props.offer.accepted === false) {
      return(<button onClick={this.makeBooking} id={this.props.offer.id} className="accept-offer-button">Accept Offer</button>);
    }
  },

  render: function () {
    var request = RequestStore.find(this.props.offer.request_id);
    var userImage = UserStore.doerImage(this.props.offer.doer_id);
    return (
      <section className="detail">
        <img src={userImage} className='user-photo'/>
        <ul>
          <li>Subject: {request.title}</li>
          <li>Offer: {this.props.offer.message}</li>
        </ul>
        {this.renderAcceptButton()}
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
