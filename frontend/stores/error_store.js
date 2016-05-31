var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    ErrorConstants = require('../constants/error_constants'),
    ErrorStore = new Store(AppDispatcher);

var _errors = {};
var _form = "";
