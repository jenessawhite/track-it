import React, { Component } from 'react';
import logo from './list-purple-icon.svg';
import './App.css';
import List from './List';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      inventory: this.props.inventory,
      newListValue: ""
    }
  }
  onNewNameSubmit(e) {
    e.preventDefault();
    console.log("name submission working!");
    this.setState({
      name: this.props.name
    })
  }
  onNewNameValue(e) {
    e.preventDefault();
    console.log("new name value change working!");
  }
  onNewListItem(e) {
    e.preventDefault();
    console.log("new list value submission working!");
    var newInventory = this.state.inventory.concat([this.state.newListValue])
    this.setState({
      inventory: newInventory,
      newListValue: ""
    })
  }
  onNewListValueChange(e) {
    e.preventDefault();
    console.log("new list value change working!");
    this.setState({
      newListValue: e.target.value,
    });
  }
  onListItemClick(index, e) {
    console.log('hey from app! ' + index);
    var head = this.state.inventory.slice(0, index);
    var tail = this.state.inventory.slice(index+1, this.state.inventory.length)
    console.log (head + tail);
    this.setState({
      inventory: head.concat(tail)
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>track-it</h1>
          <h4>The best place to track any of your lists!</h4>
        </div>
        <div className="App-intro">
          <p className="App-intro_text">
            Let's get started! What do you want to name this list?
          </p>
          <form onSubmit={this.onNewNameSubmit.bind(this)}>
          <input type="text" placeholder="Name of your list" className="App-field" onChange={this.onNewNameValue.bind(this)}/>
          <input className="btn" type="submit" value="Name it" />
        </form>
        </div>
        <div className="App-insert">
          <p className="App-insert_text">
            Awesome! Let's add something to this list. Go ahead and add something to your list. Then hit 'Add it'!
          </p>
          <form onSubmit={this.onNewListItem.bind(this)}>
          <input type="text" placeholder="what do you want to add?" className="App-field" onChange={this.onNewListValueChange.bind(this)} value={this.state.newListValue}/>
          <input className="btn" type="submit" value="Add it"/>
          </form>
        </div>
        <div className="createdList">
          <h3>{this.props.name}</h3>
          <List title="theirList" inventory={
            this.state.inventory
          } onListItemClick={this.onListItemClick.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;


// var head = this.state.inventory.slice(0, index);
// var tail = this.state.inventory.slice(index+1, this.state.inventory.length)
// console.log (head , tail);
// head.concat(tail);
