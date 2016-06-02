var React = require('react'),
    Modal = require('react-modal'),
    RequestForm = require('./RequestForm'),
    CategoryStore = require('../stores/category_store'),
    CategoryApiUtil = require('../util/category_api_util.js');

var RequestButton = React.createClass({
  getInitialState: function () {
    return({ modalOpen: false, categories: []});
  },

  componentDidMount: function () {
    CategoryStore.addListener(this.handleChange);
    CategoryApiUtil.fetchAllCategories();
  },

  handleChange: function () {
    this.setState({categories: CategoryStore.all()});
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
      <button onClick={this.openModal}>Ask a Favor</button>

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}>
        <RequestForm categories={this.state.categories}/>
      </Modal>
    </div>
    );
  }
});

module.exports = RequestButton;
