var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    Modal = require('react-modal'),
    OfferForm = require('./OfferForm.jsx');

var style = {
  overlay : {
    position        : 'absolute',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
  },
  content : {
    margin          : 'auto',
    width           : '900px',
    height          : '502px',
    border          : '1px solid #ccc',
    padding         : '20px',
  }
};

var RequestDetail = React.createClass({
  getInitialState: function () {
    return({ modalOpen: false });
  },

  closeModal: function () {
    this.setState({ modalOpen: false });
  },

  openModal: function () {
    this.setState({ modalOpen: true });
  },

  renderOffer: function (requester_id) {
    if (SessionStore.currentUser().id !== requester_id) {
      return (
        <div>
          <button onClick={this.openModal} className="offer-button">Make an Offer</button>
          <Modal
            style={style}
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
            <OfferForm request={this.props.request}/>
          </Modal>
        </div>
      );
    }
  },

  render: function () {
    var currentUser = SessionStore.currentUser();
    return(
    <section className="detail group">
      <img src={currentUser.image_url} className="user-photo"></img>
      <ul>
        <li>Category: {this.props.request.category}</li>
        <li>Title: {this.props.request.title}</li>
        <li>Request: {this.props.request.description}</li><br/>
        <li>Location: {this.props.request.location}</li>
        <li>Date: {this.props.request.date}</li>
        <li>Time: {this.props.request.time}</li>
      </ul>
        {this.renderOffer(this.props.request.requester_id)}
    </section>
    );
  }
});

module.exports = RequestDetail;