import React from 'react';
import styled from 'styled-components';
// Using the styled components library
import './App.css';

// Default way
const styledH2 = {
  fontSize: '1.2rem',
  color: 'NavajoWhite'
}

// Using styled components

const Text = styled.div`
  margin: 1rem 2rem;
  padding-bottom: 0.1rem;
  color: bisque;
  font-size: 1.1rem;
  border-bottom: ${({isActive}) => isActive ? '1px solid bisque' : '3px dotted bisque'};
`

const Button = styled.button`
	background-color: #44c767;
	border-radius:4px;
	border:1px solid #18ab29;
	display: inline-block;
	cursor:pointer;
	color: #ffffff;
	font-size: 1rem;
	padding:8px 16px;
	text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
  :hover {
	background-color:#5cbf2a;
  }
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CSS in JS</h1>
      </header>
    <main>
      <h2 style={styledH2}>Default styled H2</h2>
      <Text isActive={true}><p>I am a styled component</p></Text>
      <Button>Love grelos</Button>
    </main>
    </div>
  );
}

export default App;
