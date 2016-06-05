var RequestApiUtil = require('../util/request_api_util.js');
var OfferApiUtil = require('../util/offer_api_util.js');


var ClientActions = {
  fetchRequests: function () {
    RequestApiUtil.fetchRequests();
  },

  fetchOffers: function () {
    OfferApiUtil.fetchOffers();
  }

};

module.exports = ClientActions;
