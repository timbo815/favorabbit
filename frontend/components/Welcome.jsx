var React = require('react'),
    SessionStore = require('../stores/session_store.js'),
    RequestStore = require('../stores/request_store.js'),
    RequestButton = require('./RequestButton'),
    FavorButton = require('./FavorButton'),
    ClientActions = require('../actions/client_actions.js'),
    SearchBar = require('react-search'),
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

var Welcome = React.createClass({

  getInitialState: function () {
    return ({ requests: [], modalOpen: false});
  },

  closeModal: function () {
    this.setState({ modalOpen: false });
  },

  openModal: function () {
    this.setState({ modalOpen: true });
  },

  componentDidMount: function () {
    this.requestListener = RequestStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.requestListener.remove();
  },

  handleChange: function () {
    this.setState({requests: RequestStore.allOtherRequests()});
  },

  render: function () {

    var categories = ["Career", "Child Care", "Cleaning", "Computer Help",
      "Cooking", "Delivery", "Design", "Donations", "Education",
      "Errands", "Furniture Assembly", "General Help", "Handyman",
      "Hang Pictures", "Heavy Lifting", "Moving Help", "Painting", "Pet Care",
      "Shopping + Delivery", "Transportation", "TV Mounting", "Yard Work"];

    var currentUser = SessionStore.currentUser();
    return(
      <div className="welcome">
        <img src={currentUser.image_url} className="user-photo"></img>
        <h4>Welcome to FavoRabbit, {currentUser.username}!</h4>
        <img src={search_icon_url} className="search-icon"/>
        <SearchBar placeholder="What do you need help with?"
                   items={categories}
                   onClick={this.openModal}/>
                   <Modal
                     style={style}
                     isOpen={this.state.modalOpen}
                     onRequestClose={this.closeModal}>
                     <RequestForm closeModal={this.closeModal}/>
                   </Modal>
        <RequestButton/>
        <FavorButton requests={this.state.requests}/>
      </div>
    );
  }
});

module.exports = Welcome;
