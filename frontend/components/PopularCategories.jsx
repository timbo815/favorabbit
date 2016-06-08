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

var PopularCategories = React.createClass({
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
    return(
      <div className="popular-categories group">
        <h2>Popular Categories</h2>
        <ul onClick={this.openModal}>
          <li>
            <img src={moving_help_url} className="moving-help"/>
            Moving Help
          </li>
          <li>
            <img src={transportation_url} className="transportation"/>
            Transportation
          </li>
          <li>
            <img src={pet_care_url} className="pet-care"/>
            Pet Care
          </li>
          <li>
            <img src={general_help_url} className="general-help"/>
            General Help
          </li>
          <li><img src={computer_help_url} className="computer-help"/>
          Computer Help
          </li>
          <li>
            <img src={furniture_assembly_url} className="furniture-assembly"/>
            Furniture Assembly
          </li>
        </ul>

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



module.exports = PopularCategories;
