var React = require('react'),
    Dashboard = require('../components/Dashboard'),
    HowItWorks = require('./HowItWorks'),
    Header = require('../components/Header'),
    Welcome = require('../components/Welcome');
    PopularCategories = require('../components/PopularCategories');

var Home = React.createClass({

  render: function () {
    return(
      <div className="home">
        <Header />
          <Welcome />
          <HowItWorks />
          <Dashboard />
          <PopularCategories />
          <footer className="footer">Github LinkedIn</footer>
      </div>
    );
  }
});

module.exports = Home;
