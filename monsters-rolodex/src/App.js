import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      /* Adding unique ids to help React for changes. Using the ids, react can change only
      one element if needed, and not all of them */
      monsters: [],
      searchField: ''
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

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // Monsters search
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )

    return (
      <div className='App'>
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        {/* <header className="App-header">
          Monsters Rolodex
        </header> */}
        <CardList monsters = {filteredMonsters} />

      </div>
    );
  }
}

export default App;
