var React = require('react');

var userEditForm = React.createClass({
  getInitialState: function () {
    return({
      username: "",
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

  // handlSubmit: function (e) {
  //   e.preventDefault();
  //   var formData = new FormData();
  //   formData.append('user[username]', this.state.username);
  //   formData.append('user[image]',this.state.imageFile);
  //   UserApi
  // },

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

module.exports = userEditForm;
