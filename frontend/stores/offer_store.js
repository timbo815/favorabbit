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

OfferStore.userOffers = function () {
  return Object.keys(_offers).map(function (id) {
    return _offers[id];
  });
};

OfferStore.bookings = function () {
  var userRequests = RequestStore.userRequests();
  var userOffers = [];
  for (var i = 0; i < userRequests.length; i++) {
    if (userRequests[i].offers && userRequests[i].offers.length > 0) {
      userOffers.push(userRequests[i].offers);
    }
  }
  bookings = [];
  for (var i = 0; i < userOffers.length; i++) {
    for (var key in userOffers[i]) {
      if (userOffers[i][key].accepted === true) {
        bookings.push(userOffers[i][key]);
      }
    }
  }

  return bookings;
};

OfferStore.pendingOffers = function () {
  var userRequests = RequestStore.userRequests();
  var userOffers = [];
  for (var i = 0; i < userRequests.length; i++) {
    if (userRequests[i].offers && userRequests[i].offers.length > 0) {
      userOffers.push(userRequests[i].offers);
    }
  }
  pendingOffers = [];
  for (var i = 0; i < userOffers.length; i++) {
    for (var key in userOffers[i]) {
      if (userOffers[i][key].accepted === false) {
        pendingOffers.push(userOffers[i][key]);
      }
    }
  }
  return pendingOffers;
};

OfferStore.sentOffers = function () {
  var currentUser = UserStore.currentUser();
  var sentUserOffers = [];
    for (var i = 0; i < currentUser.offers.length; i++) {
      if (currentUser.offers[i].accepted === false) {
        sentUserOffers.push(currentUser.offers[i]);
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
