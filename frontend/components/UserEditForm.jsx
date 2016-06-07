var React = require('react'),
    UserApiUtil = require('../util/user_api_util.js'),
    SessionStore = require('../stores/session_store.js');

var UserEditForm = React.createClass({
  getInitialState: function () {
    return({
      username: SessionStore.currentUser().username,
      imageFile: null,
      imageUrl: null
    });
  },

  updateFile: function(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  },

  updateUsername: function(e) {
    this.setState({username: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('user[image]', this.state.imageFile);
    UserApiUtil.editUser(formData);
  },

  render: function () {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.username} onChange={this.updateUsername}/>
          <input type='file' onChange={this.updateFile}/>
          <input type='submit' value='Save Changes'/>
        </form>
        <img src={this.state.imageUrl}/>
      </div>
    );
  }
});

module.exports = UserEditForm;
