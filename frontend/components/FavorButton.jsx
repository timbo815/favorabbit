var React = require('react'),
    Modal = require('react-modal'),
    RequestsIndex = require('./RequestsIndex');

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

var FavorButton = React.createClass({
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
      <button onClick={this.openModal} className="favor-button">Do a Favor</button>

      <Modal
        style={style}
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}>
        <h2 className="favor-index-heading">Pay it Forward!</h2>
          <RequestsIndex requests={this.props.requests} closeModal={this.closeModal}/>
            <button onClick={this.closeModal} className="close-x">X</button>
      </Modal>
    </div>
    );
  }
});

module.exports = FavorButton;
