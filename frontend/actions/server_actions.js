var AppDispatcher = require('../dispatcher/dispatcher');
var RequestConstants = require('../constants/request_constants');
var OfferConstants = require('../constants/offer_constants');
var UserConstants = require('../constants/user_constants');
var BookingConstants = require('../constants/booking_constants');


var ServerActions = {
  receiveSingleRequest: function (request) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.RECEIVE_SINGLE_REQUEST,
      request: request
    });
  },

  receiveAllRequests: function (requests) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.RECEIVE_ALL_REQUESTS,
      requests: requests
    });
  },

  removeRequest: function (request) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.REMOVE_REQUEST,
      request: request
    });
  },

  receiveSingleOffer: function (offer) {
    AppDispatcher.dispatch({
      actionType: OfferConstants.RECEIVE_SINGLE_OFFER,
      offer: offer
    });
  },

  receiveAllOffers: function (offers) {
    AppDispatcher.dispatch({
      actionType: OfferConstants.RECEIVE_ALL_OFFERS,
      offers: offers
    });
  },

  deleteOffer: function (offer) {
    AppDispatcher.dispatch({
      actionType: OfferConstants.REMOVE_OFFER,
      offer: offer
    });
  },

  receiveAllDoers: function (doers) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_ALL_DOERS,
      doers: doers
    });
  },
};

module.exports = ServerActions;
