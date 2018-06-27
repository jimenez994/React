import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var temp = <p>This is JSX app,js</p>
    return (
      <div className="App">
        {temp}
      </div>
    );
  }
}

export default App;
