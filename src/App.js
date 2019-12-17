import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {

  state = {
  users: [
    { name: 'Austin', comment: 'Hello!' }
  ]
};

  inputHandler = (event) => {
    this.setState({
      users: [
        { name: event.target.value, comment: event.target.value }
      ]
    });
  };

  render() {

    return (
      <div className="App">
      <h1>User Input</h1>
      <p>Feel free to type some things!</p>
      <User
        name={this.state.users[0].name}
        comment={this.state.users[0].comment}
        changed={this.inputHandler}>My Hobbies: Sleeping</User>
      </div>
    );
  }
}

export default App;
