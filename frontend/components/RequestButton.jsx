var React = require('react'),
    Modal = require('react-modal'),
    RequestForm = require('./RequestForm'),
    CategoryStore = require('../stores/category_store'),
    CategoryApiUtil = require('../util/category_api_util.js');


var RequestButton = React.createClass({
  getInitialState: function () {
    return({ modalOpen: false });
  },

  closeModal: function () {
    this.setState({ modalOpen: false });
  },

  openModal: function () {
    this.setState({ modalOpen: true });
  },

  render: function () {
    return (
    <div>
      <button onClick={this.openModal} className="request-button">Ask a Favor</button>

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}>
        <RequestForm closeModal={this.closeModal}/>
      </Modal>
    </div>
    );
  }
});

module.exports = RequestButton;
