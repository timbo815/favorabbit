var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    ErrorStore = require('../stores/error_store.js'),
    OfferApiUtil = require('../util/offer_api_util.js');


var OfferForm = React.createClass({
  getInitialState: function () {
    return({ message: "" });
  },

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
  },

  updateMessage: function (e) {
    this.setState({ message: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var formData = {
      message: this.state.message,
      request_id: this.props.request.id
      // doer_id: SessionStore.currentUser().id,
    };
    OfferApiUtil.createOffer(formData, this.props.closeModal);
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors("offer");
    if (!errors[field]) { return; }

    var messages = errors[field].map(function(error, i) {
      return (<li key={i}>{field} {error}</li>);
    });

    return (<ul className="form-errors">{ messages }</ul>);
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
            {this.fieldErrors('message')}
          </label>
          <input type="submit" value="Submit Offer" className="submit-request"/>
        </form>
          <button onClick={this.props.closeModal} className="close-x">X</button>
      </div>
    );
  }
});

module.exports = OfferForm;
