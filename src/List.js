import React, { Component } from 'react';
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

        <ul>
          {this.props.inventory.map((item, index) => {
            return (
              <li className="listItems" key={index}>
                <i className="ion-android-star" style={{color: item.priority ? '#ff00f3' : 'black'}} onClick={this.props.onListItemPriorityClick.bind(this, item.id)}> </i>

                <span className="listItems__text" style={{textDecoration: item.finished ? 'line-through' : 'none'}} onClick={this.props.onListItemFinishedClick.bind(this, item.id)}>{item.text}</span>
                <i className="ion-close-circled" onClick={this.props.onListItemDeleteClick.bind(this, item.id)}> </i>
                <i className="ion-android-done" style={{textDecoration: item.finished ? 'line-through' : 'none'}, {color: item.finished ? 'limegreen' : 'black'}} onClick={this.props.onListItemFinishedClick.bind(this, item.id)}> </i>

              </li>
            )
          })}
        </ul>

    );
  }
}

export default List;
