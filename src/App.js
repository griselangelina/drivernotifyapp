import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './page/Homepage';

import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Homepage />
      </div>
    );
  }
}

export default App;
