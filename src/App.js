import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MyRouter from './router/router';
import MyMedia from './comment/media';
import Analyzator from './comment/taskAnalizator';
 

const topics = [
      {
        name: "გრაფი",
        descrip: "აქ ნახავთ თეორიას გრაფის შესახებ",
        number: 10
      },
      {
        name: "გეომეტრია",
        descrip: "აქ ნახავთ თეორიას გეომეტრიის შესახებ",
        number: 25
      },
      {
        name: "ალგებრა",
        descrip: "აქ ნახავთ თეორიას ალგებრის შესახებ",
        number: 20
      }
]

const topics_heads = ["N", "დასახელება", "აღწერა", "რაოდენობა"];


const tasks = [
      {
        name: "გრაფი",
        descrip: "აქ ნახავთ ამოცანებს გრაფის შესახებ",
        number: 20
      },
      {
        name: "გეომეტრია",
        descrip: "აქ ნახავთ ამოცანებს გეომეტრიის შესახებ",
        number: 35
      },
      {
        name: "ალგებრა",
        descrip: "აქ ნახავთ ამოცანებს ალგებრის შესახებ",
        number: 30
      }
]

const tasks_heads = ["N", "ამოცანის თემა", "აღწერა", "რაოდენობა"];


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