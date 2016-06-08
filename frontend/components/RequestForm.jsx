var React = require('react'),
    CategoryStore = require('../stores/category_store.js'),
    CategoryApiUtil = require('../util/category_api_util.js'),
    RequestApiUtil = require('../util/request_api_util'),
    SessionStore = require('../stores/session_store.js'),
    ErrorStore = require('../stores/error_store.js');

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

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
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
    RequestApiUtil.createRequest(formData, this.props.closeModal);
    //
    // var errors = ErrorStore.formErrors("request");
    //
    // if (Object.keys(errors).length === 0) {
    //
    // }
    //
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors("request");
    if (!errors[field]) { return; }

    var messages = errors[field].map(function(error, i) {
      return (<li key={i}>{field} {error}</li>);
    });

    return (<ul className="form-errors">{ messages }</ul>);
  },

  render: function () {
    var categories = ["Career", "Child Care", "Computer Help", "Cooking", "Education", "Furniture Assembly",
                      "Cleaning", "General Help", "Handyman", "General Help", "Moving Help", "Pet Care",
                      "Shopping + Delivery", "Transportation"];
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
          {this.fieldErrors('title')}
        <br/><br/>
        <label for="description">Description</label>
        <textarea id="description" onChange={this.updateDescription} className="description"/>
          {this.fieldErrors('description')}
        <br/><br/>
        <label for="date">Date</label>
        <input type="date" id="date" onChange={this.updateDate} className="date"/>
          {this.fieldErrors('date')}
        <br/><br/>
        <label for="location">Location</label>
        <input type="text" id="location" onChange={this.updateLocation} className="location"/>
          {this.fieldErrors('location')}
        <br/><br/>
        <label for="time">Time</label>
        <input type="time" id="time" onChange={this.updateTime} className="time"/>
          {this.fieldErrors('time')}
        <input type="submit" value="Submit Request" className="submit-request"/>
        <button onClick={this.props.closeModal} className="close-x">X</button>
      </form>
    );
  }
});

module.exports = RequestForm;
