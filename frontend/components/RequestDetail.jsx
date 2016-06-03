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
        <li>Category: {this.props.request.category}</li>
        <li>{this.props.request.title}</li>
        <li>{this.props.request.description}</li>
        <li>Location: {this.props.request.location}</li>
        <li>{this.props.request.date}</li>
        <li>{this.props.request.time}</li>
      </ul>
    </section>
    );
  }
});

module.exports = RequestDetail;
