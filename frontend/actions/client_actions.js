var RequestApiUtil = require('../util/request_api_util.js');


var ClientActions = {
  fetchRequests: function () {
    RequestApiUtil.fetchRequests();
  }
};

module.exports = ClientActions;
