var React = require('react'),
    FavorStore = require('../stores/favor_store.js'),
    ClientActions = require('../actions/client_actions.js'),
    FavorDetail = require('./FavorDetail');

var FavorsIndex = React.createClass({
  getInitialState: function () {
    return ({ favors: []});
  },

  componentDidMount: function () {
    FavorStore.addListener(this.handleChange);
    ClientActions.fetchFavors();
  },

  handleChange: function () {
    this.setState({ favors: FavorStore.all()});
  },

  render: function () {
    return (
      <section className="favors-index">
        <ul>
        {
          this.state.favors.map(function (favor, i) {
            return <FavorDetail key={i} favor={favor}/>;
          })
        }
        </ul>
      </section>
    );
  }
});

module.exports = FavorsIndex;
