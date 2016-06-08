var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    BookingConstants = require('../constants/booking_constants'),
    BookingStore = new Store(AppDispatcher);

  var _bookings = {};

  var addBooking = function (booking) {
    _bookings[booking.id] = booking;
  };

  var addBookings = function (bookings) {
    _bookings = {};
    bookings.forEach(function (booking) {
      _bookings[booking.id] = booking;
    });
  };

  BookingStore.userBookings = function () {
    var userBookings = [];
    for (var key in _bookings) {
      if (_bookings[key].requester_id === SessionStore.currentUser().id) {
        userBookings.push(_bookings[key]);
      }
    }
    return userRequests;
  };

  BookingStore.__onDispatch = function(payload) {
    switch(payload.actionType) {
      case BookingConstants.RECEIVE_SINGLE_BOOKING:
      addBooking(payload.booking);
      break;

      case BookingConstants.RECEIVE_ALL_BOOKINGS:
      addBookings(bookings);
      break;
    }
    this.__emitChange();
  };


module.exports = BookingStore;
