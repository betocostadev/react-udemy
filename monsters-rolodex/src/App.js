import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Hello, Beto!'
    }
  }

  render() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
            name="input"
            placeholder="good">
          </input>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            {this.state.string}
          </p>
          <button onClick={() => this.setState({ string: 'Hello, Cornholio!' })}>
            Change text
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
