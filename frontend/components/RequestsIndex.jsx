var React = require('react'),
    RequestDetail = require('./RequestDetail');

var RequestsIndex = React.createClass({



  render: function () {
    return (
      <section className="requests-index">
        <ul>
        {
          this.props.requests.map(function (request, i) {
            return <RequestDetail key={i} request={request}/>;
          })
        }
        </ul>
      </section>
    );
  }
});

module.exports = RequestsIndex;
