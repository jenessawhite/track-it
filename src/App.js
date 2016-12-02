import React, { Component } from 'react';
import uuid from 'uuid/v4';
import logo from './list-black-icon.svg';
import './App.css';
import './index.css';
import './ionicons.css';
import List from './List';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      inventory: this.props.inventory,
      newListValue: "",
      newNameValue: ""
    }
  }
  onNewNameSubmit(e) {
    e.preventDefault();
    var newNameValue = this.state.newNameValue
    this.setState({
      name: newNameValue,
      newNameValue: ""
    })
    localStorage.setItem('name', newNameValue);
  }
  onNewNameValueChange(e) {
    e.preventDefault();
    this.setState({
      newNameValue: e.target.value,
    })
  }
  onNewListItem(e) {
    e.preventDefault();
    var newInventory = this.state.inventory.slice(0).concat([{
      text:this.state.newListValue,
      finished: false,
      priority: false,
      id: uuid()
    }]);
    this.setState({
      inventory: newInventory,
      newListValue: ""
    })
    localStorage.setItem('inventory', JSON.stringify(newInventory));
  }
  onNewListValueChange(e) {
    e.preventDefault();
    this.setState({
      newListValue: e.target.value,
    })
  }
  onListItemFinishedClick(id, e) {
    var newInventory = this.state.inventory.slice(0).map((item)=>{
      if(item.id === id) {
        return Object.assign(item, {
          finished: !item.finished
        })
      } else {
        return item;
      }
    });

    this.setState({
      inventory: newInventory
    });
    localStorage.setItem('inventory', JSON.stringify(newInventory));
  }
  onListItemPriorityClick(id, e) {
    console.log('Priority item', id);
    var newInventory = this.state.inventory.slice(0).map((item)=>{
      if(item.id === id) {
        return Object.assign(item, {
          priority: !item.priority
        })
      } else {
        return item;
      }
    });

    this.setState({
      inventory: newInventory
    });
    localStorage.setItem('inventory', JSON.stringify(newInventory));
  }
  onListItemDeleteClick(id, e) {
    var newInventory = this.state.inventory.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      inventory: newInventory
    });
    localStorage.setItem('inventory', JSON.stringify(newInventory));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>track-it</h1>
          <h4>The best place to track any of your lists!</h4>
        </div>
        <div className="App-content">
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
            <List title="theirList" inventory={this.state.inventory}
              onListItemPriorityClick={this.onListItemPriorityClick.bind(this)} onListItemFinishedClick={this.onListItemFinishedClick.bind(this)} onListItemDeleteClick={this.onListItemDeleteClick.bind(this)} />
          </div>
          <p className="App-insert_text">
            If something is priority, simply click the star on the left of the item.
            <br/>
            Finished the task? Select the checkbox and high-five yourself for continually amazing us all!
          </p>
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
