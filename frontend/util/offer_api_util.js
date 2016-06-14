var ServerActions = require('../actions/server_actions.js'),
    ErrorActions = require('../actions/error_actions.js');

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

  createOffer: function (formData, callback) {
    $.ajax({
      type: "POST",
      url: "api/offers",
      data: {offer: formData},
      success: function (offer) {
        ServerActions.receiveSingleOffer(offer);
        callback();
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("offer", errors);
        }
    });
  },

  updateOffer: function (offerData) {
    $.ajax({
      type: "PATCH",
      url: "api/offers/" + offerData.id,
      data: {offer: offerData},
      success: function (offer) {
        ServerActions.receiveSingleOffer(offer);
      }
    });
  },

  deleteOffer: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/offers/" + id,
      success: function (offer) {
        ServerActions.deleteOffer(offer);
      }
    });
  }

};

module.exports = OfferApiUtil;
