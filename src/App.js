import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MyRouter from './router/router';
import MyMedia from './comment/media';
import Analyzator from './comment/taskAnalizator';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyMedia username="Bob" text="რა კაი ამოცანა იყო" />        
        <BrowserRouter>
          <MyRouter />
        </BrowserRouter>
        <Analyzator />
      </div>
    );
  }
}

export default App;