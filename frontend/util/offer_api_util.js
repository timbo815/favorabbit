var ServerActions = require('../actions/server_actions.js');

var OfferApiUtil = {
  fetchOffers: function () {
    $.ajax({
      type: "GET",
      url: "api/offers",
      success: function(offers) {
        ServerActions.receiveAllOffers(offers);
      }
    });
  },

  createOffer: function (formData) {
    $.ajax({
      type: "POST",
      url: "api/offers",
      data: {offer: formData},
      success: function (offer) {
        ServerActions.receiveSingleOffer(offer);
      }
    });

  }
};

module.exports = OfferApiUtil;
