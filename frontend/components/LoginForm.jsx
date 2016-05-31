var React = require('react'),
    SessionStore = require('../stores/session_store.js');


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
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
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

  render: function () {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="username">Username</label>
          <input type="text" value={this.state.username} onChange={this.usernameChange} id="username"/>
          <br/><br/>
          <label for="password">Password</label>
          <input type="password" value={this.state.password} onChange={this.passwordChange} id="password"/>
          <br/><br/>
          <input type="submit" value="Sign In"/>
        </form>
        <p>Not a user? Sign up here
          <button onClick={this.renderSignUp}>Sign Up</button>
        </p>
      </div>
    );
  }
});


module.exports = LoginForm;
