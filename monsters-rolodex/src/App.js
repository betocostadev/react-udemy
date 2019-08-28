import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      /* Adding unique ids to help React for changes. Using the ids, react can change only
      one element if needed, and not all of them */
      monsters: [
      ]
    };
  }

  // Life Cycle Methods => componentDidMount
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({ monsters: users }))
  // }
  // Making it async
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    this.setState({ monsters: json })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          Monsters Rolodex
        </header> */}
        <CardList>
          { this.state.monsters.map(monster => (
              <h1 key={monster.id}> {monster.name} </h1>
          ))}
        </CardList>


      </div>
    );
  }
}

export default App;
