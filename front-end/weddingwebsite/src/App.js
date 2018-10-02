import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Image } from 'semantic-ui-react';
import AccountModal from './components/account/AccountModal';
import Nav from './components/nav/Nav';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container>
          <Nav></Nav>
        </Container>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Image wrapped size='large' src={burn2018} /> */}
      </div>
    );
  }
}

export default App;
