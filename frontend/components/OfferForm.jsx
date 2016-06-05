var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    OfferApiUtil = require('../util/offer_api_util.js');


var OfferForm = React.createClass({
  getInitialState: function () {
    return({ message: "" });
  },

  updateMessage: function (e) {
    this.setState({ message: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var formData = {
      message: this.state.message,
      request_id: this.props.request_id,
      doer_id: SessionStore.currentUser().id,
    };
    OfferApiUtil.createOffer(formData);
  },

  render: function () {
    return (
      <div>
        <section className="request-detail">
          <ul>
            <li>Category: {this.props.request.category}</li>
            <li>{this.props.request.title}</li>
            <li>{this.props.request.description}</li>
            <li>Location: {this.props.request.location}</li>
            <li>{this.props.request.date}</li>
            <li>{this.props.request.time}</li>
          </ul>
        </section>
        <form onSubmit={this.handleSubmit}>
          <label>Your Message Here<br/><br/>
            <textarea onChange={this.updateMessage} className="description"/>
          </label>
          <input type="submit" value="Submit Offer" className="submit-request"/>
        </form>
      </div>
    );
  }
});

module.exports = OfferForm;
