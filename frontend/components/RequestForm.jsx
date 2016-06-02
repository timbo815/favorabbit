var React = require('react'),
    CategoryStore = require('../stores/category_store.js'),
    CategoryApiUtil = require('../util/category_api_util.js'),
    RequestApiUtil = require('../util/request_api_util'),
    SessionStore = require('../stores/session_store.js');

var RequestForm = React.createClass({
  getInitialState: function () {
    return ({
      title: "",
      description: "",
      date: "",
      time: "",
      location: ""
    });
  },

  updateTitle: function (e) {
    this.setState({ title: e.target.value });
  },

  updateDescription: function (e) {
    this.setState({ description: e.target.value });
  },

  updateLocation: function(e) {
    this.setState({ location: e.target.value });
  },

  updateDate: function(e) {
    this.setState({ date: e.target.value });
  },

  updateTime: function(e) {
    this.setState({ time: e.target.value });
  },

  updateCategory: function(e) {
    this.setState({ category_id: e.target.key });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var formData = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
      category_id: 0,
      requester_id: SessionStore.currentUser().id
    };
    RequestApiUtil.createRequest(formData);
  },

  render: function () {

    return (
      <form onSubmit={this.handleSubmit}>
        <label for="category">Category</label>
        <select id="category" onChange={this.updateCategory}>
          {this.props.categories.map(function (category, i) {
            return <option key={i}>{category[i].title}</option>;
          })}
          <option>hi</option>
        </select>
        <label for="title">Title</label>
        <input type="text" id="title" onChange={this.updateTitle}/>
        <label for="description">Description</label>
        <textarea id="description" onChange={this.updateDescription}/>
        <label for="date">Date</label>
        <input type="date" id="date" onChange={this.updateDate}/>
        <label for="location">Location</label>
        <input type="text" id="location" onChange={this.updateLocation}/>
        <label for="time">Time</label>
        <input type="time" id="time" onChange={this.updateTime}/>
        <input type="submit" value="Post Request"/>
      </form>
    );
  }
});

module.exports = RequestForm;
