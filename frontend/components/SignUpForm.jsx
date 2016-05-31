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
          this.context.router.push("/");
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
          return <li key={i}>{error}</li>;
        });

        return <ul>{ messages }</ul>;
      },

      render: function () {
        return(
          <div>
            <form onSubmit={this.handleSubmit}>
              <label for="username">Username</label>
              {this.fieldErrors("username")}
              <input type="text" value={this.state.username} onChange={this.usernameChange} id="username"/>
              <br/><br/>
              <label for="password">Password</label>
              {this.fieldErrors("password")}
              <input type="password" value={this.state.password} onChange={this.state.passwordChange} id="password"/>
              <br/><br/>
              <input type="submit" value="Sign Up"/>
            </form>
          </div>
        );
      }
    });

module.exports = SignUpForm;
