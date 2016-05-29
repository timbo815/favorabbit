# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Favor Cycles

### Favors API Request Actions

* `fetchAllFavors`
  0. invoked from `UserDashboard` `didMount`/`willReceiveProps`
  0. `GET /api/favors` is called.
  0. `receiveAllFavors` is set as the callback.

* `createFavor`
  0. invoked from favorForm `onSubmit`
  0. `POST /api/favors` is called.
  0. `receiveSingleFavor` is set as the callback.

* `fetchSingleFavor`
  0. invoked from `FavorDetail` `didMount`/`willReceiveProps`
  0. `GET /api/favors/:id` is called.
  0. `receiveSingleFavor` is set as the callback.

* `updateFavor`
  0. invoked from `EditFavorForm` `onSubmit`
  0. `POST /api/favors` is called.
  0. `receiveSingleFavor` is set as the callback.

* `destroyFavor`
  0. invoked from delete favor button `onClick`
  0. `DELETE /api/favors/:id` is called.
  0. `removeFavor` is set as the callback.

### Favors API Response Actions

* `receiveAllFavors`
  0. invoked from an API callback.
  0. `Favor` store updates `_favors` and emits change.

* `receiveSingleFavor`
  0. invoked from an API callback.
  0. `Favor` store updates `_favors[id]` and emits change.

* `removeFavor`
  0. invoked from an API callback.
  0. `Favor` store removes `_favor[id]` and emits change.

### Store Listeners

* `UserDashboard` component listens to `Favor` store.
* `FavorDetail` component listens to `Favor` store.


## Category Cycles

### Category API Request Actions

* `fetchAllCategories`
  0. invoked from `Categories` `didMount`/`willReceiveProps`
  0. `GET /api/categories` is called.
  0. `receiveAllCategories` is set as the callback.

### Category API Response Actions

* `receiveAllCategories`
  0. invoked from an API callback.
  0. `Category` store updates `_categories` and emits change.

### Store Listeners

* `Categories` component listens to `Category` store.
