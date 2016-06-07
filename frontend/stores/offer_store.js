var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    OfferConstants = require('../constants/offer_constants'),
    SessionStore = require('./session_store');
    OfferStore = new Store(AppDispatcher);


var _offers = {};

// var addOffer = function (offer) {
//   _offers[offer.id] = offer;
// };

var addOffers = function (offers) {
  _offers = {};
  offers.forEach(function (offer) {
    _offers[offer.id] = offer;
  });
};

OfferStore.userOffers = function () {
  return Object.keys(_offers).map(function (id) {
    return _offers[id];
  });
};

OfferStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    // case OfferConstants.RECEIVE_SINGLE_OFFER:
    // addOffer(payload.offer);
    // break;

    case OfferConstants.RECEIVE_ALL_OFFERS:
    addOffers(payload.offers);
    break;
  }
  this.__emitChange();
};
module.exports = OfferStore;
