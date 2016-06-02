var React = require('react');

var RequestDetail = React.createClass({
  checkRequests: function () {
    console.log("hello");
  },

  render: function () {
    return(
    <section className="request-detail">
      <ul>
        {this.checkRequests}
        <li>{this.props.request.title}</li>
        <li>{this.props.request.description}</li>
        <li>{this.props.request.location}</li>
        <li>{this.props.request.date}</li>
      </ul>
    </section>
    );
  }
});

module.exports = RequestDetail;
