import React, { Component } from 'react';
import './List.css';

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
        <div className="List">
          <ul>
            {this.props.inventory.map((item, index) => {
              return (
                <li key={index} onClick={this.props.onListItemClick.bind(this, index)}>{item}</li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
