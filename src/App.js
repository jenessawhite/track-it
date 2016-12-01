import React, { Component } from 'react';
import logo from './list-black-icon.svg';
import './App.css';
import './index.css';
import './ionicons.css';
import List from './List';


class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem("name", this.props.name);
    var name = localStorage.getItem("name");
    console.log(name);
    this.state = {
      name: name,
      inventory: this.props.inventory,
      newListValue: "",
      newNameValue: ""
    }
  }
  onNewNameSubmit(e) {
    e.preventDefault();
    console.log("New List Name - " + this.state.newNameValue);
    this.setState({
      name: this.state.newNameValue,
      newNameValue: ""
    })
  }
  onNewNameValueChange(e) {
    e.preventDefault();
    this.setState({
      newNameValue: e.target.value,
    })
  }
  onNewListItem(e) {
    e.preventDefault();
    console.log("List item added - " +  this.state.newListValue);
    localStorage.setItem("test", "Hello World!");
    var test = localStorage.getItem("test");
    console.log(test);
    this.setState({
      inventory: this.state.inventory.concat([this.state.newListValue]),
      newListValue: ""
    })
  }
  onNewListValueChange(e) {
    e.preventDefault();
    this.setState({
      newListValue: e.target.value,
    })
  }
  onListItemClick(index, e) {
    console.log('Deleted item');
    var head = this.state.inventory.slice(0, index);
    var tail = this.state.inventory.slice(index+1, this.state.inventory.length)
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
          <form className="formName" onSubmit={this.onNewNameSubmit.bind(this)}>
          <input type="text" placeholder="Name of your list" className="App-field" onChange={this.onNewNameValueChange.bind(this)} value={this.state.newNameValue} />
          <input className="btn" type="submit" value="Name it" />
        </form>
        </div>
        <div className="App-insert">
          <p className="App-insert_text">
            Awesome! Let's add something to this list. Go ahead and add something to your list. Then hit 'Add it'!
          </p>
          <form className="formList" onSubmit={this.onNewListItem.bind(this)}>
          <input type="text" placeholder="what do you want to add?" className="App-field" onChange={this.onNewListValueChange.bind(this)} value={this.state.newListValue}/>
          <input className="btn" type="submit" value="Add it"/>
          </form>
          <p className="App-insert_text">
            You can also delete your items by pressing the "x". Navigating away the site? No worries your items will be here when you get back (unless you close the browser...so don't do that!)
          </p>
        </div>
        <div className="createdList">
          <h2 className="listName">{this.state.name}</h2>
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
