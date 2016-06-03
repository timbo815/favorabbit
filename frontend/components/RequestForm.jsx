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
      location: "",
      category: "Cleaning"
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
    this.setState({ category: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var formData = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
      category: this.state.category,
      requester_id: SessionStore.currentUser().id
    };
    RequestApiUtil.createRequest(formData);
    this.props.closeModal();
  },

  render: function () {
    var categories = ["Cleaning", "Shopping + Delivery", "Handyman",
                      "Moving Help", "General Help", "Upgrade Your Home"];
    return (
      <form onSubmit={this.handleSubmit} className="request-form">
        <label for="category">Category</label>
        <select id="category" onChange={this.updateCategory}>
          {categories.map(function (category, i) {
            return <option key={i}>{category}</option>;
          })}
        </select>
        <br/><br/>
        <label for="title">Title</label>
        <input type="text" id="title" onChange={this.updateTitle} className="title"/>
        <br/><br/>
        <label for="description">Description</label>
        <textarea id="description" onChange={this.updateDescription} className="description"/>
        <br/><br/>
        <label for="date">Date</label>
        <input type="date" id="date" onChange={this.updateDate} className="date"/>
        <br/><br/>
        <label for="location">Location</label>
        <input type="text" id="location" onChange={this.updateLocation} className="location"/>
        <br/><br/>
        <label for="time">Time</label>
        <input type="time" id="time" onChange={this.updateTime} className="time"/>
        <input type="submit" value="Submit Request" className="submit-request"/>
        <button onClick={this.props.closeModal} className="close-x">X</button>
      </form>
    );
  }
});

module.exports = RequestForm;
