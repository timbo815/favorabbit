var React = require('react'),
    Modal = require('react-modal'),
    RequestForm = require('./RequestForm');

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
    width           : '830px',
    height          : '502px',
    border          : '1px solid #ccc',
    padding         : '20px',
  }
};

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
      <button onClick={this.openModal} className="welcome-button">Ask a Favor</button>

      <Modal
        style={style}
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}>
        <RequestForm closeModal={this.closeModal}/>
      </Modal>
    </div>
    );
  }
});

module.exports = RequestButton;
