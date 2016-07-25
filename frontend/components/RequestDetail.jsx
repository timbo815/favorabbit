var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    Modal = require('react-modal'),
    OfferForm = require('./OfferForm.jsx'),
    RequestApiUtil = require('../util/request_api_util.js'),
    UserStore = require('../stores/user_store.js');

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

  deleteRequest: function () {
    RequestApiUtil.deleteRequest(this.props.request.id);
  },

  renderButton: function (requester_id) {
    if (SessionStore.currentUser().id !== requester_id) {
      return (
        <div>
          <button onClick={this.openModal} className="offer-button">Make an Offer</button>
          <Modal
            style={style}
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
            <OfferForm request={this.props.request} closeModal={this.closeModal}/>
          </Modal>
        </div>
      );
    }
      else {
      return (
        <button onClick={this.deleteRequest} className="cancel-button">Cancel Request</button>
      );
    }
  },
  renderImage: function () {
    var potentialUser = UserStore.findUser(this.props.request.requester_id);
    user = potentialUser ? potentialUser : {};
    return(
      <img src={user.image_url} className="user-photo"></img>
    );
  },

  render: function () {
    return(
    <section className="detail group">
      {this.renderImage()}
      <ul>
        <li><span>Category:</span> {this.props.request.category}</li>
        <li><span>Title:</span> {this.props.request.title}</li>
        <li><span>Request:</span> {this.props.request.description}</li><br/>
        <li><span>Location:</span> {this.props.request.location}</li>
        <li><span>Date:</span> {this.props.request.date}</li>
        <li><span>Time:</span> {this.props.request.time}</li>
      </ul>
        {this.renderButton(this.props.request.requester_id)}
    </section>
    );
  }
});

module.exports = RequestDetail;
