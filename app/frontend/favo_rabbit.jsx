var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('../components/App.jsx'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;


var routes = (
  <Route path="/" component={App}>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>,
  document.getElementById('content'));
});
