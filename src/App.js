import React, { Component } from 'react';
import './App.css';
import User from './User/User';

class App extends Component {

  state = {
  persons: [
    { name: 'Austin', age: 26 },
    { name: 'Rodney', age: 7 },
    { name: 'Nolan', age: 23 }
  ]
};

  inputHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Austin', age: 26 },
        { name: event.target.value, age: 7 },
        { name: 'Nolan', age: 23 }
      ]
    });
  };

  render() {
      const style = {
        backgroundColor: 'gray',
        font: 'inherit',
        border: '4px solid orange',
        padding: '8px',
        cursor: 'pointer'
      };

    return (
      <div className="App">
      <h1>User Input</h1>
      <p>Feel free to type some things!</p>
      <button
      style={style}
      onClick={() => this.inputHandler('Aus?')}>Switch Name</button>
      <User
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.inputHandler.bind(this, 'Aus!!')}
        changed={this.inputHandler}>My Hobbies: Sleeping</User>
      </div>
    );
  }
}

export default App;
