var React = require('react');

var OfferDetail = React.createClass({
  render: function () {
    return (
      <section className="detail">
        {this.props.offer.doer_photo}
        <ul>
          <li>{this.props.offer.message}</li>
        </ul>
      </section>
    );
  }
});

module.exports = OfferDetail;



// <img src={} className="user-photo"></img>
