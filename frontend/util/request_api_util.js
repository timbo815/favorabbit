var ServerActions = require('../actions/server_actions.js');
var ErrorActions = require('../actions/error_actions.js');

var RequestApiUtil = {
  fetchRequests: function () {
    $.ajax({
      url: "api/requests",
      success: function (requests) {
        ServerActions.receiveAllRequests(requests);
      }
    });
  },

  createRequest: function (requestData, callback) {
    $.ajax({
      type: "POST",
      url: "api/requests",
      data: {request: requestData},
      success: function (request) {
        ServerActions.receiveSingleRequest(request);
        callback();
      },
      error: function (xhr) {
          console.log("create request error in RequestApiUtil#createRequest");
          var errors = xhr.responseJSON;
          ErrorActions.setErrors("request", errors);
        }
    });
  },

  updateRequest: function (requestData) {
    $.ajax({
      type: "PATCH",
      url: "api/requests" + requestData.id,
      data: {request: requestData},
      success: function (request) {
        ServerActions.receiveSingleRequest(request);
      }
    });
  },

  deleteRequest: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/requests" + id,
      sucess: function (request) {
        ServerActions.removeRequest(request);
      }
    });
  }
};

module.exports = RequestApiUtil;
