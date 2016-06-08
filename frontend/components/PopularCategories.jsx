var React = require('react');

var PopularCategories = React.createClass({
  render: function () {
    return(
      <div className="popular-categories group">
        <h2>Popular Categories</h2>
        <ul>
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
      </div>
    );
  }
});



module.exports = PopularCategories;
