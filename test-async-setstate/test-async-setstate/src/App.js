import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  // Good practice to include (props) - Allows to use props in the constructor
  constructor(props) {
    super(props)
    this.state = {
      meaningOfLife: 42,
      name: 'Beto' + this.props.lastName
    }
    // this.props
  }

 /*  handleClick = () => {
    // this.setState here is async
    // This is considered a bad practice because we could have something else that could
    // also update the state. Below we use the recommended.
    this.setState({ meaningOfLife: this.state.meaningOfLife + 1 },
      () => console.log(this.state.meaningOfLife))
    // This would update after the click. That's why we are using a callback above with console.log
    // console.log(this.state.meaningOfLife)
  } */

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      // Veja no index.js na linha 7
      return { meaningOfLife: prevState.meaningOfLife + this.props.aumentar2}
    }, () => console.log(this.state.meaningOfLife))
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{this.state.name}</p>
      <p>{this.state.meaningOfLife}</p>
      <button onClick={this.handleClick}>
      Update State
      </button>
      </header>
      </div>
    );
  }
}

export default App;
