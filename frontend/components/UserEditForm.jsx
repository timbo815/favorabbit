var React = require('react'),
    UserApiUtil = require('../util/user_api_util.js'),
    SessionStore = require('../stores/session_store.js');

var UserEditForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

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

  editSuccess:function () {
    this.context.router.push("home");
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('user[image]', this.state.imageFile);
    UserApiUtil.editUser(formData, this.editSuccess);
  },

  render: function () {
    return(
      <div className="user-edit">
        <form onSubmit={this.handleSubmit}>
          <label>Username
          <input type='text' value={this.state.username} onChange={this.updateUsername} className="edit-username"/>
          </label>
          <label>Upload a new photo
          <input type='file' onChange={this.updateFile}/>
          </label>
          <input type='submit' value='Save Changes' className="user-edit-submit"/>
        </form>
        <img src={this.state.imageUrl} className="user-photo-preview"/>
      </div>
    );
  }
});

module.exports = UserEditForm;
