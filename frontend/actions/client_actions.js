var RequestApiUtil = require('../util/request_api_util.js');
var OfferApiUtil = require('../util/offer_api_util.js');
var UserApiUtil = require('../util/user_api_util.js');


var ClientActions = {
  fetchRequests: function () {
    RequestApiUtil.fetchRequests();
  },

  fetchOffers: function () {
    OfferApiUtil.fetchOffers();
  },

  fetchDoers: function () {
    UserApiUtil.fetchDoers();
  },

  fetchBookings: function () {
    BookingApiUtil.fetchBookings();
  }

};

module.exports = ClientActions;
