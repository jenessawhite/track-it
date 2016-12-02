import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import moment from 'moment';
import uuid from 'uuid/v4';
import './index.css';

let lastSeen = JSON.parse(localStorage.getItem('lastSeen'));
var lastMoment = moment(lastSeen);
var thisMoment = moment();
var numDaysBetween = moment.duration(lastMoment.diff(thisMoment)).asHours();

let inventory = JSON.parse(localStorage.getItem('inventory'));
let name = localStorage.getItem('name');

if (!lastSeen || (numDaysBetween && numDaysBetween <= -12)) {
  if (!name || name.length === 0) {
    console.log('name setter');
    name = 'Your name here...';
    localStorage.setItem('name', name);
  }
  if (!inventory || inventory.length === 0) {
    inventory = [
      {
        text: 'Your list items...',
        finished: false,
        priority: false,
        id: uuid()
      }, {
        text: 'will go...',
        finished: false,
        priority: false,
        id: uuid()
      },  {
        text: 'here!',
        finished: false,
        priority: false,
        id: uuid()
      }
    ];
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }

}

ReactDOM.render(
  <App name={localStorage.getItem('name')}
  inventory={JSON.parse(localStorage.getItem('inventory'))}/>,
  document.getElementById('root')
);

window.setInterval(function(){
  localStorage.setItem('lastSeen', JSON.stringify(moment()));
}, 5000)
