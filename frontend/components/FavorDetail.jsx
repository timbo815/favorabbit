var React = require('react');

var FavorDetail = React.createClass({
  render: function () {
    return(
    <section className="favor-detail">
      <ul>
        <li>{this.props.favor.title}</li>
        <li>{this.props.favor.description}</li>
        <li>{this.props.favor.location}</li>
        <li>{this.props.favor.date}</li>
      </ul>
    </section>
    );
  }
});

module.exports = FavorDetail;
