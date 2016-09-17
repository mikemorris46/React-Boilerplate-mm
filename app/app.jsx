import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

$(document).foundation();

// app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate 3 project</p>,
  document.getElementById('app')
);
