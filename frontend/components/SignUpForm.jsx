var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    ErrorStore = require('../stores/error_store.js'),
    UserApiUtil = require('../util/user_api_util');

    var SignUpForm = React.createClass({

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
        this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
        this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
      },

      componentWillUnmount: function () {
        this.sessionListener.remove();
        this.errorListener.remove();
      },

      redirectIfLoggedIn: function () {
        if (SessionStore.isUserLoggedIn()) {
          this.context.router.push("home");
        }
      },

      handleSubmit: function (e) {
        e.preventDefault();

        var formData = {
          username: this.state.username,
          password: this.state.password
        };

        UserApiUtil.signUp(formData);
      },

      usernameChange: function (e) {
        this.setState({username: e.target.value});
      },

      passwordChange: function (e) {
        this.setState({password: e.target.value});
      },

      fieldErrors: function (field) {
        var errors = ErrorStore.formErrors("signup");
        if (!errors[field]) { return; }

        var messages = errors[field].map(function(error, i) {
          return (<li key={i}>{error}</li>);
        });

        return (<ul className="signup-errors">{ messages }</ul>);
      },

      renderLogIn: function (e) {
        e.preventDefault();
        this.context.router.push("login");
      },

      render: function () {
        return(
          <div className="signup-page">
            <form onSubmit={this.handleSubmit} className="signup-form">
              <img src={logo_url} className="logo"/><br/><br/><br/>

              {this.fieldErrors("base")}
              <label for="username" className="username-label">Username</label><br/><br/><br/>
              {this.fieldErrors("username")}
              <input type="text" value={this.state.username} onChange={this.usernameChange} className="username"/>
              <br/><br/>
              <label for="password" className="password-label">Password</label><br/><br/>
              <input type="password" value={this.state.password} onChange={this.passwordChange} className="password"/>
              <br/><br/>
              {this.fieldErrors("password")}
              <input type="submit" value="Sign Up" className="submit-button"/>
              <br/><br/><br/>
              <p>Already a user?</p><br/>
              <button onClick={this.renderLogIn} className="signup-button">Log In</button>
            </form>
            <section className="errors">{this.fieldErrors("base")}</section>
          </div>
        );
      }
    });

module.exports = SignUpForm;
