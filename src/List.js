import React, { Component } from 'react';
import './ionicons.css';
import './App.css';

class List extends Component {
  constructor() {
    super();
    this.state = {
      ListItems: []
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.inventory.map((item, index) => {
            return (
              <li className="listItems ion-close-circled" key={index} onClick={this.props.onListItemClick.bind(this, index)}>{item}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default List;
