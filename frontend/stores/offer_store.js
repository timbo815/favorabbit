var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store,
    OfferConstants = require('../constants/offer_constants'),
    SessionStore = require('./session_store'),
    UserStore = require('./user_store'),
    RequestStore = require('./request_store');

var OfferStore = new Store(AppDispatcher);

var _offers = {};

var addOffer = function (offer) {
  _offers[offer.id] = offer;
};

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

OfferStore.bookings = function () {
  var bookings = [];
  for (var key in _offers) {
    if (_offers[key].accepted === true) {
      bookings.push(_offers[key]);
    }
  }
  return bookings;
};

OfferStore.pendingOffers = function () {
  var userRequests = RequestStore.userRequests();
  var userOffers = {};
  for (var i = 0; i < userRequests.length; i++) {
    userOffers[i] = (userRequests[i].offers);
  }
  pendingOffers = [];
  for (var key in userOffers) {
    pendingOffers.push(userOffers[key]);
    }
  return pendingOffers;
};

OfferStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case OfferConstants.RECEIVE_SINGLE_OFFER:
    addOffer(payload.offer);
    break;

    case OfferConstants.RECEIVE_ALL_OFFERS:
    addOffers(payload.offers);
    break;
  }
  this.__emitChange();
};
module.exports = OfferStore;
