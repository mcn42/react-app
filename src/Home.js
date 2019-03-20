/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import routes from './routes.js';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Auth0 Login Test App Home
          </p>
          
        </header>
      </div>
    );
  }
}

export default Home;
