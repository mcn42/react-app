import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import routes from './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Auth0 Login Test App
          </p>
          <a
            className="App-link"
            href="/home"
            rel="noopener noreferrer"
          >
            Log In
          </a>
        </header>
      </div>
    );
  }
}

export default App;
