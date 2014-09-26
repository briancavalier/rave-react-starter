/** @jsx React.DOM */
'use strict';

var React = require('react');

require('./styles.css');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      turn: 0
    };
  },

  componentDidMount: function() {
    setInterval(this.doTurn, 500);
  },

  doTurn: function() {
    this.setState({
      turn: this.state.turn + 1
    });
  },

  render: function() {
    var header;

    if(this.state.turn % 2 === 0) {
      header = (<h2>┏( ˆ◡ˆ)┛ ┗(ˆ◡ˆ )┓ {this.props.title} ┏( ˆ◡ˆ)┛ ┗(ˆ◡ˆ )┓</h2>);
    } else {
      header = (<h2>┗(ˆ◡ˆ )┓ ┏( ˆ◡ˆ)┛ {this.props.title} ┗(ˆ◡ˆ )┓ ┏( ˆ◡ˆ)┛</h2>);
    }
    return (
      <div className="rave-component">
        {header}
      </div>
    );
  }
});
