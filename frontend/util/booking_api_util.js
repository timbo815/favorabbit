var BookingApiUtil = {
  makeBooking: function (offerData) {
    $.ajax({
      type: "PATCH",
      url: "api/offers" + offerData.id,
      data: {offer: offerData},
      success: function (offer) {
        
      }
    });
  },

  fetchBookings: function () {
    $.ajax({
      url: "api/bookings",
      success: function (bookings) {
        ServerActions.receiveAllBookings(bookings);
      }
    });
  }
};

module.exports = BookingApiUtil;
