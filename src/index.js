import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App name="Your List Name"
  inventory={['Your list items...', 'will go...', 'here!'
  ]}/>,
  document.getElementById('root')
);
