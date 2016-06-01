var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    ErrorStore = require('../stores/error_store.js'),
    SessionApiUtil = require('../util/session_api_util.js');

var LoginForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return ({
      username: "",
      password: ""
    });
  },

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.errorListener.remove();
  },

  redirectIfLoggedIn: function () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var formData = {
      username: this.state.username,
      password: this.state.password
    };

    SessionApiUtil.login(formData);
  },

  usernameChange: function (e) {
    this.setState({username: e.target.value});
  },

  passwordChange: function (e) {
    this.setState({password: e.target.value});
  },

  renderSignUp: function (e) {
    e.preventDefault();
    this.context.router.push("signup");
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors("login");
    if (!errors[field]) { return; }

    var messages = errors[field].map(function(error, i) {
      return <li key={i}>{error}</li>;
    });

    return <ul>{ messages }</ul>;
  },

  render: function () {
    return(
      <div className="login-page">
        <form onSubmit={this.handleSubmit} className="login-form">
          { this.fieldErrors("base") }

          <label for="username" className="username-label">Username</label><br/><br/>
          {this.fieldErrors("username")}
          <input type="text" value={this.state.username} onChange={this.usernameChange} className="username"/>
          <br/><br/>
          <label for="password" className="password-label">Password</label><br/><br/>
          {this.fieldErrors("password")}
          <input type="password" value={this.state.password} onChange={this.passwordChange} className="password"/>
          <br/><br/>
          <input type="submit" value="Sign In" className="submit-button"/>
          <br/><br/><br/>
          <p>Not a user? Sign up here</p><br/>
          <button onClick={this.renderSignUp} className="signup-button">Sign Up</button>
        </form>

      </div>
    );
  }
});


module.exports = LoginForm;
