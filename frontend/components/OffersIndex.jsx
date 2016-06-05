var React = require('react'),
    OfferDetail = require('./OfferDetail');

var OffersIndex = React.createClass({



  render: function () {
    return (
      <section className="offers-index">
        <ul>
        {
          this.props.offers.map(function (offer, i) {
            return <OfferDetail key={i} offer={offer}/>;
          })
        }
        </ul>
      </section>
    );
  }
});

module.exports = OffersIndex;
