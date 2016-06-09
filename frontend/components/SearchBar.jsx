var React = require('react');
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var SearchBar = React.createClass({
  getInitialState: function () {
    return { searchString: "" };
  },

  handleInput: function (event) {
    this.setState({ searchString: event.currentTarget.value });
  },

  matches: function () {
    var matches = [];
    // if(this.state.searchString.length === 0){
    //   return this.props.categories;
    // }

    this.props.categories.forEach(function (category) {
      var sub = category.slice(0, this.state.searchString.length);
      if(sub.toLowerCase() === this.state.searchString.toLowerCase()){
        matches.push(category);
      }
    }.bind(this));

    if (matches.length === 0) {
      matches.push("No matches");
    }

    return matches;
  },

  selectName: function (event) {
    var name = event.currentTarget.innerText;
    this.setState({ searchString: name });
  },

  render: function () {
    var results = this.matches().map(function (result, i) {
      return (
          <li key={i} onClick={this.selectName}>{result}</li>
      );
    }.bind(this));


    return(
      <div>
        <input onChange={this.handleInput} value={this.state.searchString} />
        <ul>
          {results}
        </ul>
      </div>
    );
  }
});
// 
// module.exports = SearchBar;

// <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
// </ReactCSSTransitionGroup>
