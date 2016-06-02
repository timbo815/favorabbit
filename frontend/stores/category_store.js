var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    CategoryConstants = require('../constants/category_constants'),
    CategoryStore = new Store(AppDispatcher);

var _categories = [];

var addCategories = function (categories) {
  _categories = [];
  _categories.push(categories);
};

CategoryStore.all = function () {
  return _categories;
};

CategoryStore.allNames = function () {
  var names = [];
  for (var key in _categories) {
    names.push(_categories[key][key].title);
  }
  return names;
};

CategoryStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case CategoryConstants.RECEIVE_ALL_CATEGORIES:
    addCategories(payload.categories);
    break;
  }
  this.__emitChange();
};


module.exports = CategoryStore;
