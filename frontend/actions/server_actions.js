var AppDispatcher = require('../dispatcher/dispatcher');
var RequestConstants = require('../constants/request_constants');
var CategoryConstants = require('../constants/category_constants');
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

  receiveAllCategories: function (categories) {
    AppDispatcher.dispatch({
      actionType: CategoryConstants.RECEIVE_ALL_CATEGORIES,
      categories: categories
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

  receiveSingleBooking: function (booking) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.RECEIVE_SINGLE_BOOKING,
      booking: booking
    });
  },

  receiveAllBookings: function (bookings) {
    AppDispatcher.dispatch({
      actionType: BookingConstants.RECEIVE_ALL_BOOKINGS,
      bookings: bookings
    });
  }
};

module.exports = ServerActions;
