/** @jsx React.DOM */
'use strict';

var React = require('react');

var RaveComponent = require('./comp.jsx');

module.exports = function(context) {
  React.renderComponent(<RaveComponent title={context.app.name} />, document.body);
};
