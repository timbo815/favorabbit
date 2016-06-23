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

var removeOffer = function (offer) {
  delete _offers[offer.id];
};

OfferStore.bookings = function () {
  var bookings = [];
  Object.keys(_offers).forEach(function (id) {
    if (_offers[id].accepted === true) {
      bookings.push(_offers[id]);
    }
  });
  return bookings;
};

OfferStore.offersReceived = function () {
  var offersReceived = [];
  Object.keys(_offers).forEach(function (id) {
    if (_offers[id].accepted === false) {
      offersReceived.push(_offers[id]);
    }
  });
  return offersReceived;
};

OfferStore.sentOffers = function () {
  var currentUser = UserStore.currentUser();
  var sentUserOffers = [];
  for (var key in _offers) {
    if (_offers[key].accepted === false && _offers[key].doer_id === currentUser.id) {
      sentUserOffers.push(_offers[key]);
    }
  }
  return sentUserOffers;
};

OfferStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case OfferConstants.RECEIVE_SINGLE_OFFER:
    addOffer(payload.offer);
    break;

    case OfferConstants.RECEIVE_ALL_OFFERS:
    addOffers(payload.offers);
    break;

    case OfferConstants.REMOVE_OFFER:
    removeOffer(payload.offer);
    break;
  }
  this.__emitChange();
};
module.exports = OfferStore;
