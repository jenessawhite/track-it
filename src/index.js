import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import moment from 'moment';
import uuid from 'uuid/v4';
import './index.css';

console.log(moment().format());
let lastSeen = JSON.parse(localStorage.getItem('lastSeen'));
var lastMoment = moment(lastSeen);
var thisMoment = moment();
var numDaysBetween = moment.duration(lastMoment.diff(thisMoment)).asHours();
let inventory = JSON.parse(localStorage.getItem('inventory'));
if (!inventory || inventory.length === 0|| (numDaysBetween && numDaysBetween <= -12)) {

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

ReactDOM.render(
  <App name="Your List Name"
  inventory={JSON.parse(localStorage.getItem('inventory'))}/>,
  document.getElementById('root')
);

window.setInterval(function(){
  localStorage.setItem('lastSeen', JSON.stringify(moment()));
}, 5000)
