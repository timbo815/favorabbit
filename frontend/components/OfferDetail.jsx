var React = require('react'),
    UserStore = require('../stores/user_store.js'),
    OfferApiUtil = require('../util/offer_api_util.js'),
    RequestStore = require('../stores/request_store.js');

var OfferDetail = React.createClass({
  renderButton: function () {
    if(this.props.offer.accepted === false && this.props.offer.doer_id !== UserStore.currentUser().id) {
      return(
      <div>
        <button onClick={this.makeBooking} id={this.props.offer.id} className="accept-offer-button">Accept Offer</button>
        <button onClick={this.deleteOffer} id={this.props.offer.id} className="decline-offer-button">Decline Offer</button>
      </div>);
    }
    // else if (this.props.offer.accepted === true && this.props.offer.doer_id !== UserStore.currentUser().id) {
    //   return(<button onClick={this.deleteOffer(this.props.offer.id)} id={this.props.offer.id}>Mark as Done</button>);
    // }
  },

  deleteOffer: function (e) {
    e.preventDefault();
    OfferApiUtil.deleteOffer(e.target.id);
  },

  render: function () {
    var potentialRequest = RequestStore.find(this.props.offer.request_id);
    var request = potentialRequest ? potentialRequest : {};
    var userImage = UserStore.doerImage(this.props.offer.doer_id);
    return (
      <section className="detail group">
        <img src={userImage} className='user-photo'/>
        <ul>
          <li><span>Subject:</span> {request.title}</li>
          <li><span>Request Description:</span> {request.description}</li>
          <li><span>Location:</span> {request.location}</li>
          <li><span>Offer:</span> {this.props.offer.message}</li>
          <li><span>Date:</span> {request.date}</li>
          <li><span>Time:</span> {request.time}</li>
        </ul>
        {this.renderButton()}
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
