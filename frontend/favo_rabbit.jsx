var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Modal = require('react-modal'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory,
    SessionApiUtil = require('./util/session_api_util.js'),
    SessionStore = require('./stores/session_store.js'),
    App = require('./components/App.jsx'),
    LoginForm = require('./components/LoginForm.jsx'),
    SignUpForm = require('./components/SignUpForm.jsx'),
    Home = require('./components/Home.jsx'),
    OfferForm = require('./components/OfferForm.jsx'),
    Account = require('./components/Account.jsx');


var routes = (
  <Route path="/" component={App}>
  <IndexRoute component={LoginForm}/>
  <Route path="/signup" component={SignUpForm} />
  <Route path="/login" component={LoginForm} />
  <Route path="home" component={Home} onEnter={_ensureLoggedIn}/>
  <Route path="offer" component={OfferForm} onEnter={_ensureLoggedIn}/>
  <Route path="account" component={Account} onEnter={_ensureLoggedIn}/>
  </Route>
);

function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {
  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn () {
    if(!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }

    asyncDoneCallback();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body);
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>,
  document.getElementById('content'));
});
