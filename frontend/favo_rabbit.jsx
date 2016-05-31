var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory,
    App = require('./components/App.jsx'),
    LoginForm = require('./components/LoginForm.jsx'),
    SignUpForm = require('./components/SignUpForm.jsx');


    var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={LoginForm} />
        <Route path="signup" component={SignUpForm} />
      </Route>
    );

    document.addEventListener("DOMContentLoaded", function () {
      ReactDOM.render(<Router history={hashHistory} routes={routes}/>,
      document.getElementById('content'));
    });
